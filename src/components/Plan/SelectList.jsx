import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

export default function SelectList({productItems, planItems, setPlanItems}) {
  
  // const [productItems, setProductItems] = useState([]); //받아온데이터 담기
  // let [itemData] = productItems
  // console.log(productItems);

  // 여행계획 컴포넌트에 아이템 추가 (근데 공통으로 됨..)
  const handleAddItem = (idx) => {
      const currentItem = planItems[idx];
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
    const newPlanitems = [...planItems, {...currentItem}];
    setPlanItems(newPlanitems);
    }

  if(productItems.length > 0) {
    productItems.map(({firstimage, title, contentid}, idx) => {
    return (
      <Card 
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
    </Card>
    )
  })
}
}