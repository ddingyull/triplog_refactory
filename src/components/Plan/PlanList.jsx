import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import KakaoMap from '../../pages/Plan/KakaoMap';
import PlanItem from './PlanItem';

import { useEffect, useState } from 'react';
import axios from 'axios';

// 리덕스
import { useDispatch, useSelector } from 'react-redux';
import { setDateIdx } from '../../store/modules/triplog';

const PlanList = ({ productItems, planItems, setPlanItems, onClick }) => {
  // let [itemData] = productItems

  // 리듀서의  useSelector, dispatch
  let state = useSelector((state) => state.triplog);
  let dispatch = useDispatch();

  if (state.isLogin) {
    return state.planDate.period.map(
      ({ id, firstimage, title, src, addr1, sigungucode }, idx) => (
        <Container
          sm={1}
          md={1}
          lg={2}
          xl={2}
          className="overflow-auto"
          style={{ height: '20%', width: '350px' }}
          key={idx}
        >
          <Card className="col-md-12 overflow-scroll">
            {/* 각기 다른 id를 가져와야하기 때문에 idx props로 전달 */}
            <KakaoMap className="col-6 m-auto" idx={idx} />
            <Row className="d-flex justify-content-center">
              <Col md={4} className="d-flex m-3">
                <p className="fw-6 fw-bold me-2">day {idx + 1}</p>
                <p className="fw-6">{idx + 1}일차</p>
              </Col>
              {/* <Col md={{ span: 4, offset: 2 }} className="text-end d-block ">
                <a
                  href="#"
                  className="btn btn-light p-0"
                  style={{ width: '50%' }}
                >
                  완료
                </a>
              </Col> */}
            </Row>
            <Row className="m-3">
              <PlanItem
                productItems={productItems}
                setPlanItems={setPlanItems}
                planItems={planItems}
                idx={idx}
              />
            </Row>

            <Col className="m-auto d-flex mt-2 mb-2 col-10">
              <Button
                onClick={() => {
                  onClick();
                  dispatch(setDateIdx(idx));
                }}
                className="btn btn-light mx-1"
                style={{ width: '70%' }}
              >
                장소 추가
              </Button>

              <Button className="btn btn-light mx-1" style={{ width: '70%' }}>
                메모 추가
              </Button>
            </Col>
          </Card>
        </Container>
      )
    );
  }
};

export default PlanList;

const Title = styled.p`
  font: 2rem/1 'Inter';
`;
