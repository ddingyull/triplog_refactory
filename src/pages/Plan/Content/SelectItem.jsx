import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

export default function SelectItem() {
  // 여행계획 컴포넌트에 아이템 추가
  const handleAddItem = (idx) => {
    const currentItem = planItems[idx];
    const newPlanitems = [...planItems, { ...currentItem }];
    setPlanItems(newPlanitems);

    let copy = [
      ...list,
      {
        title: a.title,
        mapx: parseFloat(a.mapx),
        mapy: parseFloat(a.mapy),
      },
    ];
    setList(copy);
  };

  {
    /* 여행지 검색 기능 */
  }
  <Row className="m-auto py-4">
    <form action="">
      <InputText type="text" placeholder="입력" ref={inputRef} />
      <button
        type="button"
        onClick={() => {
          const text = inputRef.current.value;
          console.log(text);
          axios
            .get(
              `https://apis.data.go.kr/B551011/KorService/searchKeyword?serviceKey=rfaoGpiapHFqOcUT6bqfERRxy1WVxzOdOpEC3ChyAFPEfONdSMdRVNETTJKRhqTbPuZ2krpG2mQJMXDbyG74RA%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=TripLog&_type=json&listYN=Y&arrange=B&areaCode=39&keyword=${text}`
            )
            .then((결과) => {
              console.log(search);
              // 재 검색 마다 search 값을 삭제 시켜줌
              search.splice(0, search.length);
              let copy = [...search, ...결과.data.response.body.items.item];
              setSearch(copy);
            })
            .catch(() => {
              console.log('실패');
            });
        }}
      >
        검색
      </button>
    </form>

    <div>
      {productItems.length > 0
        ? // search의 map
          search.map(function (a, i) {
            return (
              <>
                <Card
                  className="d-inline-block m-auto"
                  style={{ width: '9rem', border: 'none' }}
                  data-productid={contentid}
                  onClick={() => {
                    handleAddItem(idx);
                  }}
                  key={i}
                >
                  <Card.Img variant="top" src={firstimage} />
                  <Card.Body>
                    <Card.Title
                      style={{ fontSize: '12px' }}
                      className="m-0 p-0 text-center"
                    >
                      {title}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </>
            );
          })
        : null}
    </div>
  </Row>;
}
