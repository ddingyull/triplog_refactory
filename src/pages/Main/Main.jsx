import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Image,
  Carousel,
} from 'react-bootstrap';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
// 리듀서
import { useDispatch } from 'react-redux';
import { setAreaCode } from '../../store/modules/triplog';

import MainScroll from './MainScroll';

export default function Main() {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  return (
    <>
      {/* <MainScroll /> */}
      <Nav />

      <Container>
        <h1 className="fw-bold lh-base mt-5 mb-5">
          <span style={{ color: '#198754' }}>Trip</span>님,
          <br></br>환영합니다!
        </h1>

        <div className="d-flex justify-content-center col-8 mx-auto mb-4">
          <Button
            className="flex-fill mx-3"
            onClick={() => {
              navigator('/budget');
            }}
            variant="success"
          >
            💸 가계부
          </Button>
          <Button
            className="flex-fill  mx-3"
            onClick={() => {
              navigator('/checklist');
            }}
            variant="success"
          >
            📝 여행체크리스트
          </Button>
        </div>

        <Row className="d-flex col-8 mx-auto text-center">
          <Col
            onClick={() => {
              dispatch(setAreaCode(1));
              navigator('/submain/1');
            }}
            style={{ cursor: 'pointer' }}
          >
            <p className="fs-2 mb-1">🏙</p>
            <p className="fw-bold">서울</p>
          </Col>
          <Col
            onClick={() => {
              dispatch(setAreaCode(6));
              navigator('/submain/6');
            }}
            style={{ cursor: 'pointer' }}
          >
            <p className="fs-2 mb-1">⛴ </p>
            <p className="fw-bold">부산</p>
          </Col>
          <Col
            onClick={() => {
              dispatch(setAreaCode(32));
              navigator('/submain/32');
            }}
            style={{ cursor: 'pointer' }}
          >
            <p className="fs-2 mb-1">🥔</p>
            <p className="fw-bold">강원</p>
          </Col>
          <Col
            onClick={() => {
              dispatch(setAreaCode(35));
              navigator('/submain/35');
            }}
            style={{ cursor: 'pointer' }}
          >
            <p className="fs-2 mb-1">🎢</p>
            <p className="fw-bold">경주</p>
          </Col>
          <Col
            onClick={() => {
              dispatch(setAreaCode(37));
              navigator('/submain/37');
            }}
            style={{ cursor: 'pointer' }}
          >
            <p className="fs-2 mb-1">🍛</p>
            <p className="fw-bold">전주</p>
          </Col>
          <Col
            onClick={() => {
              dispatch(setAreaCode(39));
              navigator('/submain/39');
            }}
            style={{ cursor: 'pointer' }}
          >
            <p className="fs-2 mb-1">🍊</p>
            <p className="fw-bold">제주</p>
          </Col>
        </Row>

        <Row xs={2} md={2} lg={4} className="g-4 mt-5">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Col>
              <Card>
                <Card.Img
                  variant="top"
                  src={`/images/main/main_grid${idx}.jpg`}
                />
                <Card.ImgOverlay>
                  <Card.Body>
                    <Card.Text className="fw-bold">홍보 Card 제목 ✨</Card.Text>
                  </Card.Body>
                </Card.ImgOverlay>
              </Card>
            </Col>
          ))}
        </Row>

        <Row className="d-flex justify-content-center">
          <Image src="/images/gridImg.jpg" />
        </Row>

        <div className="d-flex justify-content-center mt-4">
          <Button variant="outline-success col-6"> 공지사항</Button>
          <Button variant="success col-6" onClick={handleClose}>
            쿠폰 및 이벤트
          </Button>
        </div>

        <Carousel variant="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./images/main_swiper1.jpg"
              alt="First slide"
              height={'700rem'}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./images/mian_swiper2.png"
              alt="Second slide"
              height={'700rem'}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./images/main_swiper3.jpg"
              alt="Third slide"
              height={'700rem'}
            />
          </Carousel.Item>
        </Carousel>
      </Container>
      <Footer />
    </>
  );
}
