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
    <Container className="position-relative justify-content-center">
      <Row className="col-lg-10 m-auto">
        <Col>
          <img
            className="d-block m-auto pt-5"
            alt="메인이미지"
            src={pickAreaImg}
            style={{ width: '100%' }}
          />
          <Col
            xs={6}
            className="position-absolute top-0 start-0"
            style={{ marginTop: '50vh', marginLeft: '15vw' }}
          >
            {/* <Title
              className="fw-bold justify-content-start small-font-size"
              style={{ fontSize: '2.5rem', color: '#333' }}
            >
              Always {pickAreaName} With TripLog
            </Title> */}
            <Title
              className="fw-bold justify-content-start small-font-size"
              style={{
                fontSize: '8rem',
                color: '#fff',
                fontFamily: 'ChosunBg',
              }}
            >
              {pickAreaName}
            </Title>
            <p
              className="m-0 fs-5 text-center position-absolute top-10 start-0"
              style={{ color: '#fff' }}
            >
              {subText}
            </p>
          </Col>
          <Col
            xs={6}
            className="position-absolute top-0 start-0 d-block fs-6"
            style={{
              marginTop: '44vh',
              marginLeft: '16vw',
            }}
          >
            <CalendarModule planDate={planDate} />
            {/* <LinkBtn href="/Budget" className="btn btn-light ms-2 my-1 fs-6">
              💸 더치페이하기?
            </LinkBtn>
            <LinkBtn
              href="/CheckList"
              className="btn btn-light d-block ms-1 my-2 fs-6"
            >
              🔖 두고가시는건 없으신가요?
            </LinkBtn> */}
          </Col>
        </Col>
      </Row>
      {/* <Row className="m-5">
        <CalendarModule planDate={planDate} />
      </Row> */}
    </Container>
  );
}
const Title = styled.div`
  font: 2rem/1 'Inter';
`;
const LinkBtn = styled.button`
  background-color: rgba(255, 255, 255, 0.7);
  border: none;
  font-size: 14px;
  padding: 6px;
  border-radius: 3px;

  &:hover {
    /* background-color: green; */
  }
`;
