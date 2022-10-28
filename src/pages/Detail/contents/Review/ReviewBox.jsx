import { useState } from 'react';
import {Button } from 'react-bootstrap';
import ReviewAdd from './ReviewAdd';

export default function ReviewBox() {
  const [reviewAdd, setReviewAdd] = useState(false);
  const text = reviewAdd ? '리뷰닫기'  : '리뷰쓰기';

  const onClick = () => {
    setReviewAdd(!reviewAdd);
  };
  
  return (
    <>
    <Button variant="success" onClick={onClick} className="reviewAdd col-2 m-2" >{text}</Button>
      {reviewAdd && (
        <ReviewAdd reviewAdd={reviewAdd} setReviewAdd={setReviewAdd} />
      )}
    </>
  )
}