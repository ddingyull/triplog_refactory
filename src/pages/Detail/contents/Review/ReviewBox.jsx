import { useState } from 'react';
import {Button } from 'react-bootstrap';
import ReviewWrite from './ReviewWrite';

export default function ReviewBox() {
  const [reviewWrite, setReviewWrite] = useState(false);
  const text = reviewWrite ? '리뷰닫기'  : '리뷰쓰기';

  const onClick = () => {
    setReviewWrite(!reviewWrite);
  };
  
  return (
    <>
    <Button variant="success" onClick={onClick} className="reviewWrite col-2 m-2" >{text}</Button>
      {reviewWrite && (
        <ReviewWrite reviewAdd={reviewWrite} setReviewAdd={setReviewWrite} />
      )}
    </>
  )
}