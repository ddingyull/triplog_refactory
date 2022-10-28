import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import PlanList from '../../components/Plan/PlanList';
import SelectList from '../../components/Plan/SelectList';
import styled from 'styled-components';

import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import Welcome from './Welcome';
import KakaoMap from './KakaoMap';
const {kakao} = window;


export default function Plan( {}) {
  const params = useParams();
  const areaCode = params.areaCode;

  // data 받아오기
  useEffect (() => {
    axios.get(`https://apis.data.go.kr/B551011/KorService/areaBasedList?serviceKey=rfaoGpiapHFqOcUT6bqfERRxy1WVxzOdOpEC3ChyAFPEfONdSMdRVNETTJKRhqTbPuZ2krpG2mQJMXDbyG74RA%3D%3D&numOfRows=498&pageNo=1&MobileOS=ETC&MobileApp=TripLog&_type=json&listYN=Y&arrange=B&contentTypeId=12&areaCode=${areaCode}`)
    .then((response) => {
      setProductItems(response.data.response.body.items.item);           
    })
  }, []);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    // * 지도
  // 검색한 여행지 저장을 위한 State
  const [search, setSearch] = useState([]);

  // input에 입력한 값
  const inputRef = useRef();
  
  // 클릭 한 여행지 저장을 위한 State
  const [list, setList] = useState([]);

  // Kakao Map 사용을 위한 useEffect
  useEffect(() => {
    const container = document.getElementById('map');
    // 기본이 되는 지도 중앙 위치
    const options = {
      center: new kakao.maps.LatLng(33.368, 126.54),
      // 지도 레벨(높을 수록 멀어진다)
      level: 11
    };
    // 지도 생성을 위한 메소드
    const map = new kakao.maps.Map(container, options);
    
    // 지도 드래그 금지
    map.setDraggable(false);
    // 지도 줌인 금지
    map.setZoomable(false);

    // 선택한 list에 대한 forEach
    list.forEach((el, num, arr) => {
      // 지도에 생성할 마커
      new kakao.maps.Marker({
        //마커가 표시 될 지도
        map: map,
        //마커가 표시 될 위치
        position: new kakao.maps.LatLng(el.mapy, el.mapx),
      });
      // path 를 주기 위해서 리스트에 저장 된 공간의 좌표를 pathArr 라는 배열에 푸쉬
      let pathArr = [];
      for (let i = 0; i < list.length; i++) {
        pathArr.push(new kakao.maps.LatLng(arr[i].mapy, arr[i].mapx));
      }
      // 선을 긋기 위한 메소드
      const polyline = new kakao.maps.Polyline({
        // 지도생성
        map: map,
        // path의 배열
        path: pathArr,
        // 선을 굵기
        strokeWeight: 3,
        // 선의 색
        strokeColor: '#34A853',
        // 선의 불투명도
        strokeOpacity: 1,
        // 선의 스타일
        strokeStyle: 'solid',
      });

      // 선 생성
      polyline.setMap(map)
      // 선의 배열
      polyline.getPath();
      // 선의 길의 계산
      polyline.getLength();
    }); 
    // list가 변경 될 때 마다 실행
  }, [list])

  const [productItems, setProductItems] = useState([]); //받아온데이터 담기
  const [planItems, setPlanItems] = useState([]);
  const [isPlanOpen, setIsPlanOpen] = useState(false);
  let [itemData] = [productItems] 

  const saveToLocalStorage = () => {
      localStorage.setItem('planState', JSON.stringify(planItems));
  };

  const addPlanItem = (e) => {
    const clickItem = itemData.find((item) => item.sigungucode === e.target.dataset.productid);
    console.log(clickItem); 
    console.log(productItems);
    // const currentItem = productItems[idx];
    // const newPlanitem = [];
    // setPlanItems(clickItem);     
  }; 
    // if(!clickItem)

  return (
    <>
      <Nav/>
      <Welcome/>

      <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      size="lg"
    >
      <Modal.Header closeButton>
        <Modal.Title>제주 여행 🍊</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Card className="col-sm-10 col-md- overflow-auto m-auto" >
        <Row className='d-flex justify-content-center'>
          {/* <Col md={4} className='d-flex m-3 '>
            <p className='fw-6 fs-5 fw-bold me-2'>제주 여행 🍊</p>
          </Col> */}
          <Col md={{span: 4, offset: 2}} className='text-end d-block '>
          </Col>
        </Row>

        {/* 여행지 검색 기능 */}
        <Row className='m-auto py-4'>
      
            <InputText type="text" placeholder='입력' ref={inputRef}/>
            <button type='button' onClick={() => {
              // input에 입력한 값 useRef
              const text = (inputRef.current.value)
              console.log(text)
              // 데이터 요청
              axios.get(`https://apis.data.go.kr/B551011/KorService/searchKeyword?serviceKey=rfaoGpiapHFqOcUT6bqfERRxy1WVxzOdOpEC3ChyAFPEfONdSMdRVNETTJKRhqTbPuZ2krpG2mQJMXDbyG74RA%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=TripLog&_type=json&listYN=Y&arrange=B&areaCode=39&keyword=${text}`)
              .then((결과) => {
                console.log(search)
                // 재 검색 마다 search 값을 삭제 시켜줌
                search.splice(0, search.length)
                let copy = [...search, ...결과.data.response.body.items.item];
                setSearch(copy);
              })
              .catch(() => {
                console.log('실패')
              })
            }}>검색</button>

          <div>
            {
              //search의 map
              search.map(function (a, i) {
                return (
                  <>
                  {/* 검색결과나오는 UI컴포넌트 추가필요, 데이터 props받아야하나? */}
                  <Card 
                    className="d-inline-block m-auto"
                    style={{width:'9rem', border:'none'}}
                    // data-productid={contentid} 
                    onClick={() => {
                      let copy = [...list, {
                          title: a.title,
                          mapx: parseFloat(a.mapx),
                          mapy: parseFloat(a.mapy) 
                        }];
                      setList(copy);
                    }} 
                    key={i}
                    >
                  <Card.Img variant="top" src={a.firstimage}/>
                  <Card.Body>
                  <Card.Title 
                    style={{fontSize:'12px'}}
                    className='m-0 p-0 text-center'>{a.title}</Card.Title>
                  </Card.Body>
                </Card>                    
                  </>
                )
              })
            }
          </div>
        </Row>

        {/* 여행지 리스트 보여주기 */}
          
          <Row className="m-3 overflow-scroll" style={{height:'20rem'}} gap={3}>
          { productItems.length > 0 ?
            <SelectList 
              productItems={productItems} 
              setPlanItems={setPlanItems}
              planItems={planItems}
              search={search}
              setSearch={setSearch}
            />
              : <div>잠시만요!🏖</div> }
          </Row> 
        
      </Card>
      </Modal.Body>
      <Modal.Footer>
        <Button 
          variant="secondary" 
          onClick={handleClose}>
          닫기
        </Button>

        <Button 
          variant="success" 
          onClick={handleClose}
          >
            선택 완료
        </Button>
    
      </Modal.Footer>
    </Modal>

    {/* 여행계획 짜는 컴포넌트 */}
    <Container className='d-flex'>
      <PlanList 
      productItems={productItems} 
      setPlanItems={setPlanItems}
      planItems={planItems}
      onClick={handleShow}/>
      </Container>
  <Footer/>
    </>
  );
}

// style-components
const PlanCard = styled.div`
  font-family: 'Inter';
  flex-wrap: wrap;
`
const Title = styled.p`
  font: 2rem/1 'Inter'
`
const InputText = styled.input`
  width: 200px;
  height: 50px;
`