/* global kakao */
import { useState, useEffect } from 'react';
import { Container, Row, Col, Badge, Card, Image } from 'react-bootstrap';
import axios from 'axios';
import Footer from '../../components/Footer';
import Nav from '../../components/Nav';
import { useNavigate, useParams } from 'react-router-dom';
import Review from '../../components/Review';
import ReviewBox from './contents/Review/ReviewBox';
import ShareKakao from '../../components/share/ShareKakao';

// redux 에서 review 업데이트 여부를 받아옴
import { useSelector } from 'react-redux';
import ShareUrl from '../../components/share/ShareUrl';
const starScore = [4, 4, 4, 4, 4];

export default function Detail() {
  const result = starScore.reduce(function add(sum, currValue) {
    return sum + currValue;
  }, 0);
  console.log(result);
  const navigator = useNavigate();
  const params = useParams();
  const contentId = params.contentId;

  const [tourData, setTourData] = useState([]);
  const [reviewData, setReviewData] = useState([]);
  const [details, setDetails] = useState([]);
  const [like, setLike] = useState([]);
  const [review, setReview] = useState(true);
  const nickName = useSelector((state) => state.users.userNickName);
  // 리덕스 detail store 에서 리뷰 업데이트 현황 받아오기
  const reviewUpdate = useSelector((state) => state.detail.reviewUpdate);
  // 이미지 로딩 실패시
  const onErrorImg = (e) => {
    e.target.src = process.env.PUBLIC_URL + '/images/defaultImage.png';
  };
  /* 투어 API */
  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://apis.data.go.kr/B551011/KorService/detailCommon?serviceKey=rfaoGpiapHFqOcUT6bqfERRxy1WVxzOdOpEC3ChyAFPEfONdSMdRVNETTJKRhqTbPuZ2krpG2mQJMXDbyG74RA%3D%3D&MobileOS=ETC&MobileApp=AppTest&_type=json&contentId=${contentId}&defaultYN=Y&firstImageYN=Y&areacodeYN=Y&catcodeYN=Y&addrinfoYN=Y&mapinfoYN=Y&overviewYN=Y`
  //     )
  //     .then((response) => {
  //       setTourData(response.data.response.body.items.item[0]);
  //     });
  // }, []);

  /* 리뷰 */
  useEffect(() => {
    axios
      .get(`http://localhost:4000/review/${contentId}`)
      .then((res) => {
        setReviewData(res.data);
      })
      .catch(() => console.log('리뷰 실패'));
  }, [reviewUpdate]);

  /* 투어 데이터 + 디테일 데이터 가져오기 */
  useEffect(() => {
    const reqPost = async () => {
      const res = await axios.get(
        `https://apis.data.go.kr/B551011/KorService/detailCommon?serviceKey=rfaoGpiapHFqOcUT6bqfERRxy1WVxzOdOpEC3ChyAFPEfONdSMdRVNETTJKRhqTbPuZ2krpG2mQJMXDbyG74RA%3D%3D&MobileOS=ETC&MobileApp=AppTest&_type=json&contentId=${contentId}&defaultYN=Y&firstImageYN=Y&areacodeYN=Y&catcodeYN=Y&addrinfoYN=Y&mapinfoYN=Y&overviewYN=Y`
      );
      // console.log(res.data);
      setTourData(res.data.response.body.items.item[0]);
      let data = res.data.response.body.items.item[0];
      axios
        .post(`http://localhost:4000/detail/${contentId}`, { data })
        .then((res) => {
          console.log(res.data);
          setDetails(res.data);
        })
        .catch(() => {
          console.log('실패');
        });
    };
    reqPost();
    // console.log(tourData);
  }, [like]);

  /* 좋아요 데이터 가져오기 */
  useEffect(() => {
    axios
      .post('http://localhost:4000/like/getlikes', { nickName })
      .then((res) => {
        console.log(res.data);
        // console.log(res.data[0].likes);
        setLike(res.data.likes);
      })
      .catch(() => {
        console.log('실패');
      });
  }, []);

  const handleToggle = (b) => () => {
    console.log(b);
    const currentIndex = like.indexOf(b);
    console.log(currentIndex);
    const newLike = [...like];
    console.log(newLike);

    if (currentIndex === -1) {
      newLike.push(b);
      axios
        .post(`http://localhost:4000/detail/inclike/${contentId}`)
        .then(console.log('좋아요 + 1'));
    } else {
      newLike.splice(currentIndex, 1);
      axios
        .post(`http://localhost:4000/detail/deletelike/${contentId}`)
        .then(console.log('좋아요 -1'));
    }
    setLike(newLike);
    axios
      .post('http://localhost:4000/like/arrlike', { newLike, nickName })
      .then((res) => console.log(res.data));
  };

  /* 지도 */
  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(tourData.mapy, tourData.mapx),
      level: 7,
    };

    const map = new kakao.maps.Map(container, options);
    map.setDraggable(false);
    map.setZoomable(false);

    new kakao.maps.Marker({
      map: map,
      position: new kakao.maps.LatLng(tourData.mapy, tourData.mapx),
    });
  }, [tourData.mapy]);

  return (
    <>
      <Nav />
      <Container className="col-8">
        <Row xs={1} md={1} lg={2} xxs={1} className="">
          <Col>
            <Card className="mt-3" style={{ height: '50vh' }}>
              <Card.Img
                variant="top"
                src={tourData.firstimage}
                onError={onErrorImg}
                style={{ height: '250px', objectFit: 'cover' }}
                className="fluid border"
              />
              <Card.Body>
                <div className="d-flex justify-content-center mt-2">
                  <div
                    className="text-center flex-fill"
                    style={{ cursor: 'pointer' }}
                  >
                    <h5
                      sytle={{ cursor: 'pointer' }}
                      onClick={handleToggle(contentId)}
                    >
                      {like.indexOf(contentId) !== -1 ? '❤' : '🤍'}
                    </h5>
                    <p>좋아요</p>
                  </div>
                  <div
                    className="text-center flex-fill"
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                      // alert('서비스 구현예정입니다. 🙏');
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
                    <ShareKakao tourData={tourData} />
                    <p className="pt-2">카카오 공유</p>
                  </div>
                  <div
                    className="text-center flex-fill"
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                      alert('url이 복사되었습니다.');
                    }}
                  >
                    <ShareUrl />
                    <p style={{ fontSize: '1rem' }}>URL공유</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card
              className="mt-3 px-3"
              style={{ overflowY: 'scroll', height: '50vh' }}
            >
              <Card.Body className="m-2 " style={{ height: '40vh' }}>
                <p className=" mb-2 text-muted text-end">
                  조회수{' '}
                  {details.view === undefined ? (
                    <span>1</span>
                  ) : (
                    <span>{details.view + 1}</span>
                  )}
                </p>
                <Card.Title className="mb-3 fw-bold">
                  {tourData.title}
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  📍 {tourData.addr1}
                </Card.Subtitle>
                <Card.Text className="mb-4">
                  ⭐<span> {reviewData.length} </span> ❤{' '}
                  {details.like === undefined ? (
                    <span>0</span>
                  ) : (
                    <span>{details.like}</span>
                  )}
                </Card.Text>
                <Card.Text>
                  <Row className="mt-1 text-start">
                    <span className="fw-bold">전화</span>
                    <p>
                      {tourData.tel === !' '
                        ? tourData.tel
                        : '전화번호 정보가 없습니다.'}
                    </p>
                  </Row>
                  <Row className="text-start">
                    <span className="fw-bold">홈페이지</span>

                    {tourData.homepage !== null ? (
                      <a
                        dangerouslySetInnerHTML={{ __html: tourData.homepage }}
                      ></a>
                    ) : (
                      '홈페이지 정보가 없습니다.'
                    )}
                  </Row>
                </Card.Text>
                <Card.Text>
                  <span className="fw-bold">장소설명</span>
                  <p
                    dangerouslySetInnerHTML={{ __html: tourData.overview }}
                  ></p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* 지도 */}
        <Row className="mb-3 mt-3">
          <h5 className="fw-bold">위치 보기</h5>
          <Card
            id="map"
            style={{ width: '67vw', height: '35vh' }}
            className="mt-2 mb-3 "
          ></Card>
        </Row>

        {/* 리뷰 */}
        <Row className="mt-5 ">
          <Col>
            <span className="fw-bold fs-5 ">
              리뷰
              <span className="text-success mx-1">{reviewData.length}</span>
            </span>
          </Col>
          <Col className="text-end col-12">
            <ReviewBox setReivew={setReview} />
          </Col>
        </Row>
        {review === true ? <Review /> : <Review />}
      </Container>
      <Footer />
    </>
  );
}
