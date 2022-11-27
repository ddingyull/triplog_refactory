// import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import axios from 'axios';

//style-components
const CardItem = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: none;
  @media screen and (max-width: 1200px) {
    width: 30%;
    height: 70%;
  }
  @media screen and (max-width: 992px) {
    width: 40%;
    height: 70%;
  }
  @media screen and (max-width: 768px) {
    width: 40%;
    height: 70%;
  }
  @media screen and (max-width: 576px) {
    margin-right: 2%;
  }
`;
const CardImg = styled.img`
  width: 100%;
  height: 100%;
`;
const CardTitle = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
`;
// props 명만 변경
export default function CardItemLink({ width, height, src, title, onClick }) {
  return (
    <CardItem
      width={width}
      height={height}
      onClick={onClick}
      className="m-lg-3 m-md-2 d-inline-block border rounded shadow-sm"
    >
      {/* <Card.Body> */}
      <CardTitle className="fs-6 p-lg-2 p-md-1 text-center">{title}</CardTitle>
      <CardImg variant="top" src={src} />
      {/* </Card.Body> */}
    </CardItem>
  );
}
