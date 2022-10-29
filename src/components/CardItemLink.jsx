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
export default function CardItemLink({width, height, src, title}){   
  console.log(src); 
  return(
    <CardItem width={width} height={height} className="m-3 d-inline-block border">
      {/* <Card.Img variant="top" src="/images/map_ex.png" /> */}
      <CardImg variant="top" src={src}/>
      <Card.Body>
      <Card.Title className='fs-6 '>{title}</Card.Title>
      {/* <Button variant="success">Go somewhere</Button> */}
      </Card.Body>
    </CardItem>
  )
}

