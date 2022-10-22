import { Container, Card, Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import Forminput from '../../components/Forminput';
import Btn from '../../components/Button'


export default function Login({text, clickEvent, textColor, backgroundColor, hoverColor}) {
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
            id='이름(별명)'
            errMessage={'존재하는 닉네임입니다.'}
            />
            <Forminput
              id='아이디'
              errMessage={'에러에러'}
            />
            <Forminput
              id='비밀번호'
              errMessage={'@,. 포함되어야합니다'}
            />
          <Btn 
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