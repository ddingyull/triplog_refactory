import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux'
import { addPlanItem } from '../../store/modules/store'

const SelectList = ({productItems, planItems, setPlanItems}) => {

  // 리듀서의  useSelector, dispatch
  let state = useSelector((state) => state)  //PlanItem
  let dispatch = useDispatch()

  const [productItem, setProductItem] = useState([]); //받아온데이터 담기
  let [itemData] = productItems
  
  // 여행계획 컴포넌트에 아이템 추가 (근데 공통으로 됨..)
  const handleAddItem = (idx) => {
      const currentItem = productItems[idx];
      const newPlanitems = [...planItems, {...currentItem}];
      setPlanItems(newPlanitems);
    }
    
  // 각각의 여행 컴포넌트에 아이템 추가 (리덕스 사용)
  const handleAddItemRedux = ({firstimage, title, contentid}, idx) => {
    dispatch(addPlanItem({id: {contentid}, title : {title}, img : {firstimage} }))
  }

  const addPlanItem = (e) => {
    // console.log(e.target.dataset.productid);
    const clickItem = itemData.find((item) => item.contentid === e.target.dataset.productid);
  };

  if(productItems.length > 0) {
    return productItems.map(({firstimage, title, contentid}, idx) => {
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