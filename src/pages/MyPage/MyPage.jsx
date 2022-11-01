import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import { Container, Tab, Row, Col, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../../components/Footer'
import PageNav from '../../components/Nav'
import MypageMain from './MyPageMain';
import MyTrip from './MyTrip';
import MyReview from './MyReview';
import MyPick from './MyPick';
import Budget from './Budget';
import CheckList from './content/CheckList';
import Review from '../../components/Review';
import PlanList from '../../components/Plan/PlanList'

export default function MyPage() {

  // useEffect (() => {
  //   AuthRoute();
  // }, []);
  
  // const AuthRoute = function() {
  //   return (
  //     isLogin ? 
  //       <MyPage/> 
  //       : alert('로그인이 필요한 페이지입니다'),
  //         Navigate('/Login')
  //       )
  //         }

  // const Navigate = useNavigate();
  // const isLogin = localStorage.getItem("token");
    return(
      <>
      <PageNav/>
      <Container>
      <Row style={{marginTop: '100px'}}>
        <Col sm={10} className='m-auto'> 
        {/* <MypageNav /> */}
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={2}>
        <div style={{width:'10rem', height:'10rem'}} className='bg-success rounded text-center'>TripLog</div>
          <Nav 
            variant="pills" 
            className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="trip">나의 여행 조회</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="checklist">체크리스트</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="budget">가계부</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="pick">찜한 곳</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="review">리뷰</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="trip">
              <PlanList/>
            </Tab.Pane>
            <Tab.Pane eventKey="checklist">
            <h4 className='fw-bold fs-3 text-center p-4'>여행 준비 체크리스트</h4>
              <CheckList/>
            </Tab.Pane>
            <Tab.Pane eventKey="budget">
              
            </Tab.Pane>
            <Tab.Pane eventKey="pick">
              
            </Tab.Pane>
            <Tab.Pane eventKey="review">
              <h4 className='fw-bold fs-3 text-center p-4' > 꼬부기님의 리뷰 </h4>
              <Review/>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
        </Col>        
      </Row>
    </Container>
      
    <Footer/>
    </>
    )
}