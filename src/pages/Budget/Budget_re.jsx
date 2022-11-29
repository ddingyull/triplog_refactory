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

export default function BudgetRe() {
  const dispatch = useDispatch();

  const textRef = useRef();
  const chargeRef = useRef();
  const dateRef = useRef();

  const [chargeData, setChargeData] = useState();
  const [users, setUsers] = useState(1);
  const [update, setUpdate] = useState(false);
  const [okay, setOkay] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  let totalCharge = [];
  if (chargeData !== undefined) {
    totalCharge = chargeData?.reduce((acc, cur, i) => {
      return cur.charge + acc;
    }, 0);
  }
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
  }, [update]);

  if (okay) {
    return (
      <>
        <Container className="mx-5">
          <h1
            className="fw-bold lh-base mt-2 mb-4 m-auto"
            // style={{ width: '65%' }}
          >
            <span style={{ color: '#198754' }}>{nickName}</span>
            <span>님의</span>
            <br></br>
            <span>정산💸내역입니다.</span>
          </h1>
          <Col
            className=" p-5 m-auto rounded border mt-4"
            style={{ backgroundColor: '#fafafa', width: '90%' }}
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
              <Col className="fw-bold col-2 text-end">Del</Col>
            </Row>
            <hr className="solid"></hr>

            {chargeData &&
              chargeData.map(function (a, i) {
                return (
                  <Row className="mx-1" key={i}>
                    <Col className="col-2">
                      <p>{a.date.slice(5, 10)}</p>
                    </Col>
                    <Col className="col-6 text-center">{a.title}</Col>
                    <Col className="col-2 text-center">
                      {a.charge.toLocaleString('ko-KR', {
                        currency: 'KRW',
                      })}
                    </Col>
                    <Col
                      className="col-2 text-end"
                      style={{ cursor: 'pointer' }}
                    >
                      <FaTrash
                        style={{ color: 'grey' }}
                        onClick={() => {
                          axios
                            .post('http://13.125.234.1:4000/charge/delete', {
                              nickName,
                              a,
                            })
                            .then((결과) => {
                              // 백엔드 콘솔 결과
                              console.log(결과);
                              console.log('성공');
                              alert('지출 내역 삭제를 성공하였습니다🙌');
                              setUpdate(!update);
                            })
                            .catch(() => {
                              console.log('실패');
                            });
                        }}
                      />
                    </Col>
                  </Row>
                );
              })}

            <hr className="dashed" style={{ borderTop: 'dashed' }}></hr>
            <Row>
              <Col sm md lg="auto" className="fw-bold">
                ITEM COUNT :
              </Col>
              {chargeData !== undefined ? chargeData.length : 0} 개
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
                1인당{' '}
                {parseInt(totalCharge / users).toLocaleString('ko-KR', {
                  currency: 'KRW',
                })}{' '}
                원
              </Col>
            </Row>

            <Row>
              <Col className="fw-bold">총 합계 : </Col>
              <Col sm md lg="auto" className="text-end">
                {totalCharge.toLocaleString('ko-KR', {
                  currency: 'KRW',
                })}
                원
              </Col>
            </Row>

            <hr className="dashed" style={{ borderTop: 'dashed' }}></hr>
            <Col lg="auto" className="text-end ">
              <Button variant="success" onClick={() => setShow(true)}>
                초기화
              </Button>
            </Col>
          </Col>
        </Container>
      </>
    );
  }
}
