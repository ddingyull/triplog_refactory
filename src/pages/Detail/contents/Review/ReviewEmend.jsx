import { useRef }  from 'react'
import { useParams } from 'react-router';
import {Container, Row, Col, Card , Button } from 'react-bootstrap';
import axios from 'axios';
import { useState } from 'react';



export default function ReviewEmend() {
  const params = useParams();
  const contentId = params.contentId;
  const [emendContent, setEmendContent] = useState([])
  const [emendId, setEmendId] = useState([])

  const contentRef = useRef();

  return (
    <>
      <Button variant="success" className="reviewEmendBtn" 
        onClick={() => {
          // const content = contentRef.current.value
          // axios
          //   .get(`http://localhost:4000/review/emend/${ㅁ._id}`)
          //   .then((res) => {
          //       console.log('성공')
          //       setEmendContent(res.data.review[0].content)
          //       setEmendId(res.data._id)
          //     })
          //   .catch(() => {
          //     console.log("실패");
          //   });
        }}
          >저장</Button>


    </>
  )
}

