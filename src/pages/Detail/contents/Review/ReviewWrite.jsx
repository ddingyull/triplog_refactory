import { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import styled from 'styled-components';
import { Container, Row, Col, Form, Button} from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';


const ARRAY = [0, 1, 2, 3, 4];

export default function ReviewWrite() {
  const params = useParams();

  const contentId = params.contentId;
  const contentRef = useRef();
  const imgRef = useRef();

  const [clicked, setClicked] = useState([false, false, false, false, false]);
  const [star, setStar] = useState(0);

  /* 별점 등록 */
  const handleStarClick = index => {
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setClicked(clickStates);
  };

  const sendReview = () => {
    setStar(clicked.filter(Boolean).length);
  };
  
  useEffect(() => {
    sendReview();
  }, [clicked]); 

  useEffect(() => {
    
  }, [contentRef]);

  return (
    <>
      {ReviewWrite ? (
        <Container className=" border border-success rounded">

          <Form.Group className="position-relative">
            <div className='mt-3 mb-3 mx-3'>
              {/* 별점 등록 */}
              <Stars className='mb-4 justify-content-center' >
                {ARRAY.map((el, idx) => {
                  return (
                    <FaStar
                      key={idx}
                      size="50"
                      onClick={() => handleStarClick(el)}
                      className={clicked[el] && 'yellowStar'}
                    />
                  );
                })}
              </Stars>
              {/* 리뷰 텍스트 */}
              <Form.Control
                name="textarea"
                as="textarea"
                placeholder="자세하고 솔직한 리뷰는 다른 고객에게 큰 도움이 됩니다!🤗"
                rows={4}
                required
                className="mb-3"
                ref={contentRef}
              />
              {/* 리뷰 사진 */}
              <Form.Control
                type="file"
                name="file"
                size="sm" 
                className="mb-3"
                ref={imgRef}/>
            </div>

            <Row className="d-flex justify-content-end">
              <Col className=" text-end mb-3 mx-2">
                <Button variant="success" className="reviewSubmitBtn" 
                  onClick={() => {
                    const content = contentRef.current.value
                    axios
                      .post("http://localhost:4000/review/write", [{content, contentId, star }])
                      .then((res) => {
                        console.log('성공');
                        contentRef.current.value='';
                        window.location.reload(); 
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

const Stars = styled.div`
  display: flex;
  padding-top: 5px;

  & svg {
    color: gray;
    cursor: pointer;
  }

  :hover svg {
    color: #fcc419;
  }

  & svg:hover ~ svg {
    color: gray;
  }

  .yellowStar {
    color: #fcc419;
  }
`;