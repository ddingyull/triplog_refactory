import { Container, Row, Col, Card, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import KakaoMap from '../../pages/Plan/KakaoMap';
import PlanItem from './PlanItem'

import { useEffect, useState } from 'react';
import axios from 'axios';

const PlanList = ({productItems, planItems, setPlanItems, onClick}) => {
  
  const [productItem, setProductItem] = useState([]); //받아온데이터 담기
  let [itemData] = productItems


  // 여행 기간만큼 map 돌려줘야함
  return [1,2,3].map(({id, firstimage, title, src, addr1, sigungucode }, idx) => (
    <Container 
      // sm={1} md={1} lg={4} xl={2} 
      className='overflow-auto'
      style={{height:'20%'}}
      ket={idx}>
                
    <Card className="col-md-12 overflow-auto">
    <KakaoMap className='col-6 m-auto'/>
    <Row className='d-flex justify-content-center'>
      <Col md={4} className='d-flex m-3'>
        <p className='fw-6 fw-bold me-2'>day {idx+1}</p>
        <p className='fw-6'>{idx+1}일차</p>
      </Col>
      <Col md={{span: 4, offset: 2}} className='text-end d-block '>
        <a href="#" className="btn btn-light p-0" style={{width:"50%"}}>완료</a>
      </Col>
    </Row>

    <Row className="m-3">
    <PlanItem 
      productItems={productItems} 
      setPlanItems={setPlanItems}
      planItems={planItems}/>
    </Row>

    <Col className='m-auto d-flex mt-2 mb-2 col-10'>
      <Button 
        onClick={onClick}
        className="btn btn-light mx-1" 
        style={{width:"70%"}}>
        장소 추가
      </Button>

      <Button 
        className="btn btn-light mx-1" 
        style={{width:"70%"}}>
        메모 추가
      </Button>
    </Col>
  </Card>
  </Container>
  )) 
}



export default PlanList;

const Title = styled.p`
  font: 2rem/1 'Inter'
`