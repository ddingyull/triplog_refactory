import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import 'react-calendar/dist/Calendar.css';
import CalendarModule from '../../components/CalendarModule';
import moment from 'moment';
import data from '../../data'

export default function CalendarMain({ text, planDate, subText, plandate, pickAreaName, pickAreaImg }){
  const [value, onChange] = useState(new Date());
  const [areaImg, setAreaImg] = useState(data);
  

  return(
      <Container className="position-relative d-flex justify-content-center">
      <Row className='col-lg-10 col-md-12'>
        <Col>
          <img className="d-block m-auto pt-5" alt="메인이미지" src={pickAreaImg} style={{width:"85%"}}/>
          <Col xs={6} className='position-absolute top-0 start-0' style={{marginTop:'18vh', marginLeft:'25vw'}}>
            <Title className="fw-bold text-dark fs-2 justify-content-start">Always {pickAreaName} With TripLog</Title>
            <p className='m-0 fs-6 text-dark text-center position-absolute top-10 start-0'>{subText}</p>
          </Col>
          <Col xs={6} className='position-absolute top-0 start-0 d-block fs-6' style={{marginTop:'29vh', marginLeft:'24.5vw'}}>
            <CalendarModule 
              planDate={planDate}
              />
            <LinkBtn href='/Budget' className='btn btn-light ms-1 my-1'>💸 더치페이하기?</LinkBtn>
            <LinkBtn href='/CheckList' className='btn btn-light d-block ms-1 my-2'>🔖 두고가시는건 없으신가요?</LinkBtn>
          </Col>
        </Col>
      </Row>
    </Container>
  )
}
const Title = styled.div`
font: 2rem/1 'Inter'
`
const LinkBtn = styled.button`
  background-color: rgba(255, 255, 255, .5);
  border: none;
  font-size: 12px;
  padding: 6px;
  border-radius: 3px;


  &:hover{
  /* background-color: green; */
  }
`