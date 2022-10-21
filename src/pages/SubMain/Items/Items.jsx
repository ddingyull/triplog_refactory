import { Container, Row, Col, Badge, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import CardItemLink from '../../../components/CardItemLink'



// detail 페이지의 submenu 부분
export default function Items ({ text, subText, imgSrc }) {
  return(
    <Container className="p-3 mb-4 mt-5">
      <Row className='d-block justify-content-start'>
        <Col className='m-3'>
          <Title className="justify-content-start fw-bold">{text}</Title>
          {/* <p className='m-0 fs-6' >2022.10.25 - 10.28</p> */}
          <p className='m-0 fs-6 text-secondary'>{subText}</p>
        </Col>
      </Row>

      <Row  style={{width: "inherit"}}>
      <TableContainer>
      {
        [1,2,3,4,5,6,7,8].map((a,i)=>(
          <CardItemLink/>
          ))
      }
      </TableContainer>
      </Row>
    </Container>
  )
}

// style-components
const TableContainer = styled.div`
  overflow-x: auto;
  white-space:nowrap;
  overflow-y: hidden;
`
const Title = styled.p`
font: 2rem/1 'Inter'
`


