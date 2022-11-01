/* global kakao */
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import SelectList from '../../components/Plan/SelectList';
import { useSelector } from 'react-redux';

export default function KakaoMap(props) {
  const state = useSelector((state) => state.triplog);

  // Kakao Map 사용을 위한 useEffect
  useEffect(() => {
    const container = document.getElementById(`map${props.idx}`);
    // 기본이 되는 지도 중앙 위치
    const options = {
      center: new kakao.maps.LatLng(33.368, 126.54),
      // 지도 레벨(높을 수록 멀어진다)
      level: 11,
    };
    // 지도 생성을 위한 메소드
    const map = new kakao.maps.Map(container, options);

    // 지도가 2개 이상 호출되면 layout을 새롭게 잡아줘야함(카카오 권장 사항)
    map.relayout();

    // 지도 드래그 금지
    // map.setDraggable(false);
    // 지도 줌인 금지
    // map.setZoomable(false);

    // tetz 이제 redux 에서만 값을 받아서 지도를 그려줌 + idx 를 통해 각각 날짜에 맞는 데이터를 지도에 뿌려준다!
    // 추가 및 삭제 시에도 redux 값에 따라 해당 변화 값을 자동으로 지도에 적용!
    // 선택한 list에 대한 forEach
    if (state.planItems[props.idx]) {
      state.planItems[props.idx].forEach((el, num, arr) => {
        // 지도에 생성할 마커
        new kakao.maps.Marker({
          //마커가 표시 될 지도
          map: map,
          //마커가 표시 될 위치
          position: new kakao.maps.LatLng(el.mapy, el.mapx),
        });
        // path 를 주기 위해서 리스트에 저장 된 공간의 좌표를 pathArr 라는 배열에 푸쉬
        let pathArr = [];
        for (let i = 0; i < state.planItems[props.idx].length; i++) {
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
  }, [state.planItems[props.idx]]);

  return (
    <>
      <KakaoDiv id={`map${props.idx}`}></KakaoDiv>

      {/* <FlexDiv>      
          <div>
            {
              tetz 각각의 카카오 지도는 서로 다른 id 를 가져야 하므로 props 로 전달 받은 idx 값을 부여
              <KakaoDiv id={`map${props.idx}`}></KakaoDiv>
              search의 map
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
        </FlexDiv> */}
    </>
  );
}

const FlexDiv = styled.div`
  display: flex;
`;
const KakaoDiv = styled.div`
  /* width: 25rem; */
  height: 20rem;
`;
const InputText = styled.input`
  width: 200px;
  height: 50px;
`;
