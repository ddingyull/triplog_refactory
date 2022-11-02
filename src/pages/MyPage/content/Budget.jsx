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
import Nav from '../../../components/Nav';
import Footer from '../../../components/Footer';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { FaArrowAltCircleUp, FaPencilAlt, FaTrash } from 'react-icons/fa';

export default function Budget() {
  // const [chargeData, setChargeData] = useState();
  // const [updateCharge, setUpdateCharge] = useState();
  // const textRef = useRef();
  // const chargeRef = useRef();
  // const [okay, setOkay] = useState(false);
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const totalCharge = chargeData.chargeList?.reduce((acc, cur, i) => {
  //   return (cur.charge + acc);
  // }, 0);

  // useEffect(() => {
  //   axios
  //     .get('http://localhost:4000/charge')
  //     .then((res) => {
  //       console.log(res.data[0].chargeList);
  //       setChargeData(res.data[0].chargeList);
  //       setOkay(true);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  // if (show) {
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

    {/* {chargeData.map(function (a, i) {
        console.log(a);
        return ( */}
    <Row className="mx-1">
      <Col className="col-2">
        <p>11.04</p>
      </Col>
      {/* <Col className="col-6 text-center">{a.title}</Col>
            <Col className="col-2 text-center">{a.charge}</Col> */}
      <Col className="col-1 text-end" style={{ cursor: 'pointer' }}>
        <FaPencilAlt
          style={{ color: '#198754' }}
          // onClick={() => {
          //   axios
          //     .get(`http://localhost:4000/charge/update/`)
          //     .then((res) => {
          //       console.log('가계부 수정 성공');
          //       setUpdateCharge(res.data.title);
          //     })
          //     .catch((err) => {
          //       console.log('가계부 수정 실패');
          //     });
          // }}
        />
      </Col>
      <Col className="col-1 text-end" style={{ cursor: 'pointer' }}>
        <FaTrash style={{ color: 'grey' }} />
      </Col>
    </Row>
    {/* );
      })} */}

    <hr class="dashed" style={{ borderTop: 'dashed' }}></hr>
    <Row>
      <Col sm md lg="auto" className="fw-bold">
        ITEM COUNT :
      </Col>
      <Col className="text-end">10개</Col>
    </Row>

    <Row>
      <Col className="fw-bold">
        인원수 : 8 명 <FaArrowAltCircleUp />
      </Col>
      <Col sm md lg="auto" className="text-end">
        인당 20000원
      </Col>
    </Row>

    <Row>
      <Col className="fw-bold">총 합계 :</Col>
      <Col sm md lg="auto" className="text-end">
        오조오억원
      </Col>
    </Row>

    <hr class="dashed" style={{ borderTop: 'dashed' }}></hr>
    <Row>
      <Col className="text-start ">
        <span>영수증 전체 초기화</span>
      </Col>
      <Col lg="auto" className="col-sm-2 ">
        <Button
          variant="success"
          // onClick={() => setShow(true)}
        >
          초기화
        </Button>
      </Col>
    </Row>
  </Col>;
}
// }
