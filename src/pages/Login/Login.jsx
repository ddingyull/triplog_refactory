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


export default function Login({text, clickEvent, textColor, backgroundColor, hoverColor}) {
  const [ nickname, setNickname ] = useState('');
  const [ useremail, setUseremail ] = useState('');
  const [ userpw, setUserpw ] = useState('');
  const {Navigate} = useNavigate();

  // 로그인 검증 파트
  const checkUser = () => {
    let nicknameValue
    if(useremail === "" || userpw === "") {
      alert('아이디와 비밀번호를 입력해주세요');
      return;
    }
    axios.post('http://localhost:3000/users', {
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
            inputProps={{
              type:'text',
              placeholder:'test@gmail.com'
            }}
            errMessage={'존재하는 닉네임입니다.'}
          />
        <Forminput
          id={'userpw'}
          label='비밀번호'
          inputProps={{
            type:'password',
            placeholder:'영문, 숫자 포함 8글자 이상'
          }}       
        />
        <Btn 
          text='로그인' 
          textColor='#fff' 
          backgroundColor='#333'
          hoverColor='#fff'
          hoverBackgroundColor='#555'>
        </Btn>
        <Btn 
          onClick={() => {(checkUser())}}
          text='카카오로그인' 
          textColor='#333' 
          backgroundColor='#ffd503'
          hoverColor='#333'
          hoverBackgroundColor='#d0ad00'>
        </Btn>
      </Card>
          </Container>
      <Footer/>
    </>
  )
}