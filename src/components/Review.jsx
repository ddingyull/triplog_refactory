import { useState, useEffect } from 'react';
import {Container, Row, Col, Card , Image, Button } from 'react-bootstrap';
import Pagination from 'react-js-pagination';
import '../styles/Paging.css';
import axios from 'axios';
import UserProfile from './UserProfile';
import { useParams } from 'react-router';
import { FaStar } from 'react-icons/fa';
import styled from "styled-components";
import ReviewEmend from "../pages/Detail/contents/Review/ReviewEmend";
import ReviewDelete from '../pages/Detail/contents/Review/ReviewDelete';

export default function Review() {
  const params = useParams();
  const contentId = params.contentId;
  const [reviewData, setReviewData] = useState([]);

  const callApi = async () => {
    axios
      .get(`http://localhost:4000/review/${contentId}`)
      .then((res) => {
        let copy = [...res.data];
        setReviewData(copy);
        console.log(reviewData);
      })
      .catch(() => console.log("실패함"));
  };

  useEffect(() => {
    callApi();
  }, []);

 /* pagingnation */
  // 첫 번째 페이지
  const [page, setPage] = useState(1);
  // 한 페이지에 보여줄 총 갯수
  const [pagePost] = useState(12);
  // 페이지 이동 이벤트함수
  const handlePageChange = (page) => {
    setPage(page);
    console.log(page)
  };

  return (
    <>
    <Container>
      <Row xs={1} md={1} lg={2} className="g-4 mx-3 mb-4">
        {reviewData.length > 0 ? 
          reviewData.slice(
            pagePost*(page-1),
            pagePost*(page-1)+pagePost
          )
          .map(function (a, i){
            return (
              <Col>
                <Card>
                  <Row className="d-flex justify-content-end">
                    <Col className=" text-end mt-3 mx-2">
                      <Button variant="success" className="reviewEmendBtn" 
                            onClick={() => {
                              // const content = contentRef.current.value
                              // axios
                              //   .get(`http://localhost:4000/review/emend/${ㅁ._id}`)
                              //   .then((res) => {
                              //       console.log('성공')
                              //       setEmendContent(res.data.review[0].content)
                              //       setEmendId(res.data._id)
                              //     })
                              //   .catch(() => {
                              //     console.log("실패");
                              //   });
                            }}
                          >수정</Button>
                          <ReviewDelete/>
                    </Col>
                  </Row>
                  
                  <UserProfile/>
                  {/* 별점 */}
                  <div className="d-flex align-items-center justify-content-start">
                  <RaingStar className="text-center mx-2 col-6">
                  {reviewData[i].review[0].star === 5? 
                    <>
                      <FaStar size="20" className="yellowStar"/>
                      <FaStar size="20" className="yellowStar"/>
                      <FaStar size="20" className="yellowStar"/>
                      <FaStar size="20" className="yellowStar"/>
                      <FaStar size="20" className="yellowStar"/>
                    </> : reviewData[i].review[0].star === 4? 
                    <>
                      <FaStar size="20" className="yellowStar"/>
                      <FaStar size="20" className="yellowStar"/>
                      <FaStar size="20" className="yellowStar"/>
                      <FaStar size="20" className="yellowStar"/>
                      <FaStar size="20" className="grayStar"/>
                    </> : reviewData[i].review[0].star === 3? 
                    <>
                      <FaStar size="20" className="yellowStar"/>
                      <FaStar size="20" className="yellowStar"/>
                      <FaStar size="20" className="grayStar"/>
                      <FaStar size="20" className="grayStar"/>
                      <FaStar size="20" className="grayStar"/>
                    </> : reviewData[i].review[0].star === 2? 
                                        <>
                      <FaStar size="20" className="yellowStar"/>
                      <FaStar size="20" className="yellowStar"/>
                      <FaStar size="20" className="grayStar"/>
                      <FaStar size="20" className="grayStar"/>
                      <FaStar size="20" className="grayStar"/>
                    </> : reviewData[i].review[0].star === 1? 
                    <>
                      <FaStar size="20" className="yellowStar"/>
                      <FaStar size="20" className="grayStar"/>
                      <FaStar size="20" className="grayStar"/>
                      <FaStar size="20" className="grayStar"/>
                      <FaStar size="20" className="grayStar"/>
                    </> : 
                    <>
                      <FaStar size="20" className="grayStar"/>
                      <FaStar size="20" className="grayStar"/>
                      <FaStar size="20" className="grayStar"/>
                      <FaStar size="20" className="grayStar"/>
                      <FaStar size="20" className="grayStar"/>
                    </>
                  }
                  </RaingStar>
                  <p className='text-end mx-2 text-muted col-5 '> {reviewData[i].dateFull.slice(0,10)}</p>
                  </div>
                  {/* 리뷰 내용 */}
                  <Card.Body>
                    <Card.Text>
                        {reviewData[i].review[0].content}
                        </Card.Text>
                      <Col>
                        <Image src="/images/imgSample.jpg" style={{width:"100px" , height:"100px"}} className="mt-3 mx-1"/>
                      </Col>
                      <Row className="d-flex justify-content-end">
                        <Col className=" text-end">
                          <ReviewEmend/>
                        </Col>
                      </Row>
                  </Card.Body>
                </Card>
              </Col>
            )
          })
          : <p>등록된 리뷰가 없습니다.</p>
        }
      </Row>

      {/* 페이징네이션 */}
      <Row className="d-flex justify-content-center col-2 m-auto mt-4 mb-4" lg={2}>
        <Pagination
          // * 필수 값
          // *활성 페이지
          activePage={page}
          // 페이지당 항목 수
          itemsCountPerPage={12}
          // 페이지 총 아이템수
          totalItemsCount={reviewData.length}
          // 페이지 범위
          pageRangeDisplayed={5}
          // 이전 페이지 탐색 버튼의 텍스트
          prevPageText={"<"}
          // 다음 페이지 탐색 버튼의 텍스트
          nextPageText={">"}
          // 페이지 변경 핸들러 pageNumber를 인수로 수신
          onChange={handlePageChange}
        />
      </Row>
      
    </Container>
    </>
  )
}

const RaingStar = styled.p`
  .yellowStar {
    color: #fcc419;
  }
  .grayStar{
    color: gray;
  }
`