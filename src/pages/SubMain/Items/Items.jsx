import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Badge, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import CardItemLink from '../../../components/CardItemLink'



// detail 페이지의 submenu 부분
export default function Items ({ text, subText, srcImg, width, height }) {

  useEffect (() => {
    axios.get('https://apis.data.go.kr/B551011/KorService/areaBasedList?serviceKey=f0bpiY05PaHzNADbGBganvUsTEo1lHKOPHlz5P4%2B6BY8%2F3ou1vetQhG6%2FCuL%2FORR7sE5e5jIHeUr2fFiKHHHUA%3D%3D&numOfRows=12&pageNo=1&MobileOS=ETC&MobileApp=TripLog&_type=json&listYN=Y&arrange=B&contentTypeId=12&areaCode=1')
    .then(response => {
      console.log(response.data.response.body.items.item);
      settourData(response.data.response.body.items.item);
    })
  }, []);

  const [tourData, settourData] = useState([]);
  // console.log(tourData[1]);

  return(

    <Container className="p-3 mb-4 mt-5">
      <Row className='d-block justify-content-start'>
        <Col className='m-3'>
          <Title className="justify-content-start fw-bold">{text}</Title>
          {/* <p className='m-0 fs-6' >2022.10.25 - 10.28</p> */}
          <p className='m-0 fs-6 text-secondary'>{subText}</p>
        </Col>
      </Row>

      <Row >
      <TableContainer>
      {
        tourData.map((a,i)=>{
          return (
            <CardItemLink width={width} height={height} src={tourData[i].firstimage}/>
          )
        })
      }
      </TableContainer>
      </Row>
    </Container>
  )
}

// style-components
const TableContainer = styled.div`
  overflow-x: auto;
  white-space:nowrap;
  overflow-y: hidden;
`
const Title = styled.p`
font: 2rem/1 'Inter'
`


