import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import {
  Container,
  Tab,
  Row,
  Col,
  Nav,
  Button,
  Form,
  Card,
  Accordion,
  Stack,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import Footer from '../../components/Footer';
import PageNav from '../../components/Nav';
import CheckList from '../../pages/CheckList/CheckList';
import Review from '../../components/Review';
import PlanList from '../../components/Plan/PlanList';
import Budget from './content/Budget';
import PlanLIst from '../../components/Plan/PlanList';
import axios from 'axios';

import {
  FaArrowAltCircleUp,
  FaPencilAlt,
  FaTrash,
  FaStar,
} from 'react-icons/fa';
import { useSelector } from 'react-redux';

export default function MyPage() {
  const state = useSelector((state) => state.triplog);
  const [review, setReview] = useState([]);
  const [like, setLike] = useState([]);
  const [user, setUser] = useState([]);
  const [tourData, setTourData] = useState([]);
  const [okay, setOkay] = useState(false);
  const nickName = 'test';
  console.log('리뷰', review);

  // 리뷰 데이터 가져오기
  useEffect(() => {
    axios
      .post('http://localhost:4000/review', { nickName })
      .then((res) => {
        // console.log(res.data);
        setReview(res.data);
        // setOkay(true);
        console.log(review);
      })
      .catch(() => {
        console.log('실패');
      });
  }, []);
  console.log(review);
  return (
    <>
      <PageNav />
      <Container>
        <Row
          style={{ marginTop: '50px' }}
          className="d-block justify-content-center"
        >
          <Col sm={12}>
            <Tab.Container
              id="left-tabs-example"
              defaultActiveKey="budget"
              className="m-auto"
            >
              <Row>
                {/* 가로 nav tab */}
                <Col sm={3}>
                  <img
                    src="/images/yurim.png"
                    style={{ width: '13rem', height: '13rem' }}
                    className="bg-success rounded text-center d-block m-auto"
                  ></img>
                  <Nav
                    variant="pills"
                    className="flex-column mt-4 text-center"
                    style={{ color: '#333' }}
                  >
                    <Nav.Item>
                      <Nav.Link eventKey="trip">여행 조회</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="checklist">체크리스트</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="budget">가계부</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="pick">찜한 곳</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="review">리뷰</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>

                {/* 컨텐츠 */}
                <Col sm={9}>
                  <Tab.Content className="m-auto">
                    {/* 여행 조회 */}
                    <Tab.Pane eventKey="trip">
                      <Col sm={11} className="m-auto">
                        <h4 className="fw-bold fs-3 text-center p-4">
                          <p className="text-success d-inline">thals0 님 </p>의
                          TripLog 여행
                        </h4>
                        <Container
                          sm={1}
                          md={1}
                          lg={2}
                          xl={2}
                          className="overflow-auto"
                          style={{ height: '20%', width: '350px' }}
                          // key={idx}
                        >
                          <Card className="col-md-12 overflow-auto">
                            <Row className="d-flex justify-content-center">
                              <Col md={4} className="d-flex m-3">
                                <p className="fw-6 fw-bold me-2">day 1</p>
                                <p className="fw-6">1일차</p>
                              </Col>
                            </Row>
                            <Row className="m-3">
                              <Stack className="col-9 d-flex flex-column my-auto">
                                <Title className="m-1 fs-6">title</Title>
                                <Title
                                  className="m-1"
                                  style={{ fontSize: '12px' }}
                                >
                                  주소
                                </Title>
                              </Stack>
                            </Row>
                          </Card>
                        </Container>
                      </Col>
                    </Tab.Pane>
                    {/* 체크리스트 조회 */}
                    <Tab.Pane eventKey="checklist">
                      <h4 className="fw-bold fs-3 text-center p-4">
                        <p className="text-success d-inline">thals0 님 </p>의
                        체크리스트
                      </h4>
                      <Container className="m-auto mt-5">
                        <Accordion defaultActiveKey="0">
                          <Accordion.Item>
                            <Accordion.Header>
                              db에서 데이터 받아와서 보여주기
                            </Accordion.Header>
                            <Accordion.Body>
                              <Form>
                                <Form.Check
                                  type="checkbox"
                                  className="d-flex justify-content-between"
                                >
                                  <Form.Check.Input
                                    type="checkbox"
                                    // onClick={handleToggle(b)}
                                    // checked={checked.indexOf(b) !== -1}
                                  />
                                  <Form.Check.Label>11</Form.Check.Label>
                                  <FaTrash style={{ color: 'grey' }} />
                                </Form.Check>
                              </Form>
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                      </Container>
                    </Tab.Pane>
                    {/* 가계부 조회*/}
                    <Tab.Pane eventKey="budget">
                      <h4 className="fw-bold fs-3 text-center p-4">
                        <p className="text-success d-inline">thals0 님 </p>의
                        가계부
                      </h4>
                      <Col
                        className="col-6 p-5 rounded border m-auto"
                        style={{ backgroundColor: '#fafafa', width: '70%' }}
                      >
                        <h6
                          className="fw-bold text-center"
                          style={{ color: '#198754' }}
                        >
                          TripLog
                        </h6>
                        <h2 className="fw-bold text-center fs-4">RECEIPT</h2>

                        <hr
                          class="solid"
                          style={{ borderTopWidth: '2px' }}
                        ></hr>

                        <Row className=" mb-2 mx-1">
                          <Col className="fw-bold col-2 fs-6">Day</Col>
                          <Col className="fw-bold col-6 text-center fs-6">
                            ITEM
                          </Col>
                          <Col className="fw-bold col-2 text-center fs-6 ">
                            Price
                          </Col>
                          <Col className="fw-bold col-1 fs-6">Edit</Col>
                          <Col className="fw-bold col-1 fs-6">Del</Col>
                        </Row>
                        <hr class="solid"></hr>
                        <Row className="mx-1">
                          <Col className="col-2">
                            <p>11.04</p>
                          </Col>
                          <Col className="col-6 text-center">title</Col>
                          <Col className="col-2 text-center">가격</Col>
                          <Col
                            className="col-1 text-end"
                            style={{ cursor: 'pointer' }}
                          >
                            {/* <FaPencilAlt style={{ color: '#198754' }} /> */}
                          </Col>
                          <Col
                            className="col-1 text-end"
                            style={{ cursor: 'pointer' }}
                          >
                            <FaTrash style={{ color: 'grey' }} />
                          </Col>
                        </Row>
                        <hr class="dashed" style={{ borderTop: 'dashed' }}></hr>
                        <Row>
                          <Col sm md lg="auto" className="fw-bold">
                            ITEM COUNT :
                          </Col>
                          <Col className="text-end">10개</Col>
                        </Row>

                        <Row>
                          <Col className="fw-bold">인원수 : 8 명</Col>
                          <Col sm md lg="auto" className="text-end">
                            인당 20000원
                          </Col>
                        </Row>

                        <Row>
                          <Col className="fw-bold">총 합계 :</Col>
                          <Col sm md lg="auto" className="text-end">
                            오조오억원
                          </Col>
                        </Row>

                        <hr
                          className="dashed"
                          style={{ borderTop: 'dashed' }}
                        ></hr>
                        <Row>
                          <Col className="text-start ">
                            <span>영수증 전체 초기화</span>
                          </Col>
                          <Col lg="auto" className="col-sm-2 ">
                            <Button variant="success">초기화</Button>
                          </Col>
                        </Row>
                      </Col>
                      ;
                    </Tab.Pane>
                    {/* 찜한 곳 조회*/}
                    <Tab.Pane eventKey="pick" className="container">
                      <h4 className="fw-bold fs-3 text-center p-4">찜한 곳</h4>
                      <Container className="d-flex flex-wrap">
                        {[1, 2, 3, 4].map((a, i) => {
                          return (
                            <Card
                              className="m-3"
                              style={{ width: '29%' }}
                              // onClick={() => {navigate(`/detail/${tourData.contentid}`);}}
                            >
                              <Card.Img
                                variant="top"
                                // src={tourData.firstimage}
                                src="/images/jeju/tour/유수암마을_귤.png"
                              />
                              <Card.Body>
                                {/* <Card.Title>{tourData.title}</Card.Title> */}
                                <Card.Title>제목제목제목</Card.Title>
                                <Card.Text className="text-muted">
                                  {/* {tourData.addr1} */}
                                  서울시 서초구 방배1동
                                </Card.Text>
                                <Card.Text className="text-muted">
                                  ⭐⭐⭐⭐⭐ <span>30</span>
                                </Card.Text>
                              </Card.Body>
                            </Card>
                          );
                        })}
                      </Container>
                    </Tab.Pane>
                    <Tab.Pane eventKey="review">
                      {/* 리뷰 조회 */}
                      {review.map(function (b, j) {
                        return (
                          <>
                            <h4 className="fw-bold fs-3 text-center p-4">
                              <p className="text-success d-inline">
                                {state.user} 님
                              </p>
                              의 리뷰
                            </h4>
                            <Col>
                              <Card
                                className="mt-3 "
                                style={{ overflowY: 'scroll' }}
                              >
                                <Card.Body
                                  className="m-2 "
                                  style={{ height: '40vh' }}
                                >
                                  <p className=" mb-2 text-muted">
                                    조회수 <span>100</span>
                                  </p>
                                  <Card.Title className="mb-3">
                                    {review[j].contentId} title
                                  </Card.Title>
                                  <Card.Subtitle className="mb-2 text-muted">
                                    {review[j].dateFull}
                                  </Card.Subtitle>
                                  <Card.Text className="mb-2">
                                    ⭐⭐⭐⭐⭐<span> {review[j].star} </span> ❤{' '}
                                    {review[j].dateFull}
                                  </Card.Text>
                                  <Card.Text>{review[j].content}</Card.Text>
                                </Card.Body>
                              </Card>
                            </Col>
                          </>
                        );
                      })}
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Col>
        </Row>
      </Container>

      <Footer />
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

const Title = styled.p`
  font: 2rem/1 'Inter';
`;

// const NavCol = styled.li`
//   list-style: none;
//   color: #333;
// `;

// const NavLink = styled.li`
//   list-style: none;
//   &:hover {
//     box-flex-group: #036635;
//     color: #fff;
//   }
// `;
