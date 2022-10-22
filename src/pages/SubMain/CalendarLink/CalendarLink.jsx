import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import CalendarModule from '../../../components/CalendarModule';

export default function CalendarLink({ text, subText }){

  const [value, onChange] = useState(new Date());

  const CalendarShow = () => {
    // 모달창으로 보여주기
  }

  return(
      <Container className="col-7 m-auto d-flex justify-content-center">
        <Button onClick={() =>(CalendarShow())} className="">출발 일정 지정하기</Button>

        <CalendarModule/>

        <Row className='col-12'>
          <img className="col-7 d-block m-4" alt="지도이미지" src='/images/backgroundImg.png' style={{width:"100%"}}/>
        </Row>

        <Row className=''>
        <Col className='m-3'>
          <Title className="justify-content-start fw-bold m-5">{text}</Title>
          {/* <p className='m-0 fs-6' >2022.10.25 - 10.28</p> */}
          <p className='m-0 fs-6 text-secondary'>{subText}</p>
        </Col>
        </Row>

      </Container>
  )
}
const Title = styled.p`
font: 2rem/1 'Inter'
`
