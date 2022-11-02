import { useState, useEffect, useRef } from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from 'axios';

export default function Test() {
  const [review, setReview] = useState([]);
  const [like, setLike] = useState([]);
  const [user, setUser] = useState([]);
  const [tourData, setTourData] = useState([]);
  const [okay, setOkay] = useState(false);
  const nickName = 'test';

  // 리뷰 데이터 가져오기
  useEffect(() => {
    axios
      .post('http://localhost:4000/review', { nickName })
      .then((res) => {
        // console.log(res.data);
        setReview(res.data);
        // setOkay(true);
      })
      .catch(() => {
        console.log('실패');
      });
  }, []);

  // console.log(review);

  // 저장 목록 데이터 가져오기
  // useEffect(() => {
  //   axios
  //     .get('http://localhost:4000/like/getlikes', { nickName })
  //     .then((res) => {
  //       // console.log(res.data);
  //       // console.log(res.data[0].likes);
  //       setLike(res.data.likes);
  //       setOkay(true);
  //     })
  //     .catch(() => {
  //       console.log('실패');
  //     });
  // }, []);

  // 유저 정보 가져오기
  // useEffect(() => {
  //   axios
  //     .get('http://localhost:4000/user', { nickName })
  //     .then((res) => {
  //       setUser(res.data);
  //     })
  //     .catch(() => {
  //       console.log('실패');
  //     });
  // }, []);

  // if (okay) {
  return (
    <>
      <div>성공</div>
      <h2 className="text-center m-5">마이페이지</h2>
      <h3 className="text-center m-5">회원 정보 확인</h3>
      <Card className="m-auto" style={{ width: '18rem' }}>
        <ListGroup variant="flush">
          <ListGroup.Item>type: {user.type}</ListGroup.Item>
          <ListGroup.Item>email: {user.email}</ListGroup.Item>
          <ListGroup.Item>nickname: {user.nickName}</ListGroup.Item>
        </ListGroup>
      </Card>
      <h3 className="text-center m-5">내가 쓴 리뷰</h3>
      {review.map(function (b, j) {
        return (
          <Card className="text-center m-3">
            <Card.Header>{review[j].contentId} title</Card.Header>
            <Card.Body>
              <Card.Title>{review[j].star}</Card.Title>
              <Card.Text>{review[j].content}</Card.Text>
              <Button variant="primary">Go</Button>
            </Card.Body>
            <Card.Footer className="text-muted">
              {review[j].dateFull}
            </Card.Footer>
          </Card>
        );
      })}
      <h3 className="text-center m-5">내 저장 목록 </h3>
      {like.map(function (a, i) {
        // axios
        //   .get(
        //     `https://apis.data.go.kr/B551011/KorService/detailCommon?serviceKey=rfaoGpiapHFqOcUT6bqfERRxy1WVxzOdOpEC3ChyAFPEfONdSMdRVNETTJKRhqTbPuZ2krpG2mQJMXDbyG74RA%3D%3D&MobileOS=ETC&MobileApp=AppTest&_type=json&contentId=${a}&contentTypeId=12&defaultYN=Y&firstImageYN=Y&areacodeYN=Y&catcodeYN=Y&addrinfoYN=Y&mapinfoYN=Y&overviewYN=Y`
        //   )
        //   .then((res) => {
        //     console.log("일단 보류");
        //     // setTourData(res.data.response.body.items.item[0]);
        //   });

        return (
          <Card className="text-center m-3">
            <Card.Body>
              <Card.Title>{a} title</Card.Title>
              <Card.Text>{a} content</Card.Text>
              <Button variant="primary">Go</Button>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
}
// }
