import { Container, Accordion, Button, Row  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

export default function CheckList() {
  return(
    <>
      <Nav/>
        <Container style={{width:'30rem'}} className='m-auto mt-5'>
          <h1 className='fw-bold lh-base mt-5 mb-5'>여행 준비<br></br>체크리스트</h1>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>기본 짐싸기</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>의류</li>
                    <li>전자기기 챙기기</li>
                    <li>세안용품</li>
                    <li>상비약</li>
                    <li>신분증/면허증</li>
                    <li>필기구</li>
                    <li>마스크/손 소독제</li>
                    <li>➕ 아이템 추가</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>필수 준비물</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>숙소</li>
                  <li>➕ 아이템 추가</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>트립로그에서 챙기기</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>여행 일정 짜기</li>
                  <li>가계부 짜기</li>
                  <li>➕ 아이템 추가</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>통신/교통 준비</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>여행지 교통편</li>
                  <li>➕ 아이템 추가</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4">
              <Accordion.Header>즐길거리 준비</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>관광 정보 확인하기</li>
                  <li>맛집 정보 확인하기</li>
                  <li>➕ 아이템 추가</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Row className="justify-content-center ">
              <Button variant="primary" className='col-4 mt-4' >카테고리 추가</Button>              
            </Row>
          </Accordion>

        </Container>
      <Footer/>
    </>
  )
}