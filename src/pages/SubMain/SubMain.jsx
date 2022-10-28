import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import '../../styles/globalStyle'
import CalendarMain from './CalendarMain'
import Items from './Items'

import { useParams } from "react-router-dom";


export default function SubMain({productItems, width, height, planDate}) {
  const params = useParams();
  const areaCode = params.areaCode;

  const [productItem, setProductItem] = useState([]); //받아온데이터 담기

  // data 받아오기
  useEffect (() => {
    const productItem = axios.get(`https://apis.data.go.kr/B551011/KorService/areaBasedList?serviceKey=rfaoGpiapHFqOcUT6bqfERRxy1WVxzOdOpEC3ChyAFPEfONdSMdRVNETTJKRhqTbPuZ2krpG2mQJMXDbyG74RA%3D%3D&numOfRows=498&pageNo=1&MobileOS=ETC&MobileApp=TripLog&_type=json&listYN=Y&arrange=B&contentTypeId=12&areaCode=${areaCode}`)
    .then((response) => {
      setProductItem(response.data.response.body.items.item);           
    })
  }, []);
  return (
    <>
      <Nav/>
        <CalendarMain text="Always 제주 With TripLog" subText="온전히 내 취향대로, 나만의 감성대로" planDate={planDate}/>
        <Items width='15rem' height='15rem' text="✨ 트립로그 Pick! 이번주 인기 숙소" subText="브이로그 감성 낭낭한 숙소 찾기"/>
        <Items width='30rem' height='15rem' text="🗂 여행 전 필수 준비항목" subText="트립로그가 챙겨주는 이번 여행!"/>
        <Items width='18rem' text="🌊 부산에가면 꼭 가야할 곳은?" subText="겨울에 가면 더 좋은 부산 여행지 추천"/>
      <Footer/>
    </>
  );
}
