// import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import axios from 'axios';


//style-components
const CardItem = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: .65em;
`
const CardImg = styled.img`
  
`

export default function CardItemLink({srcImg, width, height}){
  return(
    <CardItem width={width} height={height} className="m-3 d-inline-block border">
      {/* <Card.Img variant="top" src="/images/map_ex.png" /> */}
      <CardImg variant="top" srcImg={srcImg} style={{Maxwidth:"900px"}}/>
      <Card.Body>
      {/* <Card.Title>Card Title</Card.Title> */}
      {/* <Button variant="success">Go somewhere</Button> */}
      </Card.Body>
    </CardItem>
  )
}

