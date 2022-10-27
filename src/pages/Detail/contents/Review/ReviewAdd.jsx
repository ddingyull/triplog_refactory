import { useState, useRef } from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faX } from "@fortawesome/free-solid-svg-icons";
import Rating from './Rating';

const ARRAY = [0, 1, 2, 3, 4];

export default function ReviewAdd() {
  const outSection = useRef();
  const [reviewAdd, setReviewAdd] = useState(false);

  const onClick = () => {
    setReviewAdd(true);
  };
  
  return (
    <>
      {ReviewAdd ? (
        <Container
          className="bg-light"
          ref={outSection}
          onClick={e => {
            if (outSection.current === e.target) {
              setReviewAdd(false);
            }
          }}
          >
          <Row className="d-flex justify-content-end">
            <Col className="col-1 mt-3 mx-2">
              <Button variant="outline-success"  className="close" 
                onClick={() => setReviewAdd(false)}>
                  <FontAwesomeIcon icon={faX} />
              </Button>
            </Col>
          </Row>

          <Form.Group className="position-relative">
            <div className='mb-3 mx-3'>
              <Rating/>
              <Form.Control
                name="textarea"
                as="textarea"
                placeholder="자세하고 솔직한 리뷰는 다른 고객에게 큰 도움이 됩니다!"
                rows={4}
                required
                className="mb-3"
              />
              <Form.Control
                type="file"
                required
                name="file"
                size="sm" 
                className="mb-3"/>
            </div>
            <Row className="d-flex justify-content-end">
              <Col className="col-2 text-end mb-3 mx-2">
                <Button variant="success" type="submit" className="reviewSubmitBtn" 
                    onClick={() => setReviewAdd(false)}>등록</Button>
              </Col>
            </Row>
          </Form.Group>


        </Container>
      ) : null}
    </>
  )
}