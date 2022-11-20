import { useState, useEffect, useRef } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  Image,
  Button,
  Modal,
  Form,
} from 'react-bootstrap';
import Pagination from 'react-js-pagination';
import '../styles/Paging.css';
import axios from 'axios';
// import UserProfile from './UserProfile';
import { useParams } from 'react-router';
import { FaStar } from 'react-icons/fa';
import styled from 'styled-components';
// redux 에서 review 업데이트 여부를 받아옴
import { useSelector } from 'react-redux';
// 리뷰가 업데이트 되면 해당 여부를 redux 에 알리기 위한
// dispatch 훅고 리덕스에서 선언한 액션 생성 함수 임포트
import { useDispatch } from 'react-redux';
import { reviewUpdate } from '../store/modules/detail';

export default function Review() {
  const contentRef = useRef();
  // dispatch 변수에 할당
  const dispatch = useDispatch();
  const params = useParams();
  const contentId = params.contentId;

  const [reviewData, setReviewData] = useState([]);

  const [emendContent, setEmendContent] = useState([]);
  const [emendId, setEmendId] = useState([]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const nickName = useSelector((state) => state.users.userNickName);
  const userImg = useSelector((state) => state.users.userImg);

  // 리덕스 detail store 에서 리뷰 업데이트 현황 받아오기
  const reviewUPdate = useSelector((state) => state.detail.reviewUpdate);

  useEffect(() => {
    axios
      .get(`http://13.125.234.1:4000/review/${contentId}`)
      .then((res) => {
        // console.log('review의 리뷰성공');
        let copy = [...res.data];
        setReviewData(copy);
      })
      .catch(() => console.log('실패함'));
  }, [reviewUPdate]);

  /* pagingnation */
  // 첫 번째 페이지
  const [page, setPage] = useState(1);
  // 한 페이지에 보여줄 총 갯수
  const [pagePost] = useState(6);
  // 페이지 이동 이벤트함수
  const handlePageChange = (page) => {
    setPage(page);
    // console.log(page);
  };
  // 이미지 로딩 실패시
  const onErrorImg = (e) => {
    e.target.src = process.env.PUBLIC_URL + '/images/userNOIMG.png';
  };

  return (
    <>
      <Container>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>🛠 리뷰 수정하기</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Control
              name="textarea"
              as="textarea"
              value={emendContent}
              rows={4}
              required
              className="mb-3"
              // ref={contentRef}
              onChange={(event) => {
                setEmendContent(event.target.value);
              }}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-success" onClick={handleClose}>
              닫기
            </Button>
            <Button
              variant="success"
              onClick={() => {
                axios
                  .post(`http://13.125.234.1:4000/review/emend`, [
                    { emendId, emendContent, nickName },
                  ])
                  .then((res) => {
                    dispatch(reviewUpdate());
                    // console.log('리뷰 수정 저장 성공');
                    setShow(false);
                  })
                  .catch(() => {
                    console.log('실패');
                  });
              }}
            >
              저장
            </Button>
          </Modal.Footer>
        </Modal>
        <Row xs={1} md={1} lg={2} sm={1} xxs={2} className="mb-4">
          {reviewData.length > 0 ? (
            reviewData
              .slice(pagePost * (page - 1), pagePost * (page - 1) + pagePost)
              .map(function (a, i) {
                return (
                  <Col>
                    <Card className="my-2">
                      <Row className="mt-3 mx-2">
                        <div className="d-flex align-items-center justify-content-center">
                          <Col className="col-3 col-lg-3 col-md-2 col-sm-3  text-center">
                            {userImg !== '' ? (
                              <Image
                                src={`http://13.125.234.1:4000/uploads/${userImg}`}
                                roundedCircle
                                style={{
                                  width: '60px',
                                  border: '1px solid black',
                                }}
                              />
                            ) : (
                              <Image
                                onError={onErrorImg}
                                src={`http://13.125.234.1:4000/uploads/${userImg}`}
                                roundedCircle
                                style={{
                                  width: '60px',
                                  border: '1px solid black',
                                }}
                              />
                            )}
                          </Col>
                          <Col>
                            <p className=" fw-bold m-0">{a.nickName}</p>
                            {/* 별점 */}
                            <div className="d-flex justify-content-start align-items-center ">
                              <RaingStar className="text-center m-0">
                                {a.star === 5 ? (
                                  <>
                                    <FaStar size="20" className="yellowStar" />
                                    <FaStar size="20" className="yellowStar" />
                                    <FaStar size="20" className="yellowStar" />
                                    <FaStar size="20" className="yellowStar" />
                                    <FaStar size="20" className="yellowStar" />
                                  </>
                                ) : a.star === 4 ? (
                                  <>
                                    <FaStar size="20" className="yellowStar" />
                                    <FaStar size="20" className="yellowStar" />
                                    <FaStar size="20" className="yellowStar" />
                                    <FaStar size="20" className="yellowStar" />
                                    <FaStar size="20" className="grayStar" />
                                  </>
                                ) : a.star === 3 ? (
                                  <>
                                    <FaStar size="20" className="yellowStar" />
                                    <FaStar size="20" className="yellowStar" />
                                    <FaStar size="20" className="grayStar" />
                                    <FaStar size="20" className="grayStar" />
                                    <FaStar size="20" className="grayStar" />
                                  </>
                                ) : a.star === 2 ? (
                                  <>
                                    <FaStar size="20" className="yellowStar" />
                                    <FaStar size="20" className="yellowStar" />
                                    <FaStar size="20" className="grayStar" />
                                    <FaStar size="20" className="grayStar" />
                                    <FaStar size="20" className="grayStar" />
                                  </>
                                ) : a.star === 1 ? (
                                  <>
                                    <FaStar size="20" className="yellowStar" />
                                    <FaStar size="20" className="grayStar" />
                                    <FaStar size="20" className="grayStar" />
                                    <FaStar size="20" className="grayStar" />
                                    <FaStar size="20" className="grayStar" />
                                  </>
                                ) : (
                                  <>
                                    <FaStar size="20" className="grayStar" />
                                    <FaStar size="20" className="grayStar" />
                                    <FaStar size="20" className="grayStar" />
                                    <FaStar size="20" className="grayStar" />
                                    <FaStar size="20" className="grayStar" />
                                  </>
                                )}
                              </RaingStar>
                            </div>

                            <p className=" text-muted m-0">
                              {a.dateFull.slice(0, 10)}
                            </p>
                          </Col>
                        </div>
                      </Row>

                      {/* 리뷰 내용 */}
                      <Card.Body>
                        <Card.Text className="ps-4">{a.content}</Card.Text>
                        <Col>
                          {a.img !== '' ? (
                            <Image
                              src={`http://13.125.234.1:4000/uploads/${a.img}`}
                              style={{ width: '150px', height: '150px' }}
                              className="mt-3 border"
                            />
                          ) : (
                            <Image
                              onError={onErrorImg}
                              src={`http://13.125.234.1:4000/uploads/${a.img}`}
                              style={{
                                width: '150px',
                                height: '150px',
                                opacity: '0',
                              }}
                              className="mt-3 border"
                            />
                          )}
                        </Col>

                        <Row className="d-flex justify-content-end">
                          <Col className=" text-end mt-3 ">
                            {a.nickName === nickName ? (
                              <>
                                <Button
                                  variant="success"
                                  className="reviewEmendBtn"
                                  onClick={() => {
                                    setShow(true);
                                    axios
                                      .get(
                                        `http://13.125.234.1:4000/review/emend/${a._id}`
                                      )
                                      .then((res) => {
                                        // console.log('review 수정 성공');
                                        setEmendContent(res.data.content);
                                        setEmendId(res.data._id);
                                        dispatch(reviewUpdate());
                                      })
                                      .catch(() => {
                                        console.log('실패');
                                      });
                                  }}
                                >
                                  수정
                                </Button>
                                <Button
                                  variant="success"
                                  className="mx-2"
                                  onClick={() => {
                                    axios
                                      .delete(
                                        `http://13.125.234.1:4000/review/delete/${a._id}`
                                      )
                                      .then((res) => {
                                        // console.log('review 삭제 성공');
                                        dispatch(reviewUpdate());
                                      })
                                      .catch(() => {
                                        console.log('실패');
                                      });
                                  }}
                                >
                                  삭제
                                </Button>{' '}
                              </>
                            ) : (
                              <>
                                <Button style={{ opacity: '0' }}>수정</Button>
                                <Button style={{ opacity: '0' }}>삭제</Button>
                              </>
                            )}
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })
          ) : (
            <Col className="text-center col-lg-12 col-12">
              등록된 리뷰가 없습니다.
            </Col>
          )}
        </Row>

        {/* 페이징네이션 */}
        <Row
          className="d-flex justify-content-center col-2 m-auto mt-4 mb-4"
          lg={2}
        >
          <Pagination
            // * 필수 값
            // *활성 페이지
            activePage={page}
            // 페이지당 항목 수
            itemsCountPerPage={6}
            // 페이지 총 아이템수
            totalItemsCount={reviewData.length}
            // 페이지 범위
            pageRangeDisplayed={5}
            // 이전 페이지 탐색 버튼의 텍스트
            prevPageText={'<'}
            // 다음 페이지 탐색 버튼의 텍스트
            nextPageText={'>'}
            // 페이지 변경 핸들러 pageNumber를 인수로 수신
            onChange={handlePageChange}
          />
        </Row>
      </Container>
    </>
  );
}

const RaingStar = styled.p`
  .yellowStar {
    color: #fcc419;
  }
  .grayStar {
    color: gray;
  }
`;
