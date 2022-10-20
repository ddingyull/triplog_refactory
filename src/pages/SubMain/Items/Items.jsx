import { Container, Row, Col, Badge, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
// import CardItemLink from '../../../components/CardItemLink'



// detail 페이지의 submenu 부분
export default function Items () {
  return(
    <Container className="p-3 mb-4">
      <Row className='d-block justify-content-start'>
        <Col className='m-3'>
          <Title className="justify-content-start fw-bold">✨ 트립로그 Pick! 이번주 인기 숙소</Title>
          <p className='m-0 fs-6' >2022.10.25 - 10.28</p>
          <p className='m-0 fs-6'>이 여행의 스타일을 선택해주세요.</p>
        </Col>
      </Row>

<Row>
  {
    [1,2,3,4,5,6].map((a,i)=>(
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/images/calendar.jpeg" />
      <Card.Body>
        {/* <Card.Title>Card Title</Card.Title> */}
        {/* <Button variant="success">Go somewhere</Button> */}
      </Card.Body>
    </Card>
    ))
  }

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
