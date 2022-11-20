import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Row, Col, Card } from 'react-bootstrap';
import Pagination from 'react-js-pagination';
import '../../styles/Paging.css';

export default function ListDetail({ props, region }) {
  const navigate = useNavigate();

  // const [reviewData, setReviewData] = useState([]);
  // const [details, setDetails] = useState([]);

  // const checkLike = useRef();
  // const checkView = useRef();

  // 이미지 로딩 실패
  const onErrorImg = (e) => {
    e.target.src = process.env.PUBLIC_URL + '/images/defaultImage.png';
  };

  /* 좋아요& 조회수 
  useEffect(() => {
    axios
      .get(`http://13.125.234.1:4000/detail`)
      .then((res) => {
        // console.log(res.data);
        setDetails(res.data);
      })
      .catch(() => {
        console.log('실패');
      });
  }, []); */

  /* pagingnation */
  // 첫 번째 페이지
  const [page, setPage] = useState(1);
  // 한 페이지에 보여줄 총 갯수
  const [pagePost] = useState(12);
  // 페이지 이동 이벤트함수
  const handlePageChange = (page) => {
    setPage(page);
  };

  if (props) {
    return (
      <>
        {/* Lists CARD */}
        <Row xs={1} sm={2} md={2} lg={3} className="g-4">
          {props.length > 0
            ? props
                .slice(pagePost * (page - 1), pagePost * (page - 1) + pagePost)
                .map(function (a, i) {
                  // checkLike.current = true;
                  // checkView.current = true;
                  return (
                    <Col>
                      <Card
                        onClick={() => {
                          navigate(`/detail/${region}/${a.contentid}`);
                        }}
                      >
                        <Card.Img
                          variant="top"
                          src={a.firstimage1}
                          onError={onErrorImg}
                          height={'250rem'}
                          className="border"
                        />
                        <Card.Body>
                          <Card.Title>{a.title}</Card.Title>
                          <Card.Text className="text-muted">
                            {a.addr1}
                          </Card.Text>
                          <Card.Text className="text-muted">
                            <span>❤{a.like}</span>
                            <span>⭐{a.star}</span>
                            {/* <span>
                              {details.map((el, j, arr) => {
                                if (
                                  el.data.contentid === tourData[i].contentid
                                ) {
                                  const star = parseFloat(el.starAvg);
                                  const str = ` ⭐️ ${star}`;
                                  checkLike.current = false;
                                  return str;
                                }

                                if (checkLike.current && arr.length - 1 === j) {
                                  return ` ⭐️ 0`;
                                }
                              })}
                            </span>
                            <span>
                              {details.map((el, j, arr) => {
                                if (
                                  el.data.contentid === tourData[i].contentid
                                ) {
                                  const str = ` ❤ ${el.like}`;
                                  checkLike.current = false;
                                  return str;
                                }

                                if (checkLike.current && arr.length - 1 === j) {
                                  return ` ❤ 0`;
                                }
                              })}
                            </span>
                            <span>
                              {details.map((el, k, arr) => {
                                if (
                                  el.data.contentid === tourData[i].contentid
                                ) {
                                  const str = ` 조회수 ${el.view}`;
                                  checkView.current = true;
                                  return str;
                                }

                                if (checkLike.current && arr.length - 1 === k) {
                                  return ` 조회수 0`;
                                }
                              })}
                            </span> */}
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
            totalItemsCount={props.length}
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
      </>
    );
  }
}
