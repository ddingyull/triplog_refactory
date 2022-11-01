import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Card, Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import Forminput from '../../components/Forminput';
import Btn from '../../components/Button';

const ERROR_MSG = {
  required: '필수 정보입니다.',
  invalidUserEmail: '@ 를 사용하세요',
  invalidUserPW: '8자 이상 영문, 숫자를 사용하세요.',
};

export default function Users() {
  // // const [users, setUsers] = useState({nickname:'', useremail:'', userpw:''})
  // const [ nickname, setNickname ] = useState('');
  // const [ useremail, setUseremail ] = useState('');
  // const [ userpw, setUserpw ] = useState('');
  // const [ errorMsg, setErrMsg] = useState(ERROR_MSG)
  // const {Navigate} = useNavigate();

  // // let userID = 1;
  // const register = () => {
  //   axios.post('http://localhost:4000/user/register', {
  //       type:'local',
  //       nickname: nickname,
  //       email: useremail,
  //       password: userpw,
  //       // userID: userID++,
  //       // user_img: userImg,
  //       // regDate: new Date(),
  // })
  // .then(response => {
  //   console.log('회원 등록 성공');
  //   console.log('유저 정보', response.data.user);
  //   console.log('user token', response.data.jwt);
  //   localStorage.setItem('token', response.data.jwt);
  //   Navigate('/')
  // })
  // .catch(error => {
  //   console.log('error', error.response);
  // });
  // }

  // const [users, setUsers] = useState({nickname:'', useremail:'', userpw:''})
  const [nickname, setNickname] = useState('');
  const [useremail, setUseremail] = useState('');
  const [userpw, setUserpw] = useState('');
  const [errorMsg, setErrMsg] = useState(ERROR_MSG);
  const navigate = useNavigate();

  // let userID = 1;
  const register = () => {
    console.log(nickname, useremail, userpw);
    axios
      .post('http://localhost:4000/user/register', {
        type: 'local',
        nickName: nickname,
        email: useremail,
        password: userpw,
      })
      .then((response) => {
        console.log('회원 등록 성공');
        console.log(response.data);
        // console.log('유저 정보', response.data.user);
        // console.log('user token', response.data.jwt);
        // localStorage.setItem('token', response.data.jwt);
        navigate('/');
      })
      .catch((error) => {
        console.log('error', error.response);
      });
  };

  const [UserEmailValid, setUserEmailValid] = useState(false);
  const [UserPwValid, setUserPwValid] = useState(false);

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

  return (
    <>
      <Nav />
      <Container style={{ width: '30rem' }} className="m-auto mt-5">
        <Card className="p-5 mb-5">
          <div className="d-flex mb-5">
            <h4>회원가입</h4>
            <a href="/Login" style={{ textDecoration: 'none' }}>
              <Badge
                bg="secondary"
                text="light"
                className="ms-2 p-1 d-inline justify-content-end"
                style={{ fontSize: '.3rem' }}
              >
                이미 회원이라면?
              </Badge>
            </a>
          </div>

          <Forminput
            id={'nickname'}
            label="이름(별명)"
            value={nickname}
            onChange={(e) => {
              setNickname(e.target.value);
            }}
            inputProps={{
              type: 'text',
              placeholder: '닉네임을 입력해주세요.',
            }}
            validText={!UserEmailValid ? errorMsg.required : null}
          />

          <Forminput
            id={'useremail'}
            label="아이디"
            value={useremail}
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
            value={userpw}
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
            id="submit"
            type="submit"
            onClick={() => {
              register();
            }}
            text="가입하기"
            textColor="#fff"
            backgroundColor="#333"
            hoverColor="#fff"
            hoverBackgroundColor="#555"
          ></Btn>
        </Card>
      </Container>
      <Footer />
    </>
  );
}
