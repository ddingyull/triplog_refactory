import { useState, useEffect, useRef } from 'react';
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
import CheckListRe from '../CheckList/CheckList_re';
import BudgetRe from '../Budget/Budget_re';
import Review from '../../components/Review';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import {
  FaArrowAltCircleUp,
  FaPencilAlt,
  FaTrash,
  FaStar,
} from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

const formData = new FormData();

export default function MyPage() {
  let [tab, setTab] = useState(0);

  const dispatch = useDispatch();
  const nickName = useSelector((state) => state.users.userNickName);
  const [okay, setOkay] = useState(false);
  const [yes, setYes] = useState(false);
  const [good, setGood] = useState(false);
  const [tourData, setTourData] = useState([]);
  const [like, setLike] = useState([]);
  const [user, setUser] = useState([]);
  const [review, setReview] = useState([]);
  const [plan, setPlan] = useState([]);
  // 이미지 저장
  const [userData, setUserData] = useState([]);
  const [imgUpload, setImgUpload] = useState(false);
  // islogin
  const users = useSelector((state) => state.users);

  // 이미지 업로드
  const imgRef = useRef();
  const handleImg = (e) => {
    formData.append('img', e.target.files[0]);
  };
  const userImg = async () => {
    await fetch('http://localhost:4000/user/img', {
      method: 'post',
      headers: {},
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        axios
          .post('http://localhost:4000/user/upload', [{ nickName, img: data }])
          .then((결과) => {
            // 백엔드 콘솔 결과
            console.log(결과);
            console.log('성공');
            setImgUpload(true);
          })
          .catch(() => {
            console.log('실패');
          });
      });
  };

  // 디테일 데이터 받아오기
  useEffect(() => {
    axios.get('http://localhost:4000/detail').then((res) => {
      // console.log(res.data[0].data.title);
      console.log(res.data);
      setTourData(res.data);
      setOkay(true);
    });
  }, []);

  // plan
  useEffect(() => {
    axios
      .post('http://localhost:4000/plan/getplan', { nickName })
      .then((res) => {
        console.log('%%%%%%', res.data);
        setPlan(res.data);
        setYes(true);
      })
      .catch(() => {
        console.log('실패');
      });
  }, []);

  // 리뷰 데이터 가져오기
  useEffect(() => {
    axios
      .post('http://localhost:4000/review', { nickName })
      .then((res) => {
        // console.log(res.data);
        setReview(res.data);
        setGood(true);
      })
      .catch(() => {
        console.log('실패');
      });
  }, []);

  // 저장 목록 데이터 가져오기
  useEffect(() => {
    axios
      .post('http://localhost:4000/like/getlikes', { nickName })
      .then((res) => {
        console.log(res.data);
        // console.log(res.data[0].likes);
        setLike(res.data.likes);
        // setOkay(true);
      })
      .catch(() => {
        console.log('실패');
      });
  }, []);

  // 이미지 가져오기
  useEffect(() => {
    axios
      .post('http://localhost:4000/user', { nickName })
      .then((res) => {
        setUserData(res.data);
      })
      .catch(() => {
        console.log('실패');
      });
  }, [userData]);

  if (okay && yes && good) {
    return (
      <>
        <PageNav />
        <Container>
          <Row style={{ marginTop: '50px' }} className="m-auto my-5">
            <Col sm={12}>
              <Tab.Container
                id="left-tabs-example"
                defaultActiveKey="budget"
                className="m-auto"
              >
                <Row>
                  {/* 가로 nav tab */}
                  <Col className="col-sm-0 col-md-1 col-lg-2">
                    {userData.img !== undefined ? (
                      <img
                        src={`http://localhost:4000/uploads/${userData.img}`}
                        alt="회원 이미지"
                        style={{ width: '13rem', height: '13rem' }}
                        className="bg-dark rounded text-center d-block m-auto"
                      />
                    ) : (
                      <div
                        // src="/images/submain/서울.jpg"
                        style={{ width: '13rem', height: '13rem' }}
                        className="bg-dark rounded text-center d-block m-auto"
                      ></div>
                    )}
                    <p className="fs-3 text-center text-success fw-bold m-2">
                      {nickName}
                    </p>
                    {imgUpload === true ? null : (
                      <div className="d-flex">
                        <input
                          style={{ fontSize: '14px', margin: '20px' }}
                          type="file"
                          ref={imgRef}
                          name="img"
                          onChange={handleImg}
                        />
                        <button className="btn" onClick={userImg}>
                          ✅
                        </button>
                      </div>
                    )}
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
                      {/* <Nav.Item>
                        <Nav.Link eventKey="pick">찜한 곳</Nav.Link>
                      </Nav.Item> */}
                      <Nav.Item>
                        <Nav.Link eventKey="review">리뷰</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  {/* 컨텐츠 */}
                  <Col className="col-sm-12 col-md-8">
                    <Tab.Content>
                      {/* 여행 조회 */}
                      <Tab.Pane eventKey="trip">
                        <Row className="m-auto">
                          <h1 className="fw-bold lh-base mt-5 mb-4">
                            <span style={{ color: '#198754' }}>{nickName}</span>
                            <span>님의</span>
                            <br></br>
                            <span>여행🛫 일정입니다</span>
                          </h1>
                          <Row className="d-flex w-75 m-auto">
                            {plan !== '내 여행 없음' ? (
                              plan.state.planDate.period.map(function (a, i) {
                                return (
                                  <Container xl={5} className="my-3 " key={i}>
                                    <Card className="m-2">
                                      <Row className="d-flex justify-content-center flex-wrap">
                                        <Col
                                          md={7}
                                          className="d-flex text-center"
                                        >
                                          <p
                                            className="fw-6 fw-bold w-75 m-auto my-3 text-center bg-success rounded p-2"
                                            style={{ color: '#fff' }}
                                          >
                                            day {i + 1}
                                          </p>
                                        </Col>
                                      </Row>
                                      <Row className="m-3">
                                        <Stack className="col-9 d-flex flex-column my-auto text-center">
                                          {plan.state.planItems[i].map(
                                            function (b, j) {
                                              return (
                                                <div
                                                  style={{
                                                    backgroundColor: '#fafafa',
                                                    padding: '1rem',
                                                  }}
                                                >
                                                  <Title className="m-1 fs-6">
                                                    {
                                                      plan.state.planItems[i][j]
                                                        .title
                                                    }
                                                  </Title>
                                                  <Title
                                                    className="m-1"
                                                    style={{ fontSize: '12px' }}
                                                  >
                                                    {
                                                      plan.state.planItems[i][j]
                                                        .addr1
                                                    }
                                                  </Title>
                                                  <div
                                                    style={{ color: '#1A8754' }}
                                                  >
                                                    <FontAwesomeIcon
                                                      icon={faArrowDown}
                                                    />
                                                  </div>
                                                </div>
                                              );
                                            }
                                          )}
                                        </Stack>
                                      </Row>
                                    </Card>
                                  </Container>
                                );
                              })
                            ) : (
                              <div>계획한 여행이 아직 없습니다</div>
                            )}
                          </Row>
                        </Row>
                      </Tab.Pane>

                      {/* 체크리스트 조회 */}
                      <Tab.Pane eventKey="checklist">
                        <CheckListRe />
                      </Tab.Pane>

                      {/* 가계부 조회*/}
                      <Tab.Pane eventKey="budget">
                        <BudgetRe />
                      </Tab.Pane>

                      {/* 리뷰 조회 */}
                      <Tab.Pane eventKey="review">
                        <h1 className="fw-bold lh-base mt-5 mb-4">
                          <span style={{ color: '#198754' }}>{nickName}</span>
                          <span>님의</span>
                          <br></br>
                          <span>리뷰✏️ 입니다</span>
                        </h1>
                        <Review />
                        {review.map(function (b, j) {
                          return (
                            <>
                              <Row
                                className="m-auto text-center w-75 shadow-sm"
                                style={{ fontSize: '12px' }}
                              >
                                <Card className="mt-3">
                                  <Card.Body>
                                    <Card.Title className="mb-3 fs-6 bg-dark text-light w-50 p-1 m-5 m-auto rounded">
                                      {tourData.map((el) => {
                                        if (
                                          el.data.contentid ===
                                          review[j].contentId
                                        ) {
                                          return el.data.title;
                                        }
                                      })}
                                    </Card.Title>
                                    <div className="d-flex">
                                      <div className="border rounded w-50">
                                        <p className="mb-2 text-muted">
                                          {review[j].dateFull.slice(0, 10)}
                                        </p>
                                        <Card.Text className="mb-2">
                                          ⭐⭐⭐⭐⭐
                                          <span> {review[j].star} </span>
                                          ❤👍🏼 조회수{' '}
                                          <span>{review[j].view}</span>
                                        </Card.Text>
                                      </div>

                                      <div className="w-50 ms-2 border rounded">
                                        <Card.Text className=" d-flex align-items-center justify-content-center h-100 fs-6">
                                          {review[j].content}
                                        </Card.Text>
                                      </div>
                                    </div>
                                  </Card.Body>
                                </Card>
                              </Row>
                            </>
                          );
                        })}
                      </Tab.Pane>
                    </Tab.Content>
                  </Col>
                  {/* 컨텐츠 끝나는 시점 */}
                </Row>
              </Tab.Container>
            </Col>
          </Row>
        </Container>

        <Footer />
      </>
    );
  }
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
