import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { Container, Card, Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import Forminput from '../../components/Forminput';
import Btn from '../../components/Button';
import { login } from '../../store/modules/users';

const ERROR_MSG = {
  required: '필수 정보입니다.',
  invalidUserEmail: '@ 를 사용하세요',
  invalidUserPW: '8자 이상 영문, 숫자를 사용하세요.',
};

// 카카오톡 로그인 필요 정보, CLIENT_ID 로 REST API 키 사용 필요
const KAKAO_CLIENT_ID = 'f25833457b45f3935443a269e01a48b1';
const KAKAO_REDIRECT_URI = 'http://localhost:3000/oauth/callback/kakao';
const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;

export default function Login({
  text,
  clickEvent,
  textColor,
  backgroundColor,
  hoverColor,
}) {
  const [nickname, setNickname] = useState('');
  const [useremail, setUseremail] = useState('');
  const [userpw, setUserpw] = useState('');
  const [errorMsg, setErrMsg] = useState(ERROR_MSG);
  const [success, setSuccess] = useState([]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // 로그인 검증 파트
  const checkUser = () => {
    if (useremail === '' || userpw === '') {
      alert('아이디와 비밀번호를 입력해주세요');
      navigate('/login');
    }
    axios
      .post('http://localhost:4000/users/register', {
        type: 'local',
        identifier: useremail,
        password: userpw,
      })
      .then((response) => {
        // true면 로그인처리, 아니면 경고창 보여주거나 로그인페이지보여주기
        console.log('로그인 성공');
        console.log('user 토큰', response.data.jwt);
        localStorage.setItem('token', response.data.jwt);
        navigate('/');
      })
      .catch((error) => {
        console.log('로그인 실패', error.response);
      });
  };

  const [UserEmailValid, setUserEmailValid] = useState(false);
  const [UserPwValid, setUserPwValid] = useState(false);
  const [fixEmailValue, setFixEmailValue] = useState('thals0@gmail.com');
  const [fixPwlValue, setFixPwValue] = useState('11111111aa');

  const handleEmail = (e) => {
    setUseremail(e.target.value);
    const USEREMAIL_REGEX =
      /^([0-9a-zA-Z_.-]+)@([0-9a-zA-Z_-]+)(.[0-9a-zA-Z_-]+){1,2}$/;
    if (USEREMAIL_REGEX.test(useremail)) {
      setUserEmailValid(true);
    } else {
      setUserEmailValid(false);
    }
  };

  const handlePw = (e) => {
    setUserpw(e.target.value);
    const USERPW_REGEX = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/;
    if (USERPW_REGEX.test(userpw)) {
      setUserPwValid(true);
    } else {
      setUserPwValid(false);
    }
  };

  const [loginCondition, setLoginCondition] = useState({
    condition: false,
    msg: '회원 정보를 정확하게 입력하세요!',
  });
  const [openDialog, setOpenDialog] = useState(false);

  async function loginUser() {
    setOpenDialog(false);

    async function normalLogin() {
      const loginInfo = {
        email: useremail,
        password: userpw,
      };
      console.log(loginInfo);

      if (useremail !== '' && userpw !== '') {
        const response = await fetch('http://localhost:4000/user/login ', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(loginInfo),
        });

        if (response.status === 200) {
          const result = await response.json();
          console.log(result);
          if (result.result) {
            dispatch(login(result));
            navigate('/');
          } else {
            alert('해당 정보를 찾을 수 없습니다');
            navigate('/login');
          }
        } else {
          throw new Error('로그인 실패');
        }
      } else {
      }
    }

    // normalLogin();

    async function porfolioLogin() {
      const loginInfo = {
        email: fixEmailValue,
        password: fixPwlValue,
      };
      console.log(loginInfo);

      const response = await fetch('http://localhost:4000/user/login ', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginInfo),
      });

      if (response.status === 200) {
        const result = await response.json();
        console.log(result);
        if (result.result) {
          dispatch(login(result));
          navigate('/');
        } else {
          alert('해당 정보를 찾을 수 없습니다');
          navigate('/login');
        }
      } else {
        throw new Error('로그인 실패');
      }
    }

    porfolioLogin();
  }
  return (
    <>
      <Nav />
      <Container style={{ width: '30rem' }} className="m-auto mt-5">
        <Card className="p-5 mb-5">
          <div className="d-flex mb-5">
            <h4>TripLog</h4>
            <a href="/Users" style={{ textDecoration: 'none' }}>
              <Badge
                bg="secondary"
                text="light"
                className="ms-2 p-1 d-inline justify-content-end"
                style={{ fontSize: '.3rem' }}
              >
                아직 회원이 아니라면?
              </Badge>
            </a>
          </div>
          <Forminput
            id={'useremail'}
            label="아이디"
            // normal로그인히기
            // value={useremail}
            // portfolio로그인하기
            value={fixEmailValue}
            onChange={handleEmail}
            inputProps={{
              type: 'text',
              placeholder: 'test@gmail.com',
            }}
            validText={
              !UserEmailValid && useremail.length > 0
                ? errorMsg.invalidUserEmail
                : null
            }
          />
          <Forminput
            id={'userpw'}
            label="비밀번호"
            // normal로그인하기
            // value={userpw}
            // portfolio로그인하기
            value={fixPwlValue}
            onChange={handlePw}
            inputProps={{
              type: 'password',
              placeholder: '영문, 숫자 포함 8글자 이상',
            }}
            validText={
              !UserPwValid && userpw.length > 0 ? errorMsg.invalidUserPW : null
            }
          />
          <Btn
            // onClick={() => {(checkUser())}}
            onClick={() => {
              loginUser();
            }}
            text="로그인"
            textColor="#fff"
            backgroundColor="#333"
            hoverColor="#fff"
            hoverBackgroundColor="#555"
          ></Btn>
          <a
            href={KAKAO_AUTH_URL}
            style={{ textDecoration: 'none', width: '350px' }}
          >
            <Btn
              text="카카오로그인"
              textColor="#333"
              backgroundColor="#ffd503"
              hoverColor="#333"
              hoverBackgroundColor="#d0ad00"
            ></Btn>
          </a>
        </Card>
      </Container>
      <Footer />
    </>
  );
}
