import { Container, Row, Col, Badge, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux'
import { addPlanDate } from '../../store/modules/triplog'


// detail 페이지의 submenu 부분
export default function Welcome () {

  // 리듀서의  useSelector, dispatch
  let state = useSelector((state) => state.triplog)
  let dispatch = useDispatch()


  if(state.isLogin){
    return(
      <Container className="p-3">
        <Row className='d-block justify-content-start'>
          <Col className='m-3'>
            {/* <Title className="justify-content-start fw-bold">{state.user}의 여행계획 세우기 ✏️</Title> */}
            <Title className="justify-content-start fw-bold fs-3">
            <p className='my-3 fs-6 d-block'>여행에 필요한 모든 것, TripLog</p>
              <p 
                style={{color:'#036635', display:'inline-block'}}>
                  thals0님</p>의 여행계획 세우기 ✏️
              
            </Title>
            <div className='fs-6 d-inline p-2'> 📆 여행 날짜 : {state.planDate.startDate + ' ~ ' + state.planDate.endDate} </div>
          </Col>
          <Col class="d-flex justify-content-start m-3 mb-0">
            <Plan_li><a href="/Plan/:areaCode"><Badge style={{backgroundColor:'#036635'}} bg="success" text="light" className='fs-8'>📆 일행과 함께하는 여행짜기</Badge>{' '}</a></Plan_li>
            <Plan_li><a href="/CheckList"><Badge bg="dark" text="light" className='fs-9'>🔖 나의 체크리스트</Badge>{' '}</a></Plan_li>
            <Plan_li><a href="/Budget"><Badge bg="dark" text="light" className='fs-9'>💸 가계부 작성하러가기</Badge>{' '}</a></Plan_li>
            <Plan_li><a href="/"><Badge bg="dark" text="light" className='fs-9'>구경하러가기</Badge>{' '}</a></Plan_li>
          </Col>
        </Row>
      </Container>
    )
  }

}

// style-components
const Title = styled.p`
  font: 2rem/1 'Inter'
`

const Plan_li = styled.li`
  list-style: none;
  display: inline-block;
  margin-right: .5rem;

  a{
    color: #333;
    text-decoration: none;
  }
`


