import React from 'react';
import {Container, Row, Col, Button, Card, Image, Tabs, Tab} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Lists() {
  const [tourData, settourData] = useState([]);

  useEffect (() => {
    axios.get('https://apis.data.go.kr/B551011/KorService/areaBasedList?serviceKey=f0bpiY05PaHzNADbGBganvUsTEo1lHKOPHlz5P4%2B6BY8%2F3ou1vetQhG6%2FCuL%2FORR7sE5e5jIHeUr2fFiKHHHUA%3D%3D&numOfRows=12&pageNo=1&MobileOS=ETC&MobileApp=TripLog&_type=json&listYN=Y&arrange=B&contentTypeId=12&areaCode=1')
    .then(response => {
      settourData(response.data.response.body.items.item);
    })
  }, []);

  return (
    <Container>
      <div className="bg-light p-5">
        <p className='m-1'>트립로그pick</p>
        <h1 className="fw-bold" >제주여행<br></br>BEST 맛집 총정리</h1>
        <Button variant="dark" size="sm" className="mt-2 mb-5 mx-1">#해시태그</Button>
        <Button variant="dark" size="sm" className="mt-2 mb-5 mx-1">#해시태그</Button>
      </div>

      <Row className="mt-3 mb-2">
          <Button variant="dark" className="d-flex col-9 m-auto align-items-center">
            <Col className="flex-fill">
              <Image src="/images/imgSample.jpg" roundedCircle style={{width:"50px"}}/>
            </Col>
            <Col className="flex-fill">
              <p className="text-start fw-bold mt-2 mb-0">프랜차이즈</p>
              <p className="text-start">가성비 프랜차이즈부터 럭셔리 프랜차이즈</p>
            </Col>
            <Col className="flex-fill">
            <span>✔</span>
            </Col>
          </Button>
      </Row>
      
      <Row>
          <Button variant="dark" className="d-flex col-9 m-auto align-items-center">
            <Col className="flex-fill">
              <Image src="/images/imgSample.jpg" roundedCircle style={{width:"50px"}} />
            </Col>
            <Col className="flex-fill">
              <p className="text-start fw-bold mt-2 mb-0">현지인 맛집 존맛</p>
              <p className="text-start">가성비 현지인 맛집부터 럭셔리 현지인 맛집</p>
            </Col>
            <Col className="flex-fill">
            <span>✔</span>
            </Col>
          </Button>
      </Row>


      <Tabs 
      defaultActiveKey="맛집"
      id="uncontrolled-tab-example"
      className="mt-5 mb-3"
      >
        <Tab eventKey="전체" title="전체">
        </Tab>
        <Tab eventKey="맛집" title="맛집">
        </Tab>
        <Tab eventKey="장소2" title="장소2">
        </Tab>
        <Tab eventKey="장소3" title="장소3">
        </Tab>
        <Tab eventKey="정렬" title="정렬" disabled>
        </Tab>
      </Tabs>

      <Row xs={1} md={2} lg={3} className="g-4">
          {
            tourData.map(function(a, i) {
              return (
                <Col>
                  <Card>
                    <Card.Img variant="top" src={tourData[i].firstimage}/>
                    <Card.Body>
                      <Card.Title>{tourData[i].title}</Card.Title>
                      <Card.Text className="text-muted">{tourData[i].addr1}</Card.Text>
                      <Card.Text className="text-muted">⭐⭐⭐⭐⭐  <span>30</span></Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              )
            })
          }
      </Row>

      <Row className="d-flex justify-content-center col-2 m-auto mt-4 mb-4" lg={2}>
          <Button variant="dark" >더보기</Button>
      </Row>
    </Container>
  )
}
