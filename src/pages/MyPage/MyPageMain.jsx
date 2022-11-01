import React from 'react';
import styled from 'styled-components';
import MypageNav from './content/MypageNav';
import MyReview from './MyReview';

import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function MyPageMain() {
  return (
    <>
      {/* <Nav /> */}
      <Container>
        <Row style={{ marginTop: '100px' }}>
          <Col md={3}>
            {' '}
            <MypageNav />{' '}
          </Col>
          <Col>
            <h3 className="fw-bold fs-3 text-center pb-3">
              {' '}
              꼬부기님의 여행 조회{' '}
            </h3>
            {/* <MyReview/> */}
          </Col>
        </Row>
      </Container>
      {/* <Footer /> */}
    </>
  );
}

const List = styled.div`
  border-bottom: 1px solid #9b9393;

  > div {
    img {
      float: left;
      width: 140px;
      height: 140px;
      transform: translate(-30%, 0);
    }

    span:nth-of-type(1) {
      font: bold 17px sans-serif;
    }

    span:nth-of-type(2) {
      font: bold 14px sans-serif;
      color: #a19a9a;
      margin-left: 15px;
    }
  }
`;
