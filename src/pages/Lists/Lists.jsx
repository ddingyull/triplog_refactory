import React from 'react';
import {Container, Row, Col, Card, Tabs, Tab} from 'react-bootstrap';
import Paging from './contents/Paging';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import MainText from './lists_main/MainText';

export default function Lists() {
  return (
    <>
    <Nav/>
    <Container>
      <MainText/>

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
            <Paging/>
        </Row>
        
    </Container>
    <Footer/>
    </>
  )
}
