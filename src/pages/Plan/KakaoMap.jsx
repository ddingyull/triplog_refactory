/* global kakao */
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import SelectList from '../../components/Plan/SelectList'

export default function KakaoMap() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.triplog);
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

  return (
    <>
      <KakaoDiv id='map'></KakaoDiv>
      
      <FlexDiv>      
          <div>
            {
              // search의 map
              search.map(function (a, i) {
                return (
                  <>
                    <p onClick={() => {
                      let copy = [...list, { title: a.title, mapx: parseFloat(a.mapx), mapy: parseFloat(a.mapy) }];
                      setList(copy);
                    }} key={i}>{a.title}</p>
                  </>
                )
              })
            }
          </div>
        </FlexDiv>
    </>
  )
}

const FlexDiv = styled.div`
  display: flex;
`
const KakaoDiv = styled.div`
  /* width: 25rem; */
  height: 20rem;
`
const InputText = styled.input`
  width: 200px;
  height: 50px;
`