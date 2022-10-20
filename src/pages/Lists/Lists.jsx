import React from 'react';
import {Container, Row, Col, Button, Card, Image, Tabs, Tab} from 'react-bootstrap';

export default function Lists() {
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
        {Array.from({ length: 6 }).map((_, idx) => (
          <Col>
            <Card>
              <Card.Img variant="top" src="/images/imgSample.jpg"/>
              <Card.Body>
                <Card.Title>장소명</Card.Title>
                <Card.Text className="text-muted">주소명</Card.Text>
                <Card.Text className="text-muted">⭐⭐⭐⭐⭐  <span>30</span></Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
        </Row>
        <Row className="d-flex justify-content-center col-2 m-auto mt-4 mb-4" lg={2}>
            <Button variant="dark" >더보기</Button>
        </Row>
        
    </Container>
  )
}
