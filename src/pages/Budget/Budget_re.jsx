import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { FaArrowAltCircleUp, FaTrash } from 'react-icons/fa';
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
          <Col
            className=" p-5 m-auto rounded border mt-4"
            style={{ backgroundColor: '#fafafa', width: '90%' }}
          >
            <h6 className="fw-bold text-center" style={{ color: '#198754' }}>
              TripLog
            </h6>
            <h2 className="fw-bold text-center">RECEIPT</h2>

            <hr className="solid" style={{ borderTopWidth: '2px' }}></hr>

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
                            .then((??????) => {
                              // ????????? ?????? ??????
                              console.log(??????);
                              console.log('??????');
                              alert('?????? ?????? ????????? ?????????????????????????');
                              setUpdate(!update);
                            })
                            .catch(() => {
                              console.log('??????');
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
              {chargeData !== undefined ? chargeData.length : 0} ???
            </Row>

            <Row>
              <Col className="fw-bold">
                ?????? : {users} ??? {'\u00A0'}
                <FaArrowAltCircleUp
                  onClick={() => {
                    setUsers(users + 1);
                  }}
                  style={{ cursor: 'pointer', color: '#198754' }}
                />
              </Col>
              <Col sm md lg="auto" className="text-end">
                1??????{' '}
                {parseInt(totalCharge / users).toLocaleString('ko-KR', {
                  currency: 'KRW',
                })}{' '}
                ???
              </Col>
            </Row>

            <Row>
              <Col className="fw-bold">??? ?????? : </Col>
              <Col sm md lg="auto" className="text-end">
                {totalCharge.toLocaleString('ko-KR', {
                  currency: 'KRW',
                })}
                ???
              </Col>
            </Row>

            <hr className="dashed" style={{ borderTop: 'dashed' }}></hr>
            <Col lg="auto" className="text-end ">
              <Button variant="success" onClick={() => setShow(true)}>
                ?????????
              </Button>
            </Col>
          </Col>
        </Container>
      </>
    );
  }
}
