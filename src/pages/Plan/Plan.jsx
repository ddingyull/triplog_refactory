import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import PlanList from '../../components/Plan/PlanList';
import SelectList from '../../components/Plan/SelectList';
import styled from 'styled-components';
import data from '../../data';

import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Modal,
  Stack,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import Welcome from './Welcome';
import { addPlanItems } from '../../store/modules/triplog';
import { useDispatch, useSelector } from 'react-redux';

const { kakao } = window;

let pickMap = [
  { areacode: '1', MapY: '127.04', MapX: '37.59' },
  { areacode: '6', MapY: '129.16', MapX: '35.15' }, //부산
  { areacode: '32', MapY: '128.89', MapX: '37.79' }, //강원
  { areacode: '35', MapY: '129.33', MapX: '35.78' }, //경주
  { areacode: '37', MapY: '127.15', MapX: '35.81' }, //전주
  { areacode: '39', MapY: '33.368', MapX: '126.54' }, //제주
];

export default function Plan() {
  const nickName = useSelector((state) => state.users.userNickName);
  const state = useSelector((state) => state.triplog);
  const dispatch = useDispatch();
  console.log(state.triplog);

  let h = 0;
  for (let i = 0; i < pickMap.length; i++) {
    for (let j = 0; j < pickMap[i].length; j++) {
      if (pickMap[i][j].find((el) => el.areacode === areaCode) !== undefined) {
        h = i;
        // console.log(h);
        // console.log(pickMap[i].find((el) => el.areacode === areaCode));
      }
    }
  }

  // let pickMapY = parseFloat(pickMap[h].MapY);
  // let pickMapX = parseFloat(pickMap[h].MapX);
  // console.log('@', pickMapY, pickMapX);

  const savehandler = () => {
    axios
      .post('http://localhost:4000/plan', { state, nickName })
      .then((res) => {
        console.log(res.data);
        console.log('여행 계획 일정 전송 성공!!');
      })
      .catch(() => {
        console.log('여행 계획 일정 전송실패');
      });
  };

  const params = useParams();
  const areaCode = params.areaCode;

  // const oldIdx = useRef();

  const [tourData, setTourData] = useState([]);

  // data 받아오기
  useEffect(() => {
    axios
      .get(
        `https://apis.data.go.kr/B551011/KorService/areaBasedList?serviceKey=rfaoGpiapHFqOcUT6bqfERRxy1WVxzOdOpEC3ChyAFPEfONdSMdRVNETTJKRhqTbPuZ2krpG2mQJMXDbyG74RA%3D%3D&numOfRows=498&pageNo=1&MobileOS=ETC&MobileApp=TripLog&_type=json&listYN=Y&arrange=B&contentTypeId=12&areaCode=${areaCode}`
      )
      .then((response) => {
        setTourData(response.data.response.body.items.item);
      });
  }, []);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onErrorImg = (e) => {
    e.target.src = process.env.PUBLIC_URL + '/images/submain/경주.png';
  };

  // * 지도
  // 검색한 여행지 저장을 위한 State
  const [search, setSearch] = useState([]);

  // input에 입력한 값
  const inputRef = useRef();

  // 클릭 한 여행지 저장을 위한 State
  const [list, setList] = useState([]);

  const [productItems, setProductItems] = useState([]); //받아온데이터 담기
  const [planItems, setPlanItems] = useState([]);
  let [itemData] = [productItems];
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const saveToLocalStorage = () => {
    localStorage.setItem('planState', JSON.stringify(planItems));
  };

  const addPlanItem = (e) => {
    const clickItem = itemData.find(
      (item) => item.sigungucode === e.target.dataset.productid
    );
    console.log(clickItem);
    console.log(productItems);
  };
  const [areaName, setAreaName] = useState(data);
  let pickAreaName = areaName[h][0];

  return (
    <>
      <Nav />
      <Welcome />

      <Modal
        show={show}
        onHide={() => {
          handleClose();
        }}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>TripLog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card className="col-sm-10 col-md- overflow-auto m-auto">
            <Row className="d-flex justify-content-center">
              {/* <Col md={4} className='d-flex m-3 '>
            <p className='fw-6 fs-5 fw-bold me-2'>제주 여행 🍊</p>
          </Col> */}
              <Col
                md={{ span: 4, offset: 2 }}
                className="text-end d-block"
              ></Col>
            </Row>

            {/* 여행지 검색 기능 */}
            <Row className="m-auto py-4 d-flex text-center">
              <form>
                <div className="text-center fs-4 m-4">
                  {' '}
                  🛫 {pickAreaName} 여행
                </div>
                <div className="text-center fs-6 m-4">
                  추가하고 싶은 여행지를 검색하세요
                </div>
                <input
                  type="text"
                  placeholder="원하는 여행지 검색"
                  ref={inputRef}
                  className="m-1"
                  style={{
                    width: '200px',
                    height: '40px',
                    boxSizing: 'border-box',
                  }}
                />
                <Button
                  style={{ backgroundColor: '#036635' }}
                  className="btn btn-success m-1"
                  onClick={() => {
                    // input에 입력한 값 useRef
                    const text = inputRef.current.value;
                    // 데이터 요청
                    axios
                      .get(
                        `https://apis.data.go.kr/B551011/KorService/searchKeyword?serviceKey=rfaoGpiapHFqOcUT6bqfERRxy1WVxzOdOpEC3ChyAFPEfONdSMdRVNETTJKRhqTbPuZ2krpG2mQJMXDbyG74RA%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=TripLog&_type=json&listYN=Y&arrange=B&areaCode=${areaCode}&keyword=${text}`
                      )
                      .then((결과) => {
                        // console.log(search);
                        // 재 검색 마다 search 값을 삭제 시켜줌
                        search.splice(0, search.length);
                        let copy = [
                          ...search,
                          ...결과.data.response.body.items.item,
                        ];
                        setSearch(copy);
                      })
                      .catch(() => {
                        console.log('실패');
                      });
                  }}
                >
                  검색
                </Button>
              </form>

              <div>
                {
                  //search의 map
                  search.map(function (a, i) {
                    return (
                      <>
                        <SelectBox
                          className="d-block m-auto w-75 p-3"
                          // style={{border:'none'}}
                          // data-productid={a.contentid}
                          onClick={() => {
                            // copy를 사용하지 않고 선택된 장소의 정보만 전달하도록
                            const pickedPlace = {
                              title: a.title,
                              Image: a.firstimage,
                              mapx: parseFloat(a.mapx),
                              mapy: parseFloat(a.mapy),
                            };
                            dispatch(
                              addPlanItems({
                                pickedPlace,
                                idx: state.planDateIdx,
                              })
                            );
                          }}
                          key={i}
                        >
                          <div className="d-flex w-100 text-start">
                            <Stack
                              onClick={() => {
                                let copy = [
                                  ...list,
                                  {
                                    title: a.title,
                                    Image: a.firstimage,
                                    mapx: parseFloat(a.mapx),
                                    mapy: parseFloat(a.mapy),
                                  },
                                ];
                                console.log(copy, state.planDateIdx);
                                dispatch(
                                  addPlanItems({ copy, idx: state.planDateIdx })
                                );
                              }}
                            >
                              <img
                                src={a.firstimage}
                                style={{
                                  width: '2rem',
                                  height: '2rem',
                                  borderRadius: '50%',
                                }}
                                onError={onErrorImg}
                              ></img>
                            </Stack>

                            <Stack className="d-flex flex-column">
                              <Title className="m-1 fs-6">{a.title}</Title>
                              <Title
                                className="m-1"
                                style={{ fontSize: '12px' }}
                              >
                                {a.addr1}
                              </Title>
                            </Stack>

                            <Stack>
                              {/* <button
                                className="btn"
                                onClick={() => {
                                  let copy = [...list];
                                  // 선택한 데이터를 삭제
                                  copy.splice(i, 1);
                                  setPlanItems(copy);
                                }}
                              >
                                x
                              </button> */}
                            </Stack>
                          </div>
                        </SelectBox>
                      </>
                    );
                  })
                }
              </div>
            </Row>

            {/* 여행지 리스트 보여주기 */}
            <Row className="m-3" gap={3}>
              {productItems.length > 0 ? (
                <SelectList
                  productItems={productItems}
                  setPlanItems={setPlanItems}
                  planItems={planItems}
                  search={search}
                  setSearch={setSearch}
                />
              ) : null}
            </Row>
          </Card>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              handleClose();
            }}
          >
            닫기
          </Button>

          <Button
            style={{ backgroundColor: '#036635' }}
            // variant="success"
            onClick={() => {
              handleClose();
            }}
          >
            선택 완료
          </Button>
        </Modal.Footer>
      </Modal>

      <Container className="d-flex justify-content-end">
        <Button
          className="btn d-block btn-dark m-3"
          onClick={() => {
            savehandler();
          }}
        >
          여행 계획 저장하기
        </Button>
      </Container>
      {/* 여행계획 짜는 컴포넌트 */}
      <Container className="d-flex flex-wrap justify-content-center overflow-scroll">
        <PlanList
          productItems={productItems}
          setPlanItems={setPlanItems}
          planItems={planItems}
          onClick={handleShow}
        />
      </Container>
      <Footer />
    </>
  );
}

// style-components
const PlanCard = styled.div`
  font-family: 'Inter';
  flex-wrap: wrap;
`;
const Title = styled.p`
  font: 2rem/1 'Inter';
`;

const SelectBox = styled.div`
  display: flex;

  &:hover {
    border-radius: 10px;
    background-color: rgba(3, 102, 53, 0.3);
    cursor: pointer;
  }
`;
