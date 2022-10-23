import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { Container, Card, Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import Forminput from '../../components/Forminput';
import Btn from '../../components/Button'


export default function Users() {
  const [ nickname, setNickname ] = useState('');
  const [ useremail, setUseremail ] = useState('');
  const [ userpw, setUserpw ] = useState('');
  const {Navigate} = useNavigate();

  const register = () => {
    axios.post('http://localhost:3000/users', {
    userID: 1,
    nickname: nickname,
    useremail: useremail,
    userpw: userpw,
    // user_img: userImg,
    regDate: new Date(),
  })
  .then(response => {
    console.log('회원 등록 됨');
    console.log('유저 정보', response.data.user);
    console.log('유저 토큰', response.data.jwt);
    localStorage.setItem('토큰', response.data.jwt);
    Navigate('/')
  })
  .catch(error => {
    console.log('error', error.response);
  });
  }

  return(
    <>
      <Nav/>
      <Container style={{width:'30rem'}} className='m-auto mt-5'>
          <Card className='p-5 mb-5'>
            <div className='d-flex mb-5'>
              <h4>회원가입</h4>
              <a href="/Login" style={{textDecoration: 'none'}}>
              <Badge 
                bg="secondary" 
                text="light" 
                className='ms-2 p-1 d-inline justify-content-end' 
                style={{fontSize:'.3rem'}}
              >
                이미 회원이라면?
              </Badge></a>
            </div>

            <Forminput
              id={'nickname'}
              label='이름(별명)'
              value={nickname}
              onChange={(e) => {
                setNickname(e.target.value);
                console.log(e.target.value);
                console.log(nickname);
              }}
              inputProps={{
                type:'text',
                placeholder:'닉네임을 입력해주세요.',
              }}
              errMessage={'존재하는 닉네임입니다.'}
            />
            <Forminput
              id={'useremail'}
              label='아이디'
              value={useremail}
              onChange={(e) => {setUseremail(e.target.value);}}
              inputProps={{
                type:'text',
                placeholder:'이메일을 입력해주세요.'
              }}
            />
            <Forminput
              id={'userpw'}
              label='비밀번호'
              value={userpw}
              onChange={(e) => {setUserpw(e.target.value);}}
              inputProps={{
                type:'password',
                placeholder:'비밀번호를 입력해주세요.'
              }}
            />
          <Btn 
            id="submit"
            type="submit"
            onClick={() => {(register())}}
            text='가입하기' 
            textColor='#fff' 
            backgroundColor='#333'
            hoverColor='#fff'
            hoverBackgroundColor='#555'>
          </Btn>
        </Card>
        </Container>
      <Footer/>
      </>
  )
}