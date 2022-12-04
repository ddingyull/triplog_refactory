import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Row, Col, Card } from 'react-bootstrap';
import Pagination from 'react-js-pagination';
import '../../styles/Paging.css';
import Progress from '../../components/Progress';

export default function ListDetail({ props, region }) {
  const navigate = useNavigate();

  // 이미지 로딩 실패
  const onErrorImg = (e) => {
    e.target.src = process.env.PUBLIC_URL + '/images/defaultImage.png';
  };

  /* pagingnation */
  // 첫 번째 페이지
  const [page, setPage] = useState(1);
  // 한 페이지에 보여줄 총 갯수
  const [pagePost] = useState(12);
  // 페이지 이동 이벤트함수
  const handlePageChange = (page) => {
    setPage(page);
  };

  if (props) {
    return (
      <>
        {/* Lists CARD */}
        <Row xs={1} sm={2} md={2} lg={3} className="g-4">
          {props.length > 0
            ? props
                .slice(pagePost * (page - 1), pagePost * (page - 1) + pagePost)
                .map(function (a, i) {
                  /* 별점 평균평점 */
                  const INITIALVALUE = 0;
                  const starList = [];
                  for (let key in a.star) {
                    starList.push(parseInt(a.star[key].star));
                  }
                  const starSum = starList.reduce(
                    (accumulator, currentValue) => accumulator + currentValue,
                    INITIALVALUE
                  );
                  const starAvg = (starSum / starList.length).toFixed(1);

                  return (
                    <Col key={i}>
                      <Card
                        onClick={() => {
                          navigate(`/detail/${region}/${a.contentid}`);
                        }}
                      >
                        <Card.Img
                          variant="top"
                          src={a.firstimage1}
                          onError={onErrorImg}
                          height={'250rem'}
                          className="border"
                        />

                        <Card.Body>
                          <Card.Text className="text-end text-muted m-0">
                            조회수 {a.view}
                          </Card.Text>
                          <Card.Title>{a.title}</Card.Title>
                          <Card.Text className="text-muted mb-2">
                            {a.addr1}
                          </Card.Text>
                          <Card.Text className="text-muted">
                            <span>
                              <Progress starAvg={starAvg} />{' '}
                            </span>
                            <span>❤{a.like} </span>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  );
                })
            : null}
        </Row>
        {/* Pagination */}
        <Row
          className="d-flex justify-content-center col-2 m-auto mt-4 mb-4"
          lg={2}
        >
          <Pagination
            // * 필수 값
            // *활성 페이지
            activePage={page}
            // 페이지당 항목 수
            itemsCountPerPage={12}
            // 페이지 총 아이템수
            totalItemsCount={props.length}
            // 페이지 범위
            pageRangeDisplayed={5}
            // 이전 페이지 탐색 버튼의 텍스트
            prevPageText={'<'}
            // 다음 페이지 탐색 버튼의 텍스트
            nextPageText={'>'}
            // 페이지 변경 핸들러 pageNumber를 인수로 수신
            onChange={handlePageChange}
          />
        </Row>
      </>
    );
  }
}
