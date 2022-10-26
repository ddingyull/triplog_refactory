import { Row, Col, Button, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function MainText() {
  return (
    <>
      <div className="bg-light p-5">
        <p className='m-1'>트립로그pick</p>
        <h1 className="fw-bold" >제주여행<br></br>BEST 맛집 총정리</h1>
        <Button variant="dark" size="sm" className="mt-2 mb-5 mx-1">#해시태그</Button>
        <Button variant="dark" size="sm" className="mt-2 mb-5 mx-1">#해시태그</Button>
      </div>

      <Row className="mt-3 mb-2">
        <Button variant="dark" className="d-flex col-9 m-auto align-items-center">
          <Col className="flex-fill">
            <Image src="/images/imgSample.jpg" roundedCircle style={{width:"50px"}}/>
          </Col>
          <Col className="flex-fill">
            <p className="text-start fw-bold mt-2 mb-0">프랜차이즈</p>
            <p className="text-start">가성비 프랜차이즈부터 럭셔리 프랜차이즈</p>
          </Col>
          <Col className="flex-fill">
            <FontAwesomeIcon icon={faArrowRight} />
          </Col>
        </Button>
      </Row>

      <Row>
        <Button variant="dark" className="d-flex col-9 m-auto align-items-center">
          <Col className="flex-fill">
            <Image src="/images/imgSample.jpg" roundedCircle style={{width:"50px"}} />
          </Col>
          <Col className="flex-fill">
            <p className="text-start fw-bold mt-2 mb-0">현지인 맛집 존맛</p>
            <p className="text-start">가성비 현지인 맛집부터 럭셔리 현지인 맛집</p>
          </Col>
          <Col className="flex-fill">
            <FontAwesomeIcon icon={faArrowRight} />
          </Col>
        </Button>
      </Row>
    </>
  )
}