import { Row, Col, Button } from 'react-bootstrap';
import { FaArrowAltCircleUp, FaPencilAlt, FaTrash } from 'react-icons/fa';
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Budget({ props }) {
  const [users, setUsers] = useState(1);
  const nickName = useSelector((state) => state.users.userNickName);
  const [update, setUpdate] = useState(false);
  const [show, setShow] = useState(false);

  let totalCharge = [];

  if (props !== undefined) {
    totalCharge = props?.reduce((acc, cur, i) => {
      return cur.charge + acc;
    }, 0);
  }

  return (
    <Col
      className=" p-5 rounded border mt-4"
      style={{ backgroundColor: '#fafafa' }}
    >
      <h6 className="fw-bold text-center" style={{ color: '#198754' }}>
        TripLog
      </h6>
      <h2 className="fw-bold text-center">RECEIPT</h2>

      <hr class="solid" style={{ borderTopWidth: '2px' }}></hr>

      <Row className=" mb-2 mx-1">
        <Col className="fw-bold col-3">Day</Col>
        <Col className="fw-bold col-5 text-center">ITEM</Col>
        <Col className="fw-bold col-2 text-center ">Price</Col>
        <Col className="fw-bold col-2 text-end">Del</Col>
      </Row>
      <hr class="solid"></hr>

      {props &&
        props.map(function (a, i) {
          console.log(a);
          return (
            <Row className="mx-1" key={i}>
              <Col className="col-3">
                <p>{a.date.slice(5, 10)}</p>
              </Col>
              <Col className="col-5 text-center">{a.title}</Col>
              <Col className="col-2 text-center">
                {a.charge.toLocaleString('ko-KR', {
                  currency: 'KRW',
                })}
              </Col>
              <Col className="col-2 text-end" style={{ cursor: 'pointer' }}>
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

      <hr class="dashed" style={{ borderTop: 'dashed' }}></hr>
      <Row>
        <Col sm md lg="auto" className="fw-bold">
          ITEM COUNT :
        </Col>
        <Col className="text-end">{props.length} 개</Col>
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
          })}
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

      <hr class="dashed" style={{ borderTop: 'dashed' }}></hr>
      <Col className="text-end">
        <Button variant="success" onClick={() => setShow(true)}>
          초기화
        </Button>
      </Col>
    </Col>
  );
}
