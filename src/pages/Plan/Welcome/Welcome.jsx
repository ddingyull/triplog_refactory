import { Container, Row, Col, Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import colors from '../../../styles/colors';


// detail 페이지의 submenu 부분
export default function Welcome () {
  return(
    <Container className="p-3 mb-4">
      <Row className='d-block justify-content-start'>
        <Col className='m-3'>
          <Title className="justify-content-start fw-bold">thals0의 여행계획 세우기 ✏️</Title>
          <p className='m-0 fs-6' >2022.10.25 - 10.28</p>
          <p className='m-0 fs-6'>이 여행의 스타일을 선택해주세요.</p>
        </Col>
        <Col class="d-flex justify-content-start mt-3 mb-3">
          <Plan_li><a href="/Plan"><Badge bg="success" text="light" className='fs-9'>일행과 함께하는 여행짜기</Badge>{' '}</a></Plan_li>
          <Plan_li><a href="/Plan"><Badge bg="warning" text="dark" className='fs-9'>일행과 함께하는 여행짜기</Badge>{' '}</a></Plan_li>
          <Plan_li><a href="/CheckList"><Badge bg="dark" text="light" className='fs-9'>체크리스트</Badge>{' '}</a></Plan_li>
          <Plan_li><a href="/Budget"><Badge bg="dark" text="light" className='fs-9'>가계부</Badge>{' '}</a></Plan_li>
          <Plan_li><a href="/"><Badge bg="dark" text="light" className='fs-9'>숙소</Badge>{' '}</a></Plan_li>
        </Col>
      </Row>
    </Container>
  )
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


