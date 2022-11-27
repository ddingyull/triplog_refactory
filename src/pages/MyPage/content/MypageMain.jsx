import { useState, useEffect, useRef } from 'react';
import {
  Container,
  Tab,
  Row,
  Col,
  Nav,
  Form,
  Card,
  Stack,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import Footer from '../../../components/Footer';
import PageNav from '../../../components/Nav';
import CheckListRe from '../../CheckList/CheckList_re';
import BudgetRe from '../../Budget/Budget_re';
// import Review from '../Detail/Review/Review';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FaCheck } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

const formData = new FormData();

export default function MyPage() {
  let [tab, setTab] = useState(0);

  const dispatch = useDispatch();
  const nickName = useSelector((state) => state.users.userNickName);
  const [detailOK, setDtailOK] = useState(false);
  const [planOK, setPlanOK] = useState(false);
  const [reviewOK, setReviewOK] = useState(false);
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
    await fetch('http://13.125.234.1:4000/user/img', {
      method: 'post',
      headers: {},
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        axios
          .post('http://13.125.234.1:4000/user/upload', [
            { nickName, img: data },
          ])
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
    axios.get('http://13.125.234.1:4000/detail').then((res) => {
      console.log(res.data);
      setTourData(res.data);
      setDtailOK(true);
    });
  }, []);

  // plan
  useEffect(() => {
    axios
      .post('http://13.125.234.1:4000/plan/getplan', { nickName })
      .then((res) => {
        console.log('plan', res.data);
        setPlan(res.data);
        setPlanOK(true);
      })
      .catch(() => {
        console.log('실패');
      });
  }, []);

  // 리뷰 데이터 가져오기
  useEffect(() => {
    axios
      .post('http://13.125.234.1:4000/review', { nickName })
      .then((res) => {
        setReview(res.data);
        setReviewOK(true);
      })
      .catch(() => {
        console.log('실패');
      });
  }, []);

  // 저장 목록 데이터 가져오기
  useEffect(() => {
    axios
      .post('http://13.125.234.1:4000/like/getlikes', { nickName })
      .then((res) => {
        console.log(res.data);
        setLike(res.data.likes);
      })
      .catch(() => {
        console.log('실패');
      });
  }, []);

  // 이미지 가져오기
  useEffect(() => {
    axios
      .post('http://13.125.234.1:4000/user', { nickName })
      .then((res) => {
        setUserData(res.data);
      })
      .catch(() => {
        console.log('실패');
      });
  }, [userData]);

  const onErrorImg = (e) => {
    e.target.src = process.env.PUBLIC_URL + '/images/defaultImage.png';
  };

  if (detailOK && planOK && reviewOK) {
    return (
      <>
        <PageNav />
        <Container
          style={{ marginTop: '50px' }}
          className="d-flex justify-content-center col-lg-9"
        >
          <Row xs={1} sm={1} md={1}>
            <Tab.Container id="left-tabs-example" defaultActiveKey="trip">
              {/* 가로 nav tab */}
              <Col className="col-lg-3">
                {userData.img !== '' ? (
                  <img
                    src={`http://13.125.234.1:4000/uploads/${userData.img}`}
                    alt="회원 이미지"
                    style={{ width: '13rem', height: '13rem' }}
                    className="bg-dark rounded text-center d-block m-auto"
                  />
                ) : (
                  <img onError={onErrorImg} />
                )}
                <p className="fs-3 text-center text-success fw-bold m-2">
                  {nickName}
                </p>
                {imgUpload === true ? null : (
                  <div className="d-flex">
                    <Form.Control
                      style={{ fontSize: '8px', margin: '20px' }}
                      type="file"
                      ref={imgRef}
                      name="img"
                      onChange={handleImg}
                    />
                    <button className="btn" onClick={userImg}>
                      <FaCheck className="text-dark" />
                    </button>
                  </div>
                )}
                <TabContainer>
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
                      <Nav.Link eventKey="review">리뷰</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </TabContainer>
              </Col>
            </Tab.Container>
          </Row>
        </Container>
        <Footer />
      </>
    );
  }
}

const Stars = styled.div`
  /* display: flex; */
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

const TabContainer = styled.div`
  .nav-pills .nav-link {
    color: #198754;
  }
  .nav-pills .nav-link.active {
    color: #fff;
    background-color: #198754;
  }
`;
