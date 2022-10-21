import { Container, Row, Col, Badge, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

export default function Calendar({ text, subText }){
  return(
      <Container className="col-7 m-auto d-flex justify-content-center">
        <Row className='col-12'>
          <img className="col-7 d-block m-4" alt="지도이미지" src='/images/backgroundImg.png' style={{width:"100%"}}/>
        </Row>

        <Row className=''>
        <Col className='m-3'>
          <Title className="justify-content-start fw-bold m-5">{text}</Title>
          {/* <p className='m-0 fs-6' >2022.10.25 - 10.28</p> */}
          <p className='m-0 fs-6 text-secondary'>{subText}</p>
        </Col>
        </Row>
      </Container>
  )
}

// const SubMainImg = styled.div`
//   background-image: url('/public/images/123.jpeg');
//   background-repeat: no-repeat;
// `

const Title = styled.p`
font: 2rem/1 'Inter'
`
