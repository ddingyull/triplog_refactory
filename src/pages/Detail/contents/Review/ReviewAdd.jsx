import { useState, useRef, useEffect } from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faX } from "@fortawesome/free-solid-svg-icons";
import Rating from './Rating';

const ARRAY = [0, 1, 2, 3, 4];

export default function ReviewAdd() {
  const outSection = useRef();
  const scoreRef = useRef();
  const [reviewAdd, setReviewAdd] = useState(false);

  const contentRef = useRef();

  const onClick = () => {
    setReviewAdd(true);
  };
//   const [reviewList, setReviewList] =useState([]);
//   // 리뷰 백엔드 연결(쓴 거 넘겨주는 것)
//   async function getReview() {
//     const result = await fetch('주소');
//     if(result.statue === 200) {
//       const post = await result.json('');
//       if (post) setReviewList(post.post.post_comments);
//     } else throw new Error('상태 이상');
//     }

//   // 글 등록 백엔드 연결
//   async function postReview(newReivew) {
//     const result = await fetch('',{
//     method: "POST",
//     headers: {
//       "Content-Type" : "application/json",
//     },
//     body: JSON.stringfy(newReivew),
//   });
//   if(result.statue === 200) {
//     console.log(await result.json());
//     getReview();
//   } else throw new Error('상태 이상');
// }


//     useEffect(() => {
//       getReview();
//     },[]);

// const addReview = ()=> {
//   const newReview = {
//     score: scoreRef.current.value,
//     content: contentRef.current.value,
//   };
//   postReview(newReivew);
// };

  return (
    <>
      {ReviewAdd ? (
        <Container
          className="bg-light"
          ref={outSection}
          onClick={e => {
            if (outSection.current === e.target) {
              setReviewAdd(false);
            }
          }}
          >

          <Form.Group className="position-relative">
            <div className='mt-3 mb-3 mx-3'>
              <Rating/>
              <Form.Control
                name="textarea"
                as="textarea"
                placeholder="자세하고 솔직한 리뷰는 다른 고객에게 큰 도움이 됩니다!"
                rows={4}
                required
                className="mb-3"
              />
              <Form.Control
                type="file"
                required
                name="file"
                size="sm" 
                className="mb-3"/>
            </div>
            <Row className="d-flex justify-content-end">
              <Col className="col-2 text-end mb-3 mx-2">
                <Button variant="success" type="submit" className="reviewSubmitBtn" 
                    // onClick={addReview}
                    >등록</Button>
              </Col>
            </Row>
          </Form.Group>


        </Container>
      ) : null}
    </>
  )
}