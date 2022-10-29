import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { Container, Card, Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import Forminput from '../../components/Forminput';
import Btn from '../../components/Button'

const ERROR_MSG = {
  required: '필수 정보입니다.',
  invalidUserEmail: '@ 를 사용하세요',
  invalidUserPW: '8자 이상 영문, 숫자를 사용하세요.',
};

// 카카오톡 로그인 필요 정보, CLIENT_ID 로 REST API 키 사용 필요
const KAKAO_CLIENT_ID = '0c33348e34eeceef7d378e029e920c12';
const KAKAO_REDIRECT_URI = 'http://localhost:3000/oauth/callback/kakao';
const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;

export default function Login({text, clickEvent, textColor, backgroundColor, hoverColor}) {
  const [ nickname, setNickname ] = useState('');
  const [ useremail, setUseremail ] = useState('');
  const [ userpw, setUserpw ] = useState('');
  const [ errorMsg, setErrMsg] = useState(ERROR_MSG)
  const {Navigate} = useNavigate();

  // 로그인 검증 파트
  const checkUser = () => {
    let nicknameValue
    if(useremail === "" || userpw === "") {
      alert('아이디와 비밀번호를 입력해주세요');
      return;
    }
    axios.post('http://localhost:4000/user/login', {
    identifier: useremail,
    password: userpw,
  })
  .then(response => {
    console.log('로그인 성공');
    console.log('user 토큰', response.data.jwt);
    localStorage.setItem('token', response.data.jwt);
    nicknameValue = nickname;
    Navigate('/')
  })
  .catch(error => {
    console.log('error', error.response);
  });
  }

// 중복로그인 방지 : 로그인된 상태에서 로그인페이지 접근 시 메인페이지로 이동
useEffect(() => {
  if(localStorage.getItem('token')) {
    Navigate('/');
  }
}, [])

const [UserEmailValid, setUserEmailValid ] = useState(false);
const [UserPwValid, setUserPwValid ] = useState(false);

const handleEmail = (e) => {
  setUseremail(e.target.value);
  const USEREMAIL_REGEX =  
    /^([0-9a-zA-Z_.-]+)@([0-9a-zA-Z_-]+)(.[0-9a-zA-Z_-]+){1,2}$/
  if( USEREMAIL_REGEX.test(useremail)) {
    setUserEmailValid(true);
  } else {
    setUserEmailValid(false);
  }
}

const handlePw = (e) => {
  setUserpw(e.target.value);
  const USERPW_REGEX =  /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/
  if( USERPW_REGEX.test(userpw)) {
    setUserPwValid(true);
  } else {
    setUserPwValid(false);
  }
}

  return(
    <>
      <Nav/>
          <Container style={{width:'30rem'}} className='m-auto mt-5'>
          <Card className='p-5 mb-5'>
            <div className='d-flex mb-5'>
              <h4 >TripLog</h4>
              <a href="/Users" style={{textDecoration: 'none'}}>
              <Badge 
                bg="secondary" 
                text="light" 
                className='ms-2 p-1 d-inline justify-content-end' 
                style={{fontSize:'.3rem'}}
              >
                아직 회원이 아니라면?
              </Badge></a>
            </div>
          <Forminput
            id={'useremail'}
            label='아이디'
            value={useremail}
            onChange={handleEmail}
            inputProps={{
              type:'text',
              placeholder:'test@gmail.com'
            }}
            validText={!UserEmailValid && useremail.length > 0 ?
              (errorMsg.invalidUserEmail):null}
          />
        <Forminput
          id={'userpw'}
          label='비밀번호'
          value={userpw}
          onChange={handlePw}
          inputProps={{
            type:'password',
            placeholder:'영문, 숫자 포함 8글자 이상'
          }}
          validText={!UserPwValid && userpw.length > 0 ?
            (errorMsg.invalidUserPW):null}      
        />
        <Btn 
          onClick={() => {(checkUser())}}
          text='로그인' 
          textColor='#fff' 
          backgroundColor='#333'
          hoverColor='#fff'
          hoverBackgroundColor='#555'>
        </Btn>
        {/* 카카오 로그인 */}
        <a href={KAKAO_AUTH_URL}>
        <Btn 
          // onClick={() => {(checkUser())}}
          text='카카오로그인' 
          textColor='#333' 
          backgroundColor='#ffd503'
          hoverColor='#333'
          hoverBackgroundColor='#d0ad00'>
        </Btn>
        </a>          
      </Card>
          </Container>
      <Footer/>
    </>
  )
}