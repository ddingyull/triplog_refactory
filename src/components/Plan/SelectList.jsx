import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Modal, Stack, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';
import { addPlanItems } from '../../store/modules/triplog';

export default function SelectList({search, setSearch, productItems, planItems, setPlanItems}) {
  
    // 리듀서의  useSelector, dispatch
    let state = useSelector((state) => state.triplog); 
    let dispatch = useDispatch();


    const [clickItem, setClickItem] = useState({}); //받아온데이터 담기
    // let [itemData] = productItems


  // 여행계획 컴포넌트에 아이템 추가 (근데 공통으로 됨..)
  const handleAddItem = (idx) => {
  console.log(idx);
      const currentItem = search[idx];
      console.log(currentItem);
    //   const checkedIdx = planItems.findIndex(
    //         (item) => item.id === currentItem.id
    //     );
    //     if (checkedIdx === -1) {
    //       setPlanItems((prev) => {
    //             return [...prev, { ...currentItem, count: 1 }];
    //         });
    //     } else {
    //     }
    // };
    const newSearch = [...search, {...currentItem}];
    setSearch(newSearch);

    dispatch(
      addPlanItems([
        [{ 
          idx: 'e.target.idx',
          id: '' ,
          title: '',
          img: '',
        }]
      ]
      )
    );
    }

  if(productItems.length > 0) {
    productItems.map(({firstimage, title, contentid, addr1}, idx) => {
    return (
      <>
      {/* <Card 
        className="d-inline-block m-auto"
        style={{width:'9rem', border:'none'}}
        data-productid={contentid} 
        onClick={()=>{handleAddItem(idx)}}
        key={idx}>
      <Card.Img variant="top" src={firstimage}/>
      <Card.Body>
      <Card.Title 
        style={{fontSize:'12px'}}
        className='m-0 p-0 text-center'>{title}</Card.Title>
      </Card.Body>
    </Card> */}

    <Stack
      onClick={()=>{handleAddItem(idx)}} 
      data-productid={contentid}
      key={idx}
      className="m-3 shadow-sm" 
      direction="horizontal" 
      gap={3} 
      style={{height:"4rem"}}
      >
    <img src={firstimage} style={{width:'2.5rem', height:'2.5rem', borderRadius:'50%'}}></img>

    <Stack className='col-9 d-flex flex-column my-auto'>
      <p className='m-1 fs-5'>{title}</p>
      <p className='m-1' style={{fontSize:'12px'}}>{addr1}</p>
    </Stack>
    <Stack>
    <button 
      className='btn btn-light'
      onClick={() => {
        let copy = [...planItems]
        // 선택한 데이터를 삭제
        copy.splice(idx, 1)
        setPlanItems(copy)
        }}>X</button>
    </Stack>
    </Stack>
    </>
    )
  })
}
}


// const Title = styled.p`
//   font: 2rem/1 'Inter'
// `
const SelectBox = styled.div`
  display: flex;

  &:hover{
    background-color: #999;
    cursor: pointer;
  }
`