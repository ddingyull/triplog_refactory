import { Card, Col, Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import Item_Plan from './Item_Plan'
import Memo_Plan from './Memo_Plan'


export default function DayPlan(){
  return(
      <Card className="m-3">
        <Row className='d-flex justify-content-center'>
          <Col md={4} className='d-flex m-3'>
            <p className='fw-6 fw-bold me-2'>day 1</p>
            <p className='fw-6'>10.20/목</p>
          </Col>
          <Col md={{span: 4, offset: 2}} className='text-end d-block '>
            <a href="#" className="btn btn-light p-0" style={{width:"50%"}}>편집</a>
          </Col>
        </Row>

        <Row className="m-3">
          <Item_Plan/>
          <Memo_Plan/>
          <Item_Plan/>
          <Item_Plan/>
        </Row>

        <Col className='m-auto d-flex mt-2 mb-2 col-10'>
          <Button className="btn btn-light mx-1 " style={{width:"70%"}}>장소 추가</Button>
          <Button className="btn btn-light mx-1 " style={{width:"70%"}}>메모 추가</Button>
        </Col>

        <Col>
        </Col>
      </Card>
  )
}