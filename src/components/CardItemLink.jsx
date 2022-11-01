// import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import axios from 'axios';


//style-components
const CardItem = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  /* border-radius: 10px; */
  border: none;
`
const CardImg = styled.img`
  width: 100%;
  height: 100%;

`
// props 명만 변경
export default function CardItemLink({width, height, src, title, onClick}){   
  return(
    <CardItem 
      width={width} 
      height={height} 
      onClick={onClick}
      className="m-3 d-inline-block border rounded">
      <Card.Title className='fs-6 p-2 text-center'>{title}</Card.Title>
      <CardImg variant="top" src={src} className='rounded'/>
      <Card.Body>
      </Card.Body>
    </CardItem>
  )
}

