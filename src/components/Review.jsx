import { useState, useEffect } from 'react';
import {Container, Row, Col, Card , Image, } from 'react-bootstrap';
import Pagination from 'react-js-pagination';
import '../pages/Lists/contents/Paging.css';
import axios from 'axios';
import UserProfile from './UserProfile';



export default function Review() {

  const [tourData, setTourData] = useState([]);
  
  /* pagingnation */
  // 첫 번째 페이지
  const [page, setPage] = useState(1);
  // 한 페이지에 보여줄 총 갯수
  const [pagePost] = useState(12);
  
  useEffect (() => {
    axios.get(`https://apis.data.go.kr/B551011/KorService/areaBasedList?serviceKey=rfaoGpiapHFqOcUT6bqfERRxy1WVxzOdOpEC3ChyAFPEfONdSMdRVNETTJKRhqTbPuZ2krpG2mQJMXDbyG74RA%3D%3D&numOfRows=46&pageNo=1&MobileOS=ETC&MobileApp=TripLog&_type=json&listYN=Y&arrange=B&contentTypeId=32&areaCode=32&sigunguCode=1`)
    .then(response => {
      setTourData(response.data.response.body.items.item);
    })
  }, []);


  
  // 데이터를 요청하는 useEffect
  // useEffect(() => {
  //   const reqPost = async () => {
  //     const res = await axios.get('https://apis.data.go.kr/B551011/KorService/areaBasedList?serviceKey=rfaoGpiapHFqOcUT6bqfERRxy1WVxzOdOpEC3ChyAFPEfONdSMdRVNETTJKRhqTbPuZ2krpG2mQJMXDbyG74RA%3D%3D&numOfRows=58&pageNo=1&MobileOS=ETC&MobileApp=TripLog&_type=json&listYN=Y&arrange=B&contentTypeId=38&areaCode=39')
  //     // setItem(res.data.response.body.items.item)

  //   };
  //   reqPost();
  // }, [])

  // 페이지 이동 이벤트함수
  const handlePageChange = (page) => {
    setPage(page);
    console.log(page)
  };
  
  return (
    <>
    <Container>
      <Row xs={1} md={1} lg={2} className="g-4 mx-3 mb-4">
        {tourData.length > 0 ? 
          tourData.slice(
            pagePost*(page-1),
            pagePost*(page-1)+pagePost
          )
          .map(function (tourData, i){
            return (
              <Col>
                <Card>
                  <UserProfile/>
                  <Card.Body>
                    <Card.Text>
                        {tourData.addr1}
                        </Card.Text>
                      <Col>
                        <Image src={tourData.firstimage} style={{width:"100px" , height:"100px"}} className="mt-3 mx-1"/>
                        <Image src={tourData.firstimage2} style={{width:"100px" , height:"100px" }} className="mt-3 mx-1"/>
                      </Col>
                  </Card.Body>
                </Card>
              </Col>
            )
          })
          : null
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
          totalItemsCount={tourData.length}
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
