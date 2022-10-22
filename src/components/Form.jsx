
import { Card, Container, Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import Forminput from './Forminput'
import Btn from './Button'

export default function Form({text, clickEvent, textColor, backgroundColor, hoverColor}) {
  return(
    <Container className='p-5'>
      <div className='d-flex mb-5'>
      <h4 >로그인</h4>
      <a href="/Signup">
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
        id='아이디'
        errMessage={'에러났어요'}
      />
      <Forminput
        id='비밀번호'
        errMessage={'@,. 포함되어야합니다'}
      />
        <Btn 
          text='로그인' 
          textColor='#fff' 
          backgroundColor='#333'
          hoverColor='#999'>
        </Btn>
        <Btn 
          text='카카오로그인' 
          textColor='#333' 
          backgroundColor='#ffd503'
          hoverColor='#999'>
        </Btn>
    </Container>
  )
}
