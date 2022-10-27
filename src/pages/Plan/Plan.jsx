import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
// import getProductData from './api/getProductData';
import PlanList from '../../components/Plan/PlanList';
import SelectList from '../../components/Plan/SelectList';

import styled from 'styled-components';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import Welcome from './Welcome';
import KakaoMap from './KakaoMap';


export default function Plan() {

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

  // data 받아오기
  useEffect (() => {
    const productItems = axios.get('https://apis.data.go.kr/B551011/KorService/areaBasedList?serviceKey=f0bpiY05PaHzNADbGBganvUsTEo1lHKOPHlz5P4%2B6BY8%2F3ou1vetQhG6%2FCuL%2FORR7sE5e5jIHeUr2fFiKHHHUA%3D%3D&numOfRows=12&pageNo=1&MobileOS=ETC&MobileApp=TripLog&_type=json&listYN=Y&arrange=B&contentTypeId=12&areaCode=1')
    .then((response) => {
      setProductItems(response.data.response.body.items.item);           
    })
  }, []);

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
        <form action="">
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
          </form>
        </Row>

        {/* 여행지 리스트 보여주기 */}
          
          <Row className="m-3 overflow-scroll" style={{height:'20rem'}} gap={3}>
          { productItems.length > 0 ?
            <SelectList 
              productItems={productItems} 
              setPlanItems={setPlanItems}
              planItems={planItems}/>
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