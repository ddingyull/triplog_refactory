import React, { useState } from 'react';
import { Container, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import 'react-calendar/dist/Calendar.css';
import CalendarModule from '../../components/CalendarModule';
import data from '../../data';

export default function CalendarMain({ planDate, pickAreaName, pickAreaImg }) {
  const [value, onChange] = useState(new Date());
  const [areaImg, setAreaImg] = useState(data);

  return (
    <Container>
      <CalendarAll className="card">
        <img alt="지역대표이미지" src={pickAreaImg} className="" />
        <Card.ImgOverlay>
          <CalendarIcon>
            <CalendarModule planDate={planDate} />
          </CalendarIcon>
          {/* <AreaName> */}
          <AreaName>{pickAreaName}</AreaName>
          {/* <Areatext>
            온전히 내 취향대로, 나만의 감성을 그대로 담은 나만의 여행로그
          </Areatext> */}
          {/* </AreaName> */}
        </Card.ImgOverlay>
      </CalendarAll>
    </Container>
  );
}
const CalendarAll = styled.div`
  margin: 3% auto;
  width: 75%;
  /* @media screen and (max-width: 576px) {
    font-size: 3rem;
  }
  @media screen and (max-width: 992px) {
    font-size: 3rem;
  } */
`;
const CalendarIcon = styled.a``;

const AreaName = styled.p`
  color: #fff;
  font: 10rem/1 'ChosunBg';
  margin: 25% 0 0 3%;

  @media screen and (max-width: 1200px) {
    font: 6rem/1 'ChosunBg';
    margin: 20% 0 0 3%;
  }
  @media screen and (max-width: 992px) {
    font: 4rem/1 'ChosunBg';
    margin: 20% 0 0 3%;
  }
  @media screen and (max-width: 576px) {
    font: 3rem/1 'ChosunBg';
    margin: 15% 0 0 3%;
  }
`;

const Areatext = styled.p`
  color: '#fff';
  font-size: '100px';
  font-family: 'Inter';
`;
// const ColTitle = styled.div`
//   font: 8.5rem/1 'ChosunBg';
//   color: #fff;
//   @media screen and (max-width: 576px) {
//     font-size: 3rem;
//   }
//   @media (max-width: 768px) and (min-width: 576px) {
//     font-size: 5rem;
//   }
// `;

// const ColBtn = styled.div`
//   @media screen and (min-width: 992px) {
//     margin-top: 22vh;
//   }
// `;

{
  /* <Container className="justify-content-center mt-5">
      <Card className="col-lg-10 m-auto border-0 ">
        <Col>
          <img
            className="d-block m-auto"
            alt="지역대표이미지"
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
    </Container> */
}
