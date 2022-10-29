import { useState, useEffect } from 'react';
import {Container, Row, Col, Card, Tabs, Tab, Button} from 'react-bootstrap';
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
  
  /* tourAPI */
  const callApi = async () => {
    axios.get(`https://apis.data.go.kr/B551011/KorService/areaBasedList?serviceKey=rfaoGpiapHFqOcUT6bqfERRxy1WVxzOdOpEC3ChyAFPEfONdSMdRVNETTJKRhqTbPuZ2krpG2mQJMXDbyG74RA%3D%3D&numOfRows=498&pageNo=1&MobileOS=ETC&MobileApp=TripLog&_type=json&listYN=Y&arrange=B&contentTypeId=12&areaCode=${areaCode}`)
    .then(response => {
      setTourData(response.data.response.body.items.item);
    })
  };

  useEffect(() => {
    callApi();
  }, []);

  const [tourData, setTourData] = useState([]);

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
    <Nav/>
    <Container>

      {/* ListsTAB */}
      <Row className="d-flex col-8 mx-auto text-center">
        <Col  onClick={()=> {
            axios.get(`https://apis.data.go.kr/B551011/KorService/areaBasedList?serviceKey=rfaoGpiapHFqOcUT6bqfERRxy1WVxzOdOpEC3ChyAFPEfONdSMdRVNETTJKRhqTbPuZ2krpG2mQJMXDbyG74RA%3D%3D&numOfRows=498&pageNo=1&MobileOS=ETC&MobileApp=TripLog&_type=json&listYN=Y&arrange=B&contentTypeId=12&areaCode=${areaCode}`)
            .then(response => {
              setTourData(response.data.response.body.items.item);
            })
          }} style={{cursor: 'pointer'}}>
          <p className='fs-2 mb-1'>🌳</p>
          <p className='fw-bold'>관광</p>
        </Col>
        <Col  onClick={()=> {
            axios.get(`https://apis.data.go.kr/B551011/KorService/areaBasedList?serviceKey=rfaoGpiapHFqOcUT6bqfERRxy1WVxzOdOpEC3ChyAFPEfONdSMdRVNETTJKRhqTbPuZ2krpG2mQJMXDbyG74RA%3D%3D&numOfRows=498&pageNo=1&MobileOS=ETC&MobileApp=TripLog&_type=json&listYN=Y&arrange=B&contentTypeId=14&areaCode=${areaCode}`)
            .then(response => {
              setTourData(response.data.response.body.items.item);
            })
          }} style={{cursor: 'pointer'}}>
          <p className='fs-2 mb-1'>⛩ </p>
          <p className='fw-bold'>문화</p>
        </Col>
        <Col  onClick={()=> {
            axios.get(`https://apis.data.go.kr/B551011/KorService/areaBasedList?serviceKey=rfaoGpiapHFqOcUT6bqfERRxy1WVxzOdOpEC3ChyAFPEfONdSMdRVNETTJKRhqTbPuZ2krpG2mQJMXDbyG74RA%3D%3D&numOfRows=498&pageNo=1&MobileOS=ETC&MobileApp=TripLog&_type=json&listYN=Y&arrange=B&contentTypeId=32&areaCode=${areaCode}`)
            .then(response => {
              setTourData(response.data.response.body.items.item);
            })
          }} style={{cursor: 'pointer'}}>
          <p className='fs-2 mb-1'>🏠</p>
          <p className='fw-bold'>숙소</p>
        </Col>
        <Col  onClick={()=> {
            axios.get(`https://apis.data.go.kr/B551011/KorService/areaBasedList?serviceKey=rfaoGpiapHFqOcUT6bqfERRxy1WVxzOdOpEC3ChyAFPEfONdSMdRVNETTJKRhqTbPuZ2krpG2mQJMXDbyG74RA%3D%3D&numOfRows=498&pageNo=1&MobileOS=ETC&MobileApp=TripLog&_type=json&listYN=Y&arrange=B&contentTypeId=38&areaCode=${areaCode}`)
            .then(response => {
              setTourData(response.data.response.body.items.item);
            })
          }} style={{cursor: 'pointer'}}>
          <p className='fs-2 mb-1'>🛍</p>
          <p className='fw-bold'>쇼핑</p>
        </Col>
      </Row>
      {/* Lists CARD */}
      <Row xs={1} md={2} lg={3} className="g-4">
          { tourData.length > 0 ? 
            tourData.slice(
              pagePost*(page-1),
              pagePost*(page-1)+pagePost
            )
            .map(function (tourData, i) {
              return (
                <Col>
                  <Card onClick={() => {
                    navigate(`/detail/${tourData.contentid}`);
                  }} >
                    <Card.Img variant="top" src={tourData.firstimage}/>
                    <Card.Body>
                      <Card.Title>{tourData.title}</Card.Title>
                      <Card.Text className="text-muted">{tourData.addr1}</Card.Text>
                      <Card.Text className="text-muted">⭐⭐⭐⭐⭐  <span>30</span></Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              )
            })
            : null
          }
            
      </Row>
      
      {/* Pagination */}
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
    <Footer/>
    </>
  )
}