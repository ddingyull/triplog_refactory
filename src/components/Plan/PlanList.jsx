import { useEffect, useState, useRef }from 'react';
import { Container, Row, Col, Card, Button, Stack} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import KakaoMap from '../../pages/Plan/KakaoMap';
import PlanItem from './PlanItem'
import setDateIdx from '../../store/modules/triplog'
import { useDispatch, useSelector } from 'react-redux';
import { addPlanItems } from '../../store/modules/triplog';
import axios from 'axios';
const {kakao} = window;


const PlanList = ({ productItems, planItems, setPlanItems, onClick}) => {
  // let [itemData] = productItems

  // 리듀서의  useSelector, dispatch
  let state = useSelector((state) => state.triplog) 
  let dispatch = useDispatch();

    // * 지도
  // 검색한 여행지 저장을 위한 State
  const [search, setSearch] = useState([]);

  // input에 입력한 값
  const inputRef = useRef();
  
  // 클릭 한 여행지 저장을 위한 State
  const [list, setList] = useState([]);

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
  if (state.planItems[state.planDateIdx]) {
    state.planItems[state.planDateIdx].forEach((el, num, arr) => {
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
      polyline.setMap(map);
      // 선의 배열
      polyline.getPath();
      // 선의 길의 계산
      polyline.getLength();
    });
  }
  // list가 변경 될 때 마다 실행
}, [state])
  

  if(state.isLogin){
  return (state.planDate.period).map(({ id, firstimage, title, src, addr1, sigungucode }, idx) => (
    <Container 
      sm={1} md={1} lg={2} xl={2} 
      className='overflow-auto mt-5'
      style={{height:'20%', width:'350px'}}
      key={idx}>
                
    <Card className="col-md-12">
    {/* 카카오 지도  */}
    <KakaoMap className='col-6 m-auto'/>
    <Row className='d-flex justify-content-center'>
      <Col md={4} className='d-flex m-3'>
        <p className='fw-6 fw-bold me-2'>day {idx+1}</p>
        <p className='fw-6'>{idx+1}일차</p>
      </Col>
      <Col md={{span: 4, offset: 2}} className='text-end d-block '>
        <a href="#" className="py-5" style={{width:"50%"}}>✔️</a>
      </Col>
    </Row>    

    {/* 여행 계획 1개씩 추가되는 부분 */}
    <Row className="m-3">
    <PlanItem 
      productItems={productItems} 
      setPlanItems={setPlanItems}
      planItems={planItems}
      />
    </Row>

    {/* 장소 추가, 메모 추가 */}
    <Col className='m-auto d-flex mt-2 mb-2 col-10'>
      <Button 
        onClick={() => {
          onClick();
          dispatch(setDateIdx(idx));
        }}
        className="btn btn-light mx-1" 
        style={{width:"70%"}}>          
        장소 추가
      </Button>

      <Button 
        className="btn btn-light mx-1" 
        style={{width:"70%"}}>
        메모 추가
      </Button>
    </Col>
  </Card>
  </Container>
  )) 
}}



export default PlanList;

const Title = styled.p`
  font: 2rem/1 'Inter'
`
const SelectBox = styled.div`
  display: flex;

  &:hover{
    border-radius: 10px;
    background-color: rgba(3, 102, 53, .3);
    cursor: pointer;
  }
`