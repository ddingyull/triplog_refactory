import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import ReviewWrite from './ReviewWrite';

export default function ReviewBox(props) {
  const [reviewWrite, setReviewWrite] = useState(false);
  const text = reviewWrite ? '리뷰닫기' : '리뷰쓰기';
  const nickName = useSelector((state) => state.users.userNickName);
  const onClick = () => {
    setReviewWrite(!reviewWrite);
  };

  return (
    <>
      <Button variant="success" onClick={onClick} className="reviewWrite mb-2">
        {text}
      </Button>
      {reviewWrite && (
        <ReviewWrite
          reviewAdd={reviewWrite}
          setReviewAdd={setReviewWrite}
          setReivew={props.setReivew}
        />
      )}
    </>
  );
}
