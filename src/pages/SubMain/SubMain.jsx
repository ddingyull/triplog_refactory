import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import CalendarMain from './CalendarMain';
import Items from './Items';
import Items2 from './Items2';
import data from '../../data';

import { useParams } from 'react-router-dom';

export default function SubMain({ productItems, width, height, planDate }) {
  const params = useParams();
  const areaCode = params.areaCode;

  const [areaName, setAreaName] = useState(data);

  let h = 0;
  for (let i = 0; i < areaName.length; i++) {
    for (let j = 2; j < areaName[i].length; j++) {
      if (areaName[i][j].find((el) => el.areacode === areaCode) !== undefined) {
        h = i;
      }
    }
  }

  let pickAreaName = areaName[h][0];
  let pickAreaImg = areaName[h][1];
  const [productItem, setProductItem] = useState([]); //받아온데이터 담기

  return (
    <>
      <Nav />
      <Container className="overflow-x-hidden">
        <CalendarMain
          pickAreaName={pickAreaName}
          pickAreaImg={pickAreaImg}
          planDate={planDate}
        />

        <Items
          width="20rem"
          height="20rem"
          text="✨ 트랜디한 트립로그의 Pick!"
          subText="브이로그 감성 낭낭한 여행일지, 트립로그와 함께라면 가능합니다"
        />

        <Items2 width="18rem" height="18rem" pickAreaName={pickAreaName} />

        <Container className="p-3 mb-4 mt-5">
          <Row className="d-block justify-content-start">
            <Col className="m-3">
              <Title className="justify-content-start fw-bold">
                🧳 여행 전 필수 준비항목
              </Title>
              <p className="m-0 fs-6 text-secondary">
                트립로그가 챙겨주는 이번 여행!
              </p>
            </Col>
          </Row>
          <Row>
            <div className="d-block rounded text-center">
              <a href="/plan/1">
                <img src="/images/icons/여행 계획하기.png"></img>
              </a>
              <a href="/budget">
                <img src="/images/icons/가계부.png"></img>
              </a>
              <a href="/checklist">
                <img src="/images/icons/체크리스트.png"></img>
              </a>
            </div>
          </Row>
        </Container>
      </Container>
      <Footer />
    </>
  );
}

// style-components
const Title = styled.p`
  font: 2rem/1 'Inter';
`;
