import { useState, useRef, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import axios from 'axios';
import styled from 'styled-components';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
// 리뷰가 업데이트 되면 해당 여부를 redux 에 알리기 위한
// dispatch 훅고 리덕스에서 선언한 액션 생성 함수 임포트
import { useDispatch, useSelector } from 'react-redux';
import { reviewUpdate } from '../../../store/modules/detail';

const ARRAY = [0, 1, 2, 3, 4];
const formData = new FormData();

export default function ReviewWrite() {
  const params = useParams();

  const [upload, setUpload] = useState(false);

  const [text, setText] = useState([]);

  const navigate = useNavigate();
  //dispatch 변수에 할당
  const dispatch = useDispatch();
  const nickName = useSelector((state) => state.users.userNickName);
  const contentId = params.contentId;
  const contentRef = useRef();
  const imgRef = useRef();
  //이미지 함수
  const handleImg = (e) => {
    formData.append('img', e.target.files[0]);
    setUpload(true);
  };

  const [clicked, setClicked] = useState([false, false, false, false, false]);
  const [star, setStar] = useState(0);

  /* 별점 등록 */
  const handleStarClick = (index) => {
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

  useEffect(() => {}, [contentRef]);

  return (
    <>
      {ReviewWrite ? (
        <Container className=" border border-success rounded">
          <Form.Group className="position-relative">
            <div className="mt-3 mb-3 mx-3">
              {/* 별점 등록 */}
              <Stars className="mb-4 justify-content-center">
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
                maxlength={100}
                placeholder="자세하고 솔직한 리뷰는 다른 고객에게 큰 도움이 됩니다!🤗"
                rows={4}
                required
                className="mb-3"
                ref={contentRef}
                onChange={() => {
                  setText(contentRef.current.value.length);
                }}
              />
              {/* 리뷰 사진 */}
              <Form.Control
                type="file"
                name="file"
                size="sm"
                className="mb-3"
                ref={imgRef}
                onChange={handleImg}
              />
            </div>

            <Row className="d-flex justify-content-end">
              <Col className=" text-end mb-3 mx-2">
                <p className="text-mute">글자수 제한: {text}/100자</p>
                <Button
                  variant="success"
                  className="reviewSubmitBtn"
                  onClick={() => {
                    const content = contentRef.current.value;

                    if (nickName === '') {
                      alert('댓글 등록에 실패했습니다. 😥 로그인해주세요!');
                      navigate('/login');
                    } else if (content === '') {
                      alert(
                        '댓글 등록에 실패했습니다. 😥 내용을 작성해주세요!'
                      );
                    } else if (upload) {
                      fetch('http://13.125.234.1:4000/review/img', {
                        method: 'post',
                        headers: {},
                        body: formData,
                      })
                        .then((res) => res.json())
                        .then((data) => {
                          axios
                            .post('http://13.125.234.1:4000/review/write', [
                              {
                                nickName,
                                content,
                                contentId,
                                star,
                                img: data,
                              },
                            ])
                            .then((res) => {
                              console.log('댓글 등록 성공');
                              contentRef.current.value = '';
                              imgRef.current.value = '';
                              alert('댓글 등록을 성공하였습니다. 🙌');
                              // 댓글 등록에 성공하면 redux에 review 가 업데이트 되었다고 알려주기!
                              dispatch(reviewUpdate());
                            })
                            .catch(() => {
                              console.log('댓글 등록 실패');
                              alert(
                                '댓글 등록을 실패하였습니다. 다시 시도해주세요.'
                              );
                            });
                        });
                    } else {
                      axios
                        .post('http://13.125.234.1:4000/review/write', [
                          {
                            nickName,
                            content,
                            contentId,
                            star,
                            img: '',
                          },
                        ])
                        .then((res) => {
                          console.log('댓글 등록 성공');
                          contentRef.current.value = '';
                          imgRef.current.value = '';
                          alert('댓글 등록을 성공하였습니다. 🙌');
                          // 댓글 등록에 성공하면 redux에 review 가 업데이트 되었다고 알려주기!
                          dispatch(reviewUpdate());
                        })
                        .catch(() => {
                          console.log('댓글 등록 실패');
                          alert(
                            '댓글 등록을 실패하였습니다. 다시 시도해주세요.'
                          );
                        });
                    }
                  }}
                >
                  등록
                </Button>
              </Col>
            </Row>
          </Form.Group>
        </Container>
      ) : null}
    </>
  );
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
