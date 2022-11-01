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

export default function MyPage() {
  // useEffect (() => {
  //   AuthRoute();
  // }, []);

  // const AuthRoute = function() {
  //   return (
  //     isLogin ?
  //       <MyPage/>
  //       : alert('로그인이 필요한 페이지입니다'),
  //         Navigate('/Login')
  //       )
  //         }

  // const Navigate = useNavigate();
  // const isLogin = localStorage.getItem("token");
  return (
    <>
      <PageNav />
      <Container>
        <Row style={{ marginTop: '50px' }}>
          <Col sm={10} className="m-auto">
            <Tab.Container id="left-tabs-example" defaultActiveKey="trip">
              <Row>
                {/* 가로 nav tab */}
                <Col sm={2}>
                  <div
                    style={{ width: '10rem', height: '10rem' }}
                    className="bg-success rounded text-center mb-5"
                  ></div>
                  <Nav variant="pills" className="flex-column">
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
                  <Tab.Content>
                    {/* 여행 조회 */}
                    <Tab.Pane eventKey="trip">
                      <Col sm={11} className="m-auto">
                        <h4 className="fw-bold fs-3 text-center p-4">
                          <p className="text-success d-inline">thals0 님 </p>의
                          TripLog 여행
                        </h4>
                        <div>1일차 비행기티켓?</div>
                        <PlanList />
                      </Col>
                    </Tab.Pane>

                    {/* 체크리스트 조회 */}
                    <Tab.Pane eventKey="checklist">
                      <h4 className="fw-bold fs-3 text-center p-4">
                        <p className="text-success d-inline">thals0 님 </p>의
                        체크리스트
                      </h4>
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
                    <Tab.Pane eventKey="pick">
                      <h4 className="fw-bold fs-3 text-center p-4">찜한 곳</h4>
                    </Tab.Pane>

                    {/* 리뷰 조회 */}
                    <Tab.Pane eventKey="review">
                      <h4 className="fw-bold fs-3 text-center p-4">
                        <p className="text-success d-inline">thals0 님 </p>의
                        리뷰
                      </h4>
                      <Container className=" border border-success rounded">
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
                                {/* {tourData.title} */}
                              </Card.Title>
                              <Card.Subtitle className="mb-2 text-muted">
                                {/* 📍 {tourData.addr1} */}
                              </Card.Subtitle>
                              <Card.Text className="mb-2">
                                ⭐⭐⭐⭐⭐<span> 30 </span> ❤{' '}
                                {/* <span>{details.like}</span> */}
                              </Card.Text>
                            </Card.Body>
                          </Card>
                        </Col>
                      </Container>
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
