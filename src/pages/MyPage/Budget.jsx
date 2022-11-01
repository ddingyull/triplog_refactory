import React from 'react'
import styled from "styled-components"
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import MypageNav from './content/MypageNav'
import MyReview from './MyReview'


import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Budget() {
  return (
    <>
    <Nav/>
    <Container>
      <Row style={{marginTop: '100px'}}>
        <Col md={3}> <MypageNav /> </Col>
        <Col> 
          <h3 className='fw-bold fs-3 text-center pb-3' > 꼬부기님의 여행 조회 </h3>
          <MyReview/>
        </Col>
        
      </Row>
    </Container>
    <Footer/>
    </>
  )
}