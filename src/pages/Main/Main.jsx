import React, { useState, useRef } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { setAreaCode } from '../../store/modules/triplog';
import MainIntro from './MainIntro';

// import { useEffect } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// gsap.reigisterPlugin(ScrollTrigger);

export default function Main() {
  let state = useSelector((state) => state.users);

  const dispatch = useDispatch();
  const navigator = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const nickName = useSelector((state) => state.users.userNickName);
  const [cardText, setCardText] = useState([
    '오랜만의 서울여행! 여행 포인트 ✨',
    '고즈넉한 가을 감성💛 강원의 대표 명소 7',
    "요즘 부산 가면 '이곳'에 꼭 들린대요",
    '잘 몰랐던 경주 지금이 떠날 기회!',
    '복잡한 서울? Trip Log로 한번에 해결!',
  ]);

  // const text = useRef();
  // useEffect(() => {
  //   let ctx = gsap.context(() => {
  //     gsap.to('.text', {
  //       rotation: '+=360',
  //     });
  //     return () => ctx.revert;
  //   });
  // });
  return (
    <>
      {/* <MainScroll /> */}
      {console.log(state)}
      {/* // <MainIntro /> */}
      <Nav />
      {/* <section class="slide1">
        <img
          src={process.env.PUBLIC_URL + '/images/mainBeach.jpg'}
          alt="beach"
          className="beach"
        />
        <h1 className="text fw-bold" ref={text}>
          TRIP LOG
        </h1>
        <img
          src={process.env.PUBLIC_URL + '/images/mainBeachRemove.png'}
          alt="beachRemove"
          className="beachRemove"
        />
      </section> */}
      <Container>
        <h1 className="fw-bold lh-base mt-5 mb-5 mx-5">
          <span style={{ color: '#198754' }}>{nickName}</span>님,
          <br></br>환영합니다 👋!
        </h1>

        <div
          lg
          md={2}
          sm
          xs={1}
          className="d-flex flex-wrap justify-content-center col-8 mx-auto mb-4"
        >
          <Button
            className="flex-fill mx-3 mb-2"
            onClick={() => {
              state.isLogin ? navigator('/budget') : navigator('/login');
            }}
            variant="success"
          >
            💸 가계부
          </Button>
          <Button
            className="flex-fill  mx-3"
            onClick={() => {
              state.isLogin ? navigator('/checklist') : navigator('/login');
            }}
            variant="success"
          >
            📝 여행체크리스트
          </Button>
        </div>

        <Row lg md={6} sm xs={3} className="d-flex col-8 mx-auto text-center">
          <Col
            onClick={() => {
              dispatch(setAreaCode(1));
              navigator('/submain/1');
            }}
            style={{ cursor: 'pointer' }}
          >
            <p className="fs-1 mb-1">🏙</p>
            <p className="fw-bold">서울</p>
          </Col>
          <Col
            onClick={() => {
              dispatch(setAreaCode(6));
              navigator('/submain/6');
            }}
            style={{ cursor: 'pointer' }}
          >
            <p className="fs-1 mb-1">⛴ </p>
            <p className="fw-bold">부산</p>
          </Col>
          <Col
            onClick={() => {
              dispatch(setAreaCode(32));
              navigator('/submain/32');
            }}
            style={{ cursor: 'pointer' }}
          >
            <p className="fs-1 mb-1">🥔</p>
            <p className="fw-bold">강원</p>
          </Col>
          <Col
            onClick={() => {
              dispatch(setAreaCode(35));
              navigator('/submain/35');
            }}
            style={{ cursor: 'pointer' }}
          >
            <p className="fs-1 mb-1">🎢</p>
            <p className="fw-bold">경주</p>
          </Col>
          <Col
            onClick={() => {
              dispatch(setAreaCode(37));
              navigator('/submain/37');
            }}
            style={{ cursor: 'pointer' }}
          >
            <p className="fs-1 mb-1">🍛</p>
            <p className="fw-bold">전주</p>
          </Col>
          <Col
            onClick={() => {
              dispatch(setAreaCode(39));
              navigator('/submain/39');
            }}
            style={{ cursor: 'pointer' }}
          >
            <p className="fs-1 mb-1">🍊</p>
            <p className="fw-bold">제주</p>
          </Col>
        </Row>

        <Row sm xs={1} md={2} lg={4} className="g-4 mt-5">
          {Array.from({ length: 6 }).map((_, idx) => (
            <Col>
              <Card>
                <Card.Img
                  variant="top"
                  src={`/images/main/main_grid${idx}.jpg`}
                />
                <Card.ImgOverlay>
                  <Card.Body>
                    <Card.Text
                      className="fw-bold fs-4 text-light"
                      // style={{ color: '#f7f7f7' }}
                      // fontFamily: 'ChosunBg',
                    >
                      {cardText[idx]}
                    </Card.Text>
                  </Card.Body>
                </Card.ImgOverlay>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
}
