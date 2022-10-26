import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

export default function CheckList() {
  return(
    <>
      <Nav/>
        <Container>
          <h1 className='fw-bold lh-base mt-5'>장소 여행<br></br>정산내역입니다.</h1>
          <p>일행과 함께 지출한 비용이 있다면,<br/> 총무에게 내야 할 금액을 정산해드려요.</p>
          <div collapseOnSelect expand="lg" className='shadow-sm p-2'>
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
          </Col>

        </Container>
      <Footer/>
    </>
  )
}