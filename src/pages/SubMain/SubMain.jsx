import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import '../../styles/globalStyle'
import CalendarMain from './CalendarMain'
import Items from './Items'
import Items2 from './Items2'
import data from '../../data'
import CardItemLink from '../../components/CardItemLink'

import { useParams } from "react-router-dom";


export default function SubMain({productItems, width, height, planDate}) {
  const params = useParams();
  const areaCode = params.areaCode;


  const [areaName, setAreaName] = useState(data);

  let h = 0;
  for(let i = 0; i < areaName.length; i++) {
    for(let j = 2; j < areaName[i].length; j++) {
      if (areaName[i][j].find(el => el.areacode === areaCode) !== undefined) {
        h = i;
        console.log(h)
        console.log(areaName[i][j].find(el => el.areacode === areaCode))
    } } }

  let pickAreaName = areaName[h][0];
  let pickAreaImg = areaName[h][1];
  const [productItem, setProductItem] = useState([]); //받아온데이터 담기

  // data 받아오기
  // useEffect (() => {
  //   const productItem = axios.get(`https://apis.data.go.kr/B551011/KorService/areaBasedList?serviceKey=rfaoGpiapHFqOcUT6bqfERRxy1WVxzOdOpEC3ChyAFPEfONdSMdRVNETTJKRhqTbPuZ2krpG2mQJMXDbyG74RA%3D%3D&numOfRows=498&pageNo=1&MobileOS=ETC&MobileApp=TripLog&_type=json&listYN=Y&arrange=B&contentTypeId=12&areaCode=${areaCode}`)
  //   .then((response) => {
  //     setProductItem(response.data.response.body.items.item);           
  //   })Always {pickAreaName} With TripLog
  // }, []);
  return (
    <>
      <Nav/>
        <CalendarMain 
          pickAreaName={pickAreaName} 
          pickAreaImg={pickAreaImg} 
          subText="온전히 내 취향대로, 나만의 감성대로" 
          planDate={planDate}/>

        <Items 
          width='15rem'   
          height='15rem' 
          text="✨ 트립로그 Pick! 이번주 인기 숙소" 
          subText="브이로그 감성 낭낭한 숙소 찾기"
          />

        <Container className="p-3 mb-4 mt-5">
          <Row className='d-block justify-content-start'>
            <Col className='m-3'>
              <Title className="justify-content-start fw-bold">🗂 여행 전 필수 준비항목</Title>
              <p className='m-0 fs-6 text-secondary'>트립로그가 챙겨주는 이번 여행!</p>
            </Col>
          </Row>
          <Row >
            <TableContainer>
              <CardItemLink width='22rem' height='15rem' title='내 여행 일정짜기'/>
              <CardItemLink width='22rem' height='15rem' title='우리 여행 가계부'/>
              <CardItemLink width='22rem' height='15rem' title='여행 전 체크리스트'/>
            </TableContainer>
          </Row>
        </Container>

        <Items2 
          width='20rem' 
          height='20rem'
          pickAreaName={pickAreaName}/>

      <Footer/>
    </>
  );
}

// style-components
const TableContainer = styled.div`
  /* overflow-x: auto; */
  /* white-space:nowrap; */

`

const Title = styled.p`
font: 2rem/1 'Inter'
`
