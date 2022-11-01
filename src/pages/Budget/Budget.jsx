import {
  Container,
  Row,
  Col,
  Button,
  InputGroup,
  Form,
  Modal,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { FaArrowAltCircleUp, FaPencilAlt, FaTrash } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { chargeUpdate } from '../../store/modules/budget';

export default function Budget() {
  const dispatch = useDispatch();
  const textRef = useRef();
  const chargeRef = useRef();
  const dateRef = useRef();

  const [chargeData, setChargeData] = useState();
  const [updateChargeTitle, setUpdateChargeTitle] = useState();
  const [updateCharge, setUpdateCharge] = useState();
  const [users, setUsers] = useState(0);

  const [okay, setOkay] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const chargeUpdate = useSelector((state) => state.budget.chargeUpdate);
  const totalCharge = chargeData?.reduce((acc, cur, i) => {
    return cur.charge + acc;
  }, 0);

  useEffect(() => {
    axios
      .get('http://localhost:4000/charge')
      .then((res) => {
        console.log(res.data[0].chargeList);
        setChargeData(res.data[0].chargeList);
        setOkay(true);
        dispatch(chargeUpdate());
      })
      .catch((err) => console.log(err));
  }, [chargeUpdate]);

  if (show) {
    return (
      <Modal
        show={show}
        onHide={handleClose}
        centered
        backdrop="static"
        keyboard={false}
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header closeButton>
          <Modal.Title>영수증 초기화 버튼입니다!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>초기화하시면 다시는 영수증 데이터를 불러올 수 없어요!!</p>
          <p>
            정말{' '}
            <span className="fw-bold" style={{ color: '#198754' }}>
              초기화
            </span>{' '}
            하시겠습니까?
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="outline-success"
            // onClick={() => {
            //   axios
            //     .post(`http://localhost:4000/review/emend/${emendId}`, [
            //       { emendId, emendContent },
            //     ])
            //     .then((결과) => {
            //       console.log(결과);
            //       console.log('리뷰 수정 성공');
            //       setShow(false);
            //     })
            //     .catch(() => {
            //       console.log('실패');
            //     });
            // }}
          >
            초기화
          </Button>
          <Button variant="success" onClick={handleClose}>
            닫기
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
  if (okay) {
    return (
      <>
        <Nav />
        <Container>
          <Row lg="2" sm="1" md="1">
            {/* 왼쪽 입력칸 */}

            <Col className="col-6 align-self-center px-5 mb-4">
              <h1 className="fw-bold lh-base mt-5 mb-4">
                <span style={{ color: '#198754' }}>trip</span>
                <span>님의</span>
                <br></br>
                <span>정산내역입니다.</span>
              </h1>
              <p className="mb-4">
                일행과 함께 지출한 비용이 있다면,
                <br /> 총무에게 내야 할 금액을 정산해드려요.
              </p>

              <p className="fw-bold">날짜</p>
              <InputGroup size="md" className="mb-1 ">
                <Form.Control type="date" required ref={dateRef} />
              </InputGroup>
              <br />
              <p className="fw-bold">내용</p>
              <InputGroup size="md" className="mb-3">
                <Form.Control type="text" required ref={textRef} />
              </InputGroup>
              <br />
              <p className="fw-bold">금액</p>
              <InputGroup size="md" className="mb-3">
                <Form.Control
                  type="number"
                  placeholder="숫자만 입력됩니다."
                  required
                  ref={chargeRef}
                />
              </InputGroup>
              <Row className="d-flex justify-content-between ">
                <Col>
                  <Button
                    variant="success"
                    onClick={() => {
                      // const date = dateRef.current.value;
                      const title = textRef.current.value;
                      const charge = chargeRef.current.value;

                      let obj = {
                        title: title,
                        charge: parseInt(charge),
                      };

                      if (chargeData.chargeList === undefined)
                        chargeData.chargeList = [];
                      chargeData.chargeList.push(obj);

                      console.log('@@', chargeData);

                      setChargeData(chargeData);

                      axios
                        .post(`http://localhost:4000/charge/write`, [
                          chargeData,
                        ])
                        .then((res) => {
                          console.log(res);
                          console.log('charge 등록 성공');
                          alert('여행 지출 내역 등록을 성공하였습니다🙌');
                          dispatch(chargeUpdate());
                        })
                        .catch(() => {
                          console.log('charge 등록 실패');
                          alert(
                            '여행 지출 내역 등록을 실패하였습니다. 다시 시도해주세요.'
                          );
                        });
                    }}
                  >
                    등록
                  </Button>
                </Col>
                <Col className="text-end">
                  <Button variant="success">수정</Button>
                </Col>
              </Row>
            </Col>

            {/* 오른쪽 영수증 */}
            <Col
              className="col-6 p-5 rounded border mt-4"
              style={{ backgroundColor: '#fafafa' }}
            >
              <h6 className="fw-bold text-center" style={{ color: '#198754' }}>
                TripLog
              </h6>
              <h2 className="fw-bold text-center">RECEIPT</h2>

              <hr class="solid" style={{ borderTopWidth: '2px' }}></hr>

              <Row className=" mb-2 mx-1">
                <Col className="fw-bold col-2">Day</Col>
                <Col className="fw-bold col-6 text-center">ITEM</Col>
                <Col className="fw-bold col-2 text-center ">Price</Col>
                <Col className="fw-bold col-1">Edit</Col>
                <Col className="fw-bold col-1">Del</Col>
              </Row>
              <hr class="solid"></hr>

              {chargeData.map(function (a, i) {
                console.log(a);
                return (
                  <Row className="mx-1">
                    <Col className="col-2">
                      <p>11.04</p>
                    </Col>
                    <Col className="col-6 text-center">{a.title}</Col>
                    <Col className="col-2 text-center">{a.charge}</Col>
                    <Col
                      className="col-1 text-end"
                      style={{ cursor: 'pointer' }}
                    >
                      <FaPencilAlt
                        style={{ color: '#198754' }}
                        onClick={() => {
                          axios
                            .get(`http://localhost:4000/charge/update/`)
                            .then((res) => {
                              console.log('가계부 수정 성공');
                              setUpdateCharge(res.data.title);
                            })
                            .catch((err) => {
                              console.log('가계부 수정 실패');
                            });
                        }}
                      />
                    </Col>
                    <Col
                      className="col-1 text-end"
                      style={{ cursor: 'pointer' }}
                    >
                      <FaTrash style={{ color: 'grey' }} />
                    </Col>
                  </Row>
                );
              })}

              <hr class="dashed" style={{ borderTop: 'dashed' }}></hr>
              <Row>
                <Col sm md lg="auto" className="fw-bold">
                  ITEM COUNT :
                </Col>
                <Col className="text-end">{chargeData.length} 개</Col>
              </Row>

              <Row>
                <Col className="fw-bold">
                  정산 : {users} 명 {'\u00A0'}
                  <FaArrowAltCircleUp
                    onClick={() => {
                      setUsers(users + 1);
                    }}
                    style={{ cursor: 'pointer', color: '#198754' }}
                  />
                </Col>
                <Col sm md lg="auto" className="text-end">
                  1인당 {parseInt(totalCharge / users)}
                </Col>
              </Row>

              <Row>
                <Col className="fw-bold">총 합계 : </Col>
                <Col sm md lg="auto" className="text-end">
                  {totalCharge}
                </Col>
              </Row>

              <hr class="dashed" style={{ borderTop: 'dashed' }}></hr>
              <Row>
                <Col className="text-start ">
                  <span>영수증 전체 초기화</span>
                </Col>
                <Col lg="auto" className="col-sm-2 ">
                  <Button variant="success" onClick={() => setShow(true)}>
                    초기화
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <Footer />
      </>
    );
  }
}
