import { useEffect, useState } from 'react';
import axios from 'axios';
import Pagination from "react-js-pagination";
import Item_Plan from './Item_Plan'
import Memo_Plan from './Memo_Plan'
import { Card, Col, Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function ItemList(){

    // 데이터를 요청한 페이지의 저장을 위한 State
    const [item, setItem] = useState([]);
    // 첫 번째 페이지
    const [page, setPage] = useState(1);
    // 한 페이지에 보여줄 총 갯수
    const [pagePost] = useState(12);
  
    // 데이터를 요청하는 useEffect
    useEffect(() => {
      const reqPost = async () => {
        const res = await axios.get('https://apis.data.go.kr/B551011/KorService/areaBasedList?serviceKey=rfaoGpiapHFqOcUT6bqfERRxy1WVxzOdOpEC3ChyAFPEfONdSMdRVNETTJKRhqTbPuZ2krpG2mQJMXDbyG74RA%3D%3D&numOfRows=58&pageNo=1&MobileOS=ETC&MobileApp=TripLog&_type=json&listYN=Y&arrange=B&contentTypeId=38&areaCode=39')
        setItem(res.data.response.body.items.item)
      };
      reqPost();
    }, [])
  
    // 페이지 이동 이벤트함수
    const handlePageChange = (page) => {
      setPage(page);
      console.log(page)
    };

  return(
      <Card className="m-3">
        <Row className='d-flex justify-content-center'>
          <Col md={4} className='d-flex m-3'>
            <p className='fw-6 fs-5 fw-bold me-2'>제주 여행 🍊</p>
          </Col>
          <Col md={{span: 4, offset: 2}} className='text-end d-block '>
            {/* <input></input> */}
          </Col>
        </Row>

        <Row className="m-3">
        </Row>

        {/* <Col className='col-sm-10 col-md-5'>
        {
          item.slice(
            pagePost*(page-1),
            pagePost*(page-1)+pagePost
          )
          .map(function (a, i) {
            return (
              <div key={a.contentid}>{a.title}</div>
            )
          })
        }
      </Col>

        <Col className='m-auto d-flex mt-2 mb-2 col-10'>
        <Pagination
        // * 필수 값
        // *활성 페이지
        activePage={page}
        // 페이지당 항목 수
        itemsCountPerPage={12}
        // 페이지 총 아이템수
        totalItemsCount={item.length}
        // 페이지 범위
        pageRangeDisplayed={5}
        // 이전 페이지 탐색 버튼의 텍스트
        prevPageText={"‹"}
        // 다음 페이지 탐색 버튼의 텍스트
        nextPageText={"›"}
        // 페이지 변경 핸들러 pageNumber를 인수로 수신
        onChange={handlePageChange}
      />
        </Col> */}
      </Card>
  )
}

