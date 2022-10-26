import { useState, useEffect } from 'react';
import {Container, Row, Col, Card, Tabs, Tab, Button} from 'react-bootstrap';
import Paging from './contents/Paging';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import MainText from './lists_main/MainText';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Lists() {
  const params = useParams();

  const [tourData, settourData] = useState([]);

  const areaCode = params.areaCode;
  console.log(areaCode);

  useEffect (() => {
    axios.get(`https://apis.data.go.kr/B551011/KorService/areaBasedList?serviceKey=rfaoGpiapHFqOcUT6bqfERRxy1WVxzOdOpEC3ChyAFPEfONdSMdRVNETTJKRhqTbPuZ2krpG2mQJMXDbyG74RA%3D%3D&numOfRows=498&pageNo=1&MobileOS=ETC&MobileApp=TripLog&_type=json&listYN=Y&arrange=B&contentTypeId=12&areaCode=${areaCode}`)
    .then(response => {
      settourData(response.data.response.body.items.item);
    })
  }, []);

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
          {tourData.length > 0 ? 
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
            : null
          }
      </Row>

        <Row className="d-flex justify-content-center col-2 m-auto mt-4 mb-4" lg={2}>
            <Paging/>
        </Row>
        
    </Container>
    <Footer/>
    </>
  )
}