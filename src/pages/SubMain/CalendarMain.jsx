import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import 'react-calendar/dist/Calendar.css';
import CalendarModule from '../../components/CalendarModule';
import moment from 'moment';
import data from '../../data';

export default function CalendarMain({
  text,
  planDate,
  subText,
  plandate,
  pickAreaName,
  pickAreaImg,
}) {
  const [value, onChange] = useState(new Date());
  const [areaImg, setAreaImg] = useState(data);

  return (
    <Container className="justify-content-center">
      <Row className="col-lg-10 m-auto">
        <Col>
          <img
            className="d-block m-auto pt-5 position-relative"
            alt="메인이미지"
            src={pickAreaImg}
            style={{ width: '100%' }}
          />

          <ColTitle
            xs={6}
            // className="position-absolute top-0 start-0"
            style={{
              marginTop: '50vh',
              marginLeft: '18vw',
            }}
          >
            <p
              className="fw-bold justify-content-start small-font-size"
              style={{ fontFamily: 'ChosunBg' }}
            >
              {pickAreaName}
            </p>
            <p
              className="mx-3"
              style={{ color: '#fff', fontSize: '18px', fontFamily: 'Inter' }}
            >
              {subText}
            </p>
          </ColTitle>
          <ColBtn
            xs={6}
            className="position-absolute top-0 start-0 d-block fs-6"
            style={{
              marginTop: '55vh',
              marginLeft: '19vw',
            }}
          >
            <CalendarModule planDate={planDate} />
          </ColBtn>
        </Col>
      </Row>
    </Container>
  );
}
const ColTitle = styled.div`
  font: 8.5rem/1 'ChosunBg';
  color: #fff;
  position: absolute;
  top: 80px;
  left: 0px;

  @media only screen and (max-width: 1140px) {
    font: 5rem/1 'ChosunBg';
    top: 70px;
    left: 40px;
  }

  @media only screen and (max-width: 992px) {
    font: 3rem/1 'ChosunBg';
    top: 50px;
    left: 40px;
  }

  @media only screen and (max-width: 720px) {
    display: none;
  }
`;

const ColBtn = styled.div`
  position: absolute;
  margin-top: 55vh;
  margin-left: 20vw;

  @media only screen and (max-width: 1140px) {
    font: 0.5rem/1 'ChosunBg';
    top: 30px;
    left: 60px;
  }
`;
