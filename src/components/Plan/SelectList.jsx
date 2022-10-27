import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';


const SelectList = ({productItems, planItems, setPlanItems}) => {

  const [productItem, setProductItem] = useState([]); //받아온데이터 담기
  let [itemData] = productItems
  
  // 장바구니에 아이템 추가
  const handleAddItem = (idx) => {
      const currentItem = productItems[idx];
      const newPlanitems = [...planItems, {...currentItem}];
      setPlanItems(newPlanitems);
      console.log(currentItem);
      console.log(newPlanitems);
    }

  const addPlanItem = (e) => {
    console.log(e.target.dataset.productid);
    const clickItem = itemData.find((item) => item.sigungucode === e.target.dataset.productid);
    console.log(clickItem);    
  };

  // console.log(itemData);

  if(productItems.length > 0) {
    return productItems.map(({firstimage, title, sigungucode}, idx) => {
    return (
      <Card 
        className="d-inline-block m-auto"
        style={{width:'9rem', border:'none'}}
        data-productid={sigungucode} 
        onClick={()=>{handleAddItem(idx)}} >
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


export default SelectList;

const Title = styled.p`
  font: 2rem/1 'Inter'
`
const FlexDiv = styled.div`
  display: flex;
`
const KakaoDiv = styled.div`
  width: 700px;
  height: 500px;
`
const InputText = styled.input`
  width: 200px;
  height: 50px;
`
const RowDiv = styled.div`
  border: 1px solid black;
  width: 300px;
`