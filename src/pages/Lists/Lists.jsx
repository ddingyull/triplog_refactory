import { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Pagination from 'react-js-pagination';
import '../../styles/Paging.css';

export default function Lists() {
  const navigate = useNavigate();
  const params = useParams();

  const areaCode = params.areaCode;
  const contentId = params.contentId;

  const [tourData, setTourData] = useState([]);
  const [reviewData, setReviewData] = useState([]);
  const [details, setDetails] = useState([]);
  const [okay, setOkay] = useState(false);

  // 이미지 로딩 실패
  const onErrorImg = (e) => {
    e.target.src = process.env.PUBLIC_URL + '/images/defaultImage.png';
  };
  /* tourAPI */
  useEffect(() => {
    axios
      .get(
        `https://apis.data.go.kr/B551011/KorService/areaBasedList?serviceKey=rfaoGpiapHFqOcUT6bqfERRxy1WVxzOdOpEC3ChyAFPEfONdSMdRVNETTJKRhqTbPuZ2krpG2mQJMXDbyG74RA%3D%3D&numOfRows=498&pageNo=1&MobileOS=ETC&MobileApp=TripLog&_type=json&listYN=Y&arrange=B&contentTypeId=12&areaCode=${areaCode}`
      )
      .then((response) => {
        setTourData(response.data.response.body.items.item);
        setOkay(true);
      });
  }, []);

  /* 리뷰 */
  useEffect(() => {
    axios
      .get(`http://localhost:4000/review`)
      .then((res) => {
        setReviewData(res.data);
      })
      .catch(() => console.log('리뷰 실패'));
  }, []);

  /* 좋아요/조회수 */
  useEffect(() => {
    axios
      .get(`http://localhost:4000/detail`)
      .then((res) => {
        // console.log(res.data);
        setDetails(res.data);
      })
      .catch(() => {
        console.log('실패');
      });
  }, []);

  /* pagingnation */
  // 첫 번째 페이지
  const [page, setPage] = useState(1);
  // 한 페이지에 보여줄 총 갯수
  const [pagePost] = useState(12);

  // 페이지 이동 이벤트함수
  const handlePageChange = (page) => {
    setPage(page);
    console.log(page);
  };

  if (okay) {
    return (
      <>
        <Nav />
        <Container>
          {/* ListsTAB */}
          <Row className="d-flex col-8 mx-auto text-center mt-4 mb-3">
            <Col
              onClick={() => {
                axios
                  .get(
                    `https://apis.data.go.kr/B551011/KorService/areaBasedList?serviceKey=rfaoGpiapHFqOcUT6bqfERRxy1WVxzOdOpEC3ChyAFPEfONdSMdRVNETTJKRhqTbPuZ2krpG2mQJMXDbyG74RA%3D%3D&numOfRows=498&pageNo=1&MobileOS=ETC&MobileApp=TripLog&_type=json&listYN=Y&arrange=B&contentTypeId=12&areaCode=${areaCode}`
                  )
                  .then((response) => {
                    setTourData(response.data.response.body.items.item);
                  });
              }}
              style={{ cursor: 'pointer' }}
            >
              <p className="fs-2 mb-1">🌳</p>
              <p className="fw-bold">관광</p>
            </Col>
            <Col
              onClick={() => {
                axios
                  .get(
                    `https://apis.data.go.kr/B551011/KorService/areaBasedList?serviceKey=rfaoGpiapHFqOcUT6bqfERRxy1WVxzOdOpEC3ChyAFPEfONdSMdRVNETTJKRhqTbPuZ2krpG2mQJMXDbyG74RA%3D%3D&numOfRows=498&pageNo=1&MobileOS=ETC&MobileApp=TripLog&_type=json&listYN=Y&arrange=B&contentTypeId=14&areaCode=${areaCode}`
                  )
                  .then((response) => {
                    setTourData(response.data.response.body.items.item);
                  });
              }}
              style={{ cursor: 'pointer' }}
            >
              <p className="fs-2 mb-1">⛩ </p>
              <p className="fw-bold">문화</p>
            </Col>
            <Col
              onClick={() => {
                axios
                  .get(
                    `https://apis.data.go.kr/B551011/KorService/areaBasedList?serviceKey=rfaoGpiapHFqOcUT6bqfERRxy1WVxzOdOpEC3ChyAFPEfONdSMdRVNETTJKRhqTbPuZ2krpG2mQJMXDbyG74RA%3D%3D&numOfRows=850&pageNo=1&MobileOS=ETC&MobileApp=TripLog&_type=json&listYN=Y&arrange=B&contentTypeId=39&areaCode=${areaCode}`
                  )
                  .then((response) => {
                    setTourData(response.data.response.body.items.item);
                  });
              }}
              style={{ cursor: 'pointer' }}
            >
              <p className="fs-2 mb-1">🍽</p>
              <p className="fw-bold">음식</p>
            </Col>
            <Col
              onClick={() => {
                axios
                  .get(
                    `https://apis.data.go.kr/B551011/KorService/areaBasedList?serviceKey=rfaoGpiapHFqOcUT6bqfERRxy1WVxzOdOpEC3ChyAFPEfONdSMdRVNETTJKRhqTbPuZ2krpG2mQJMXDbyG74RA%3D%3D&numOfRows=498&pageNo=1&MobileOS=ETC&MobileApp=TripLog&_type=json&listYN=Y&arrange=B&contentTypeId=32&areaCode=${areaCode}`
                  )
                  .then((response) => {
                    setTourData(response.data.response.body.items.item);
                  });
              }}
              style={{ cursor: 'pointer' }}
            >
              <p className="fs-2 mb-1">🏠</p>
              <p className="fw-bold">숙소</p>
            </Col>
            <Col
              onClick={() => {
                axios
                  .get(
                    `https://apis.data.go.kr/B551011/KorService/areaBasedList?serviceKey=rfaoGpiapHFqOcUT6bqfERRxy1WVxzOdOpEC3ChyAFPEfONdSMdRVNETTJKRhqTbPuZ2krpG2mQJMXDbyG74RA%3D%3D&numOfRows=498&pageNo=1&MobileOS=ETC&MobileApp=TripLog&_type=json&listYN=Y&arrange=B&contentTypeId=38&areaCode=${areaCode}`
                  )
                  .then((response) => {
                    setTourData(response.data.response.body.items.item);
                  });
              }}
              style={{ cursor: 'pointer' }}
            >
              <p className="fs-2 mb-1">🛍</p>
              <p className="fw-bold">쇼핑</p>
            </Col>
          </Row>
          {/* Lists CARD */}
          <Row xs={1} md={2} lg={3} className="g-4">
            {tourData.length > 0
              ? tourData
                  .slice(
                    pagePost * (page - 1),
                    pagePost * (page - 1) + pagePost
                  )
                  .map(function (a, i) {
                    return (
                      <Col>
                        <Card
                          onClick={() => {
                            navigate(`/detail/${a.contentid}`);
                          }}
                        >
                          <Card.Img
                            variant="top"
                            src={a.firstimage}
                            onError={onErrorImg}
                            height={'250rem'}
                          />
                          <Card.Body>
                            <Card.Title>{a.title}</Card.Title>
                            <Card.Text className="text-muted">
                              {a.addr1}
                            </Card.Text>
                            <Card.Text className="text-muted">
                              <span>
                                {reviewData.map((el) => {
                                  if (el.contentId === tourData[i].contentid) {
                                    const str = ` ⭐⭐⭐⭐⭐ ${el.star}`;
                                    return str;
                                  }
                                })}
                              </span>
                              <span>
                                {details.map((el) => {
                                  if (el.contentId === tourData[i].contentid) {
                                    const str = ` ❤ ${el.like}`;
                                    return str;
                                  }
                                })}
                              </span>
                              <span>
                                {details.map((el) => {
                                  if (el.contentId === tourData[i].contentid) {
                                    const str = ` 조회수 ${el.view}`;
                                    return str;
                                  }
                                })}
                              </span>
                              {/* 
                            ⭐⭐⭐⭐⭐<span> {reviewData.length} </span> ❤{' '}
                            <span>{details.like}</span>
                            조회수 <span>

                            </span> */}
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                    );
                  })
              : null}
          </Row>

          {/* Pagination */}
          <Row
            className="d-flex justify-content-center col-2 m-auto mt-4 mb-4"
            lg={2}
          >
            <Pagination
              // * 필수 값
              // *활성 페이지
              activePage={page}
              // 페이지당 항목 수
              itemsCountPerPage={12}
              // 페이지 총 아이템수
              totalItemsCount={tourData.length}
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
        <Footer />
      </>
    );
  }
}
