import { useState, useEffect } from 'react';
import {Container, Row, Col, Button, Badge, Card, Image, Form } from 'react-bootstrap';
import axios from 'axios';
import Footer from '../../components/Footer';
import Nav from '../../components/Nav';
import { useParams } from 'react-router-dom';

export default function Detail() {
  const params = useParams();
  const [tourData, settourData] = useState([]);

  useEffect (() => {
    axios.get('https://apis.data.go.kr/B551011/KorService/areaBasedList?serviceKey=f0bpiY05PaHzNADbGBganvUsTEo1lHKOPHlz5P4%2B6BY8%2F3ou1vetQhG6%2FCuL%2FORR7sE5e5jIHeUr2fFiKHHHUA%3D%3D&numOfRows=12&pageNo=1&MobileOS=ETC&MobileApp=TripLog&_type=json&listYN=Y&arrange=B&contentTypeId=12&areaCode=1')
    .then(response => {
      settourData(response.data.response.body.items.item[0]);
    })
  }, []);

  return (
    <>
    <Nav/>
    <Container>
      <Row xs={1} md={2} lg={2}>
        <Col>
          <Card className="mt-3">
            <Card.Img variant="top" src="images/imgSample.jpg" style={{height: '30vh', objectFit: 'cover'}} />
            <Card.Body>
              <div className='d-flex justify-content-center mt-2'>
                <div className="text-center flex-fill">
                  <h5 >❤</h5>
                  <p>저장하기</p>
                </div>
                <div className="text-center flex-fill">
                  <h5>📆</h5>
                  <p>일정추가</p>
                </div>
                <div className="text-center flex-fill">
                  <h5>⭐</h5>
                  <p>리뷰쓰기</p>
                </div>
                <div className="text-center flex-fill">
                  <h5>⬆</h5>
                  <p>공유하기</p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className="mt-3" >
            <Card.Body className="m-2" style={{height: '40vh'}}>
              <Badge bg="dark"className='col-2 mb-2' >맛집</Badge>
              <Card.Title className="mb-3">명동교자</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">📍 제주도 애월읍</Card.Subtitle>
              <Card.Text className='mb-2 text-muted'>
                ⭐⭐⭐⭐⭐<span>30</span> ❤ <span>2,146</span>
              </Card.Text>
              <Card.Text>
                <p>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
      <Row className="m-3">
        <h4>기본 정보</h4>
        <img src="/images/map_ex.png" height={'300vh'} className="mt-2 mb-3 "/>
        <Col className="bg-light mx-2">
          <p className="mt-3 text-start">
            <span className="fw-bold mx-5 ">주소</span>
            제주특별시 애월읍 141</p>
          <p> 
            <span className="fw-bold mx-5">전화</span>
            010-63584-4564</p>
        </Col>
      </Row>

      {/* 리뷰 */}
      <Row className="mt-5 mb-3 mx-3">
        <div className="d-flex">
          <Col className="flex-fill text-center">
            <h4>리뷰</h4>
          </Col>
          <Col className="flex-fill col-8">
            <h4 className="text-primary mx-2">684</h4>
          </Col>
          <Col className="flex-fill">
            <Button variant="dark">리뷰쓰기</Button>
          </Col>
        </div>
      </Row>

      <Row xs={1} md={1} lg={2} className="g-4 mx-3 mb-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col>
          <Card>
          <Row className="mt-3">
            <div className="d-flex align-items-center justify-content-start">
              <Col className="col-2 mx-3">
                <Image src="/images/imgSample.jpg" roundedCircle style={{width:"50px"}} />
              </Col>
              <Col className="flex-fill"> 
                <p className="text-start fw-bold mt-2 mb-0">유저닉네임</p>
                <p className="text-start">⭐⭐⭐⭐⭐</p>
              </Col>
            </div>
          </Row>
            <Card.Body>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
                <Col>
                  <Image src="/images/imgSample.jpg" style={{width:"100px"}} className="mt-3 mx-1"/>
                  <Image src="/images/map_ex.png" style={{width:"100px"}} className="mt-3 mx-1"/>
                  <Form.Group controlId="formFileSm">
                    <Form.Control type="file" size="sm" className="mt-3" />
                  </Form.Group>
                </Col>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>

    <Row className="d-flex justify-content-center col-2 m-auto mt-4 mb-4" lg={2}>
            <Button variant="dark" >더보기</Button>
    </Row>
      
    </Container>
    <Footer/>
    </>
  )
}
