/* global kakao */
import { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import axios from 'axios';
import Footer from '../../components/Footer';
import Nav from '../../components/Nav';
import { useParams } from 'react-router-dom';
import Review from './Review/Review';
import ReviewBox from './Review/ReviewBox';
import Url from '../../components/share/Url';
import Kakao from '../../components/share/Kakao';
import { BeatLoader } from 'react-spinners';

// redux 에서 review 업데이트 여부를 받아옴
import { useSelector } from 'react-redux';
import DetailMap from './DetailMap';
import Progress from '../../components/Progress';

export default function Detail() {
  const params = useParams();
  const contentid = params.contentid;
  const region = params.region;

  const [loading, setLoading] = useState(true);
  const [overview, setOverview] = useState([]);
  const [homepage, setHomepage] = useState([]);
  const [detail, setDetail] = useState([]);
  const [like, setLike] = useState([]);
  const [review, setReview] = useState([]);
  const [likeNickName, setLikeNickName] = useState([]);
  const [star, setStar] = useState([]);
  const nickName = useSelector((state) => state.users.userNickName);

  // 이미지 로딩 실패시
  const onErrorImg = (e) => {
    e.target.src = process.env.PUBLIC_URL + '/images/defaultImage.png';
  };

  // 전체 데이터를 가져오는 useEffect
  useEffect(() => {
    axios
      .get(`http://localhost:4000/detail/${region}/${contentid}`)
      .then((response) => {
        setDetail(response.data);
      });
  }, [contentid, region]);

  // 페이지정보를 가져오는 API
  useEffect(() => {
    axios
      .get(
        `https://apis.data.go.kr/B551011/KorService/detailCommon?serviceKey=rfaoGpiapHFqOcUT6bqfERRxy1WVxzOdOpEC3ChyAFPEfONdSMdRVNETTJKRhqTbPuZ2krpG2mQJMXDbyG74RA%3D%3D&MobileOS=ETC&MobileApp=AppTest&_type=json&contentId=${contentid}&defaultYN=Y&firstImageYN=Y&areacodeYN=Y&catcodeYN=Y&addrinfoYN=Y&mapinfoYN=Y&overviewYN=Y`
      )
      .then((response) => {
        setOverview(response.data.response.body.items.item[0].overview);
        setHomepage(response.data.response.body.items.item[0].homepage);
        setLoading(false);
      })
      .catch(() => new Error('실패'));
  }, [contentid]);

  /*  리뷰 정보 가져오는 useEffect*/
  useEffect(() => {
    axios
      .get(`http://localhost:4000/review/${contentid}`)
      .then((res) => {
        setReview(res.data);
      })
      .catch(() => console.log('리뷰 실패'));
  }, [contentid, review]);

  /* 좋아요 데이터 가져오기 */
  useEffect(() => {
    axios
      .get(`http://localhost:4000/detail/${contentid}`)
      .then((res) => {
        setLikeNickName(res.data.nickNameList);
        setLike(res.data.like);
        setStar(res.data.star);
      })
      .catch(() => {
        console.log('실패');
      });
  }, [contentid, setLike, setStar]);

  // const handleToggle = (b) => () => {
  //   console.log(b);
  //   const currentIndex = like.indexOf(b);
  //   console.log(currentIndex);
  //   const newLike = [...like];
  //   console.log(newLike);

  //   if (currentIndex === -1) {
  //     newLike.push(b);
  //     axios
  //       .post(`http://13.125.234.1:4000/detail/inclike/${contentid}`)
  //       .then(console.log('좋아요 + 1'));
  //   } else {
  //     newLike.splice(currentIndex, 1);
  //     axios
  //       .post(`http://13.125.234.1:4000/detail/deletelike/${contentid}`)
  //       .then(console.log('좋아요 -1'));
  //   }
  //   setLike(newLike);
  //   axios
  //     .post('http://13.125.234.1:4000/like/arrlike', { newLike, nickName })
  //     .then((res) => console.log(res.data));
  // };

  /* 별점 평균평점 */
  const INITIALVALUE = 0;
  const starList = [];
  for (let key in review) {
    starList.push(parseInt(review[key].star));
  }
  const starSum = starList.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    INITIALVALUE
  );
  const starAvg = (starSum / starList.length).toFixed(1);

  useEffect(() => {
    axios
      .post(`http://13.125.234.1:4000/detail/incstar/${contentid}`, { starAvg })
      .then((res) => console.log(res.data));
  }, [starAvg]);

  return (
    <>
      <Nav />
      <Container className="col-lg-8 col-md-8 col-sm-8 col-xs-8">
        <Row xs={1} md={1} lg={2} xxs={1} className="">
          <Col>
            <Card className="mt-3" style={{ height: '60vh' }}>
              <Card.Img
                variant="top"
                src={detail.firstimage1}
                onError={onErrorImg}
                style={{ height: '45vh', objectFit: 'cover' }}
                className="fluid border"
              />
              <Card.Body className="d-flex justify-content-center align-items-center">
                <div
                  className="text-center flex-fill flex-row"
                  style={{ cursor: 'pointer' }}
                >
                  <h5
                    sytle={{ cursor: 'pointer' }}

                    // onClick={
                    //   nickName !== ''
                    //     ? handleToggle(contentid)
                    //     : () => {
                    //         alert('로그인해주세요!');
                    //       }
                    // }
                  >
                    ❤{/* {like.indexOf(contentid) !== -1 ? '❤' : '🤍'} */}
                  </h5>
                  <p>좋아요</p>
                </div>
                <div
                  className="text-center flex-fill"
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    console.log(document.documentElement.scrollHeight);
                    window.scrollTo(0, document.documentElement.scrollHeight);
                  }}
                >
                  <h5>⭐</h5>
                  <p>리뷰쓰기</p>
                </div>
                <div
                  className="text-center flex-fill"
                  style={{ cursor: 'pointer' }}
                >
                  <Kakao tourData={detail} />
                  <p className="pt-2">카카오 공유</p>
                </div>
                <div
                  className="text-center flex-fill "
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    alert('url이 복사되었습니다.');
                  }}
                >
                  <Url />
                  <p style={{ fontSize: '1rem' }}>URL공유</p>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card
              className="mt-3 px-3"
              style={{ overflowY: 'scroll', height: '60vh' }}
            >
              <Card.Body className="m-2 " style={{ height: '40vh' }}>
                <p className=" mb-2 text-muted text-end">
                  조회수{' '}
                  {detail.view === undefined ? (
                    <span>1</span>
                  ) : (
                    <span>{detail.view + 1}</span>
                  )}
                </p>
                <Card.Title className="mb-3 fw-bold">{detail.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  📍 {detail.addr1}
                </Card.Subtitle>
                <Card.Text className="mb-4">
                  <Progress starAvg={parseFloat(starAvg)} /> <span>❤</span>{' '}
                  {detail.like === undefined ? (
                    <span>0</span>
                  ) : (
                    <span>{detail.like}</span>
                  )}
                </Card.Text>
                <Card.Text>
                  <Row className="mt-1">
                    <span className="fw-bold">전화</span>
                    <p>
                      {detail.tel === !' '
                        ? detail.tel
                        : '전화번호 정보가 없습니다.'}
                    </p>
                  </Row>
                  <Row>
                    <span className="fw-bold">홈페이지</span>

                    {loading ? (
                      <div className=" d-flex justify-content-center">
                        <BeatLoader color="#198754" />
                      </div>
                    ) : homepage === !'' ? (
                      <a dangerouslySetInnerHTML={{ __html: homepage }}></a>
                    ) : (
                      <p>홈페이지 정보가 없습니다.</p>
                    )}
                  </Row>
                </Card.Text>
                <Card.Text>
                  <span className="fw-bold">장소설명</span>
                  {loading ? (
                    <BeatLoader color="#198754" className="text-center mt-5" />
                  ) : (
                    <p dangerouslySetInnerHTML={{ __html: overview }}></p>
                  )}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* 지도 */}
        <DetailMap props={detail} />

        {/* 리뷰 */}
        <Row className="mt-lg-5 mt-md-5 mt-sm-5 mt-4 ">
          <Col>
            <span className="fw-bold fs-5 ">
              리뷰
              <span className="text-success mx-1">{review.length}</span>
            </span>
          </Col>
          <Col className="text-end col-12">
            <ReviewBox setReivew={setReview} />
          </Col>
        </Row>
        <Review props={review} />
      </Container>
      <Footer />
    </>
  );
}
