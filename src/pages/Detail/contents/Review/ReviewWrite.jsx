import { useState, useRef } from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import Rating from './Rating';
import axios from 'axios';
import { useParams } from 'react-router';

export default function ReviewWrite() {
  const params = useParams();
  const contentId = params.contentId;

  const inputRef = useRef();
  const [reviewContent, setReviewContent] = useState("");

  function onChange(e){
    setReviewContent(e.target.value);
    console.log(reviewContent);
  }

  return (
    <>
      {ReviewWrite ? (
        <Container className=" border border-success rounded">
          <Form.Group className="position-relative">
            <div className='mt-3 mb-3 mx-3'>
              <Rating/>
              <Form.Control
                name="textarea"
                as="textarea"
                placeholder="자세하고 솔직한 리뷰는 다른 고객에게 큰 도움이 됩니다!"
                rows={4}
                required
                className="mb-3"
                onChange={onChange}
              />
              <Form.Control
                type="file"
                name="file"
                size="sm" 
                className="mb-3"/>
            </div>
            <Row className="d-flex justify-content-end">
              <Col className="col-2 text-end mb-3 mx-2">
                <Button variant="success" type="submit" className="reviewSubmitBtn" 
                  onClick={() => {
                    const text = inputRef.current.value;
                    console.log(text);
                    axios
                      .post("http://localhost:4000/reveiw/write", {
                        review: [
                          {
                            content: reviewContent,
                            contentId: contentId,
                          }
                        ],
                      })
                      .then((res) => {
                        console.log(res.data);
                      })
                      .catch(() => {
                        console.log("실패");
                      });
                  }}
                    >등록</Button>
              </Col>
            </Row>
          </Form.Group>
        </Container>
      ) : null}
    </>
  )
}