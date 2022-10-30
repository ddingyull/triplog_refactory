import { useState, useEffect } from 'react';
import {Container, Row, Col, Card , Image, } from 'react-bootstrap';
import Pagination from 'react-js-pagination';
import '../styles/Paging.css';
import axios from 'axios';
import UserProfile from './UserProfile';
import { useParams } from 'react-router';


export default function Review() {
  const params = useParams();
  const contentId = params.contentId;

  const [reviewData, setReviewData] = useState([]);

  /* pagingnation */
  // 첫 번째 페이지
  const [page, setPage] = useState(1);
  // 한 페이지에 보여줄 총 갯수
  const [pagePost] = useState(12);
  
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
                  <UserProfile/>
                  <Card.Body>
                    <Card.Text>
                        {reviewData[i].review[0].content}
                        </Card.Text>
                      <Col>
                        <Image src="/images/imgSample.jpg" style={{width:"100px" , height:"100px"}} className="mt-3 mx-1"/>
                      </Col>
                      <p className='text-end mx-4'>리뷰 작성일: {reviewData[i].dateFull.slice(0,10)}</p>
                  </Card.Body>
                </Card>
              </Col>
            )
          })
          : <p>등록된 리뷰가 없습니다.</p>
        }
      </Row>

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
