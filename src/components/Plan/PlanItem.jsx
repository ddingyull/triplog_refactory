import { Card, Stack, Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

import { useEffect, useState } from 'react';
import axios from 'axios';

import { useDispatch, useSelector } from 'react-redux';
import { addPlanDate, deletePlanItem } from '../../store/modules/triplog';

const PlanItem = ({onClick, productItems, idx}) => {

    // 리듀서의  useSelector, dispatch
  let state = useSelector((state) => state.triplog) 
  let dispatch = useDispatch()

  const [ planItems, setPlanItems ] = useState(state.planItems)
  
  if(state.planItems.length > 0) {    
    return state.planItems[idx].map(({id, firstimage, title, src, addr1, sigungucode }, i) => (
    <Stack 
      className="d-flex m-3 shadow-sm" 
      direction="horizontal" 
      gap={3} 
      style={{height:"4rem"}}>
    {/* <Badge className='bg-success roundedCircle text-center' style={{width:"1.4rem", height:"1.4rem"}}>
      {sigungucode}
    </Badge> */}
    {/* <img src={firstimage} style={{width:'2.5rem', height:'2.5rem', borderRadius:'50%'}}></img> */}
  
    <Stack className='col-9 d-flex flex-column my-auto'>
      {/* <Title className='m-1 fs-5'>{title}</Title> */}
      <Title className='m-1 fs-6'>{title}</Title>
      <Title className='m-1' style={{fontSize:'12px'}}>{addr1}</Title>
    </Stack>

    <Stack>
    <button 
      className='btn btn-light'
      onClick={() => {
        dispatch(deletePlanItem({title, idx}));
        }}>X</button>
    </Stack>
  </Stack>
  )) 
}}



export default PlanItem;

const Title = styled.p`
  font: 2rem/1 'Inter'
`