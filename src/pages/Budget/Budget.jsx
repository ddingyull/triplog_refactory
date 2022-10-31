import { Container, Row, Col, Image, Button, InputGroup, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Budget() {
  const [chargeData, setChargeData] = useState();
  const [okay, setOkay] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:4000/charge")
      .then((res) => {
        console.log(res.data[0].chargeList);
        setChargeData(res.data[0].chargeList);
        setOkay(true);
      })
      .catch((err) => console.log(err));
  }, []);
  
  if (okay){
  return(
    <>
      <Nav/>
        <Container>
          <h1 className='fw-bold lh-base mt-5'>장소 여행<br></br>정산내역입니다.</h1>
          <p>일행과 함께 지출한 비용이 있다면,<br/> 총무에게 내야 할 금액을 정산해드려요.</p>
          
          <div className='col-6' bg="light">
          
            <InputGroup size="sm" className="mb-3">
              <p className='fw-bold'>날짜</p>
              <Form.Control
                type='date'
              />
            </InputGroup>
            <br />
            <InputGroup size="sm" className="mb-3">
              <p className='fw-bold'>내용</p>
              <Form.Control
                type='text'
              />
            </InputGroup>
            <br />
            <InputGroup size="sm" className="mb-3">
              <p className='fw-bold'>금액</p>
              <Form.Control
                type='number'
              />
            </InputGroup>
          </div>

          <div  className='col-6 ' bg="black">
          <p className='fw-bold'>내역</p>
            {chargeData.map(function (a, i){
              console.log(a);
              return(
                <div>
                <p className='fw-bold'>날짜</p>
                <p className='fw-bold'>{a.title}</p>
                <p className='fw-bold'>{a.charge}</p>
              </div>
              )
            })}
          </div>


          {/* <div collapseOnSelect expand="lg" className='shadow-sm p-2'>

            
            <Row className="m-3">
              <div className="d-flex align-items-center justify-content-start mt-3">
                <Col className="col-2 mx-3">
                  <Image src="/images/imgSample.jpg" roundedCircle style={{width:"50px"}} />
                </Col>
                <Col className="flex-fill"> 
                  <p className="text-start fw-bold mt-2 mb-0">(나) 유저 닉네임</p>
                  <p className="text-start">33,000원</p>
                </Col>
              </div>
            </Row>

            <Row className="m-3">
              <div className="d-flex align-items-center justify-content-start">
                <Col className="col-2 mx-3">
                  <Image src="/images/imgSample.jpg" roundedCircle style={{width:"50px"}} />
                </Col>
                <Col className="flex-fill"> 
                  <p className="text-start fw-bold mt-2 mb-0">유저2 닉네임</p>
                  <p className="text-start">33,000원</p>
                </Col>
              </div>
            </Row>
          </div>

          <Row>
            <h5 className='fw-bold lh-base mt-5'>Day 1</h5>
            <p>10.25/화</p>
            <Button 
              className="mb-2 justify-content-center"
              variant="outline-secondary"
            >
            비용 추가
            </Button>
          </Row>

          <Row>
            <h5 className='fw-bold lh-base mt-5' >Day 2</h5>
            <p>10.26/화</p>
            <Button 
              className="mb-2 justify-content-center"
              variant="outline-secondary"
            >
            비용 추가
            </Button>
          </Row>

          <Col className='d-flex justify-content-center'>
            <h2 className='fw-bold lh-base mt-5'> 총 66,000 지출</h2>
          </Col> */}
        </Container>
      <Footer/>
    </>
  )
}
}