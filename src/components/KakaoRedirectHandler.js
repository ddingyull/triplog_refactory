import React, {useEffect} from 'react'
import { useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { login } from '../store/modules/triplog';

export default function KakaoRedirectHandler() {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    const CODE = new URL(window.location.href).searchParams.get('code');
    console.log(CODE);

    // 카카오 디벨롭퍼에서 주는 정보 
    const GRANT_TYPE = 'authorization_code';
    const KAKAO_CLIENT_ID = '0c33348e34eeceef7d378e029e920c12'
    const KAKAO_REDIRECT_URI = 'http://localhost:3000/oauth/callback/kakao'

    async function loginFetch() {
      const tokenResponse = await fetch(
        `https://kauth.kakao.com/oauth/token?grant_type=${GRANT_TYPE}&client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URI}&code=${CODE}`,
        {
          method: 'POST',
          headers: {
            'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
          }
        }
      );

      // 토큰이 안나오는 이유를 찾기 위한 코드
      // const err = await tokenResponse.json();
      // console.log(err);
      
      // 토큰 받는 코드
      if(tokenResponse.status === 200) {
        const token = await tokenResponse.json();
        console.log(token);

      
      const userResponese = await fetch(`https://kapi.kakao.com/v2/user/me`, {
        method: 'POST',
          headers: {
            Authorization: `Bearer ${token.access_token}`,
            'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
          },
      });

      if (userResponese.status === 200) {
        const userKaKaoInfo = await userResponese.json();
        console.log(userKaKaoInfo);

        const userLoginInfo = {
          email: userKaKaoInfo.kakao_account.email,
          nickName: userKaKaoInfo.kakao_account.profile.nickname,
        };
        console.log(userLoginInfo)

        const registerResponse = await fetch(
          'http://localhost:4000/users',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              type: 'kakao',
              email: userKaKaoInfo.kakao_account.email,
              nickName: userKaKaoInfo.kakao_account.profile.nickname,
            }),
          }
        );

        if (registerResponse.status === 200) {
          dispatch(login(userLoginInfo));
          navigate('/');
        } else {
          alert('회원 등록 이상');
          navigate('/login');
        }
      } else {
        alert('카카오 로그인 회원 정보 획득 실패');
        navigate('/login');
      }
      } else {
        alert('카카오 로그인 토큰 발행 실패');
        navigate('/login');
      }
    }
    loginFetch();
  }, [])

  // return (
  //   // <div>KakaoRedirectHandler</div>
  // )
}
