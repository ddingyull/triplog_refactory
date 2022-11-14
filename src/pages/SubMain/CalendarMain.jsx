import React, { useState } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
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
    <Container className="justify-content-center mt-5">
      <Card className="col-lg-10 m-auto border-0 ">
        <Col>
          <img
            className="d-block m-auto"
            alt="메인이미지"
            src={pickAreaImg}
            style={{ width: '100%' }}
          />
          <Card.ImgOverlay className="mt-lg-5 mt-md-5 p-lg-5 p-md-5 pt-sm-5 mt-sm-5">
            <ColBtn>
              <CalendarModule planDate={planDate} />
            </ColBtn>
            <ColTitle>
              <p
                className="fw-bold justify-content-start mt-lg-4 mt-md-4 display-md-6"
                style={{ fontFamily: 'ChosunBg' }}
              >
                {pickAreaName}
              </p>
              <p
                className="d-none d-lg-block "
                style={{ color: '#fff', fontSize: '18px', fontFamily: 'Inter' }}
              >
                {subText}
              </p>
            </ColTitle>
          </Card.ImgOverlay>
        </Col>
      </Card>
    </Container>
  );
}
const ColTitle = styled.div`
  font: 8.5rem/1 'ChosunBg';
  color: #fff;
  @media screen and (max-width: 576px) {
    font-size: 3rem;
  }
  @media (max-width: 768px) and (min-width: 576px) {
    font-size: 5rem;
  }
`;

const ColBtn = styled.div`
  @media screen and (min-width: 992px) {
    margin-top: 22vh;
  }
`;
