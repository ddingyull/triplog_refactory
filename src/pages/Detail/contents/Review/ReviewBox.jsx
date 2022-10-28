import { useState } from 'react';
import {Button } from 'react-bootstrap';
import ReviewAdd from './ReviewAdd';

export default function ReviewBox() {
  const [reviewAdd, setReviewAdd] = useState(false);

  const onClick = () => {
    setReviewAdd(true);
  };
  
  return (
    <>
    <Button variant="success" onClick={onClick} className="reviewAdd col-2 m-2" >리뷰쓰기</Button>
      {reviewAdd && (
        <ReviewAdd reviewAdd={reviewAdd} setReviewAdd={setReviewAdd} />
      )}
    </>
  )
}