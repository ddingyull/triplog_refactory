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

import { useDispatch, useSelector } from 'react-redux';
import { chargeUpdate } from '../../store/modules/budget';
import BudgetReceipt from '../Budget/BudgetReceipt';

export default function Budget() {
  const dispatch = useDispatch();

  const textRef = useRef();
  const chargeRef = useRef();
  const dateRef = useRef();

  const [chargeData, setChargeData] = useState();

  const [update, setUpdate] = useState(false);
  const [okay, setOkay] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const nickName = useSelector((state) => state.users.userNickName);

  useEffect(() => {
    axios
      .post('http://13.125.234.1:4000/charge', { nickName })
      .then((res) => {
        setChargeData(res.data.chargeList);
        setOkay(true);
        dispatch(chargeUpdate());
      })
      .catch((err) => console.log(err));
  }, [update, chargeData]);

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
            onClick={() => {
              axios
                .post(`http://13.125.234.1:4000/charge/alldelete`, {
                  nickName,
                  chargeData,
                })
                .then((결과) => {
                  console.log('초기화 성공');
                  setShow(false);
                  setUpdate(!update);
                })
                .catch(() => {
                  console.log('실패');
                });
            }}
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
        <Container className="col-lg-8 ">
          <Row xs={1} sm={1} md={1} lg={2}>
            {/* 왼쪽 입력칸 */}

            <Col className="align-self-center px-5 mb-4">
              <h1 className="fw-bold lh-base mt-5 mb-4">
                <span style={{ color: '#198754' }}>{nickName}</span>
                <span>님의</span>
                <br></br>
                <span>
                  정산
                  <img
                    src="/images/icons/budget.png"
                    alt="정산내역"
                    style={{ width: '3rem' }}
                  />
                  내역입니다.
                </span>
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
                    className="text-end"
                    onClick={() => {
                      const date = dateRef.current.value;
                      const title = textRef.current.value;
                      const charge = chargeRef.current.value;
                      axios
                        .post(`http://13.125.234.1:4000/charge/write`, {
                          chargeList: { date, title, charge: parseInt(charge) },
                          nickName,
                        })
                        .then((res) => {
                          console.log('charge 등록 성공');
                          alert('여행 지출 내역 등록을 성공하였습니다🙌');
                          dateRef.current.value = '';
                          textRef.current.value = '';
                          chargeRef.current.value = '';
                          setUpdate(!update);
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
              </Row>
            </Col>

            {/* 오른쪽 영수증 */}

            <BudgetReceipt props={chargeData} />
          </Row>
        </Container>
        <Footer />
      </>
    );
  }
}
