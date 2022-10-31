import { useRef }  from 'react'
import { useParams } from 'react-router';
import {Container, Row, Col, Card , Button } from 'react-bootstrap';
import axios from 'axios';
import { useState } from 'react';



export default function ReviewDelete() {
  const params = useParams();
  const contentId = params.contentId;
  const [emendContent, setEmendContent] = useState([])
  const [emendId, setEmendId] = useState([])

  const contentRef = useRef();
  
  return (
    <>
      <Button variant="success" className="reviewDeleteBtn mx-2" 
        // onClick={() => {
        //   axios.delete(`http://localhost:4000/review/delete/${_id}`, [_id])
        //   .then((res) => {
        //     console.log(res)
        //     console.log('성공')
        //   })
        //   .catch(() => {
        //     console.log('실패')
        //   })
        // }}
          >삭제</Button>
    </>
  )
}
