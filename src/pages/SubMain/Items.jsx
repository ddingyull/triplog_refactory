import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import CardItemLink from '../../components/CardItemLink';

import data from '../../data';
// detail 페이지의 submenu 부분
export default function Items({ text, subText, srcImg, width, height }) {
  const navigate = useNavigate();
  const params = useParams();
  const areaCode = params.areaCode;

  const [tourData, setTourData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://apis.data.go.kr/B551011/KorService/areaBasedList?serviceKey=rfaoGpiapHFqOcUT6bqfERRxy1WVxzOdOpEC3ChyAFPEfONdSMdRVNETTJKRhqTbPuZ2krpG2mQJMXDbyG74RA%3D%3D&numOfRows=498&pageNo=1&MobileOS=ETC&MobileApp=TripLog&_type=json&listYN=Y&arrange=B&contentTypeId=12&areaCode=${areaCode}`
      )
      .then((response) => {
        setTourData(response.data.response.body.items.item);
      });
  }, []);

  const [datas, setData] = useState(data);
  // let seoulStay = data[0][1];
  // let seoulTour = data[0][2];

  let h = 0;
  for (let i = 0; i < datas.length; i++) {
    for (let j = 2; j < datas[i].length; j++) {
      if (datas[i][j].find((el) => el.areacode === areaCode) !== undefined) {
        h = i;
      }
    }
  }
  return (
    <Container className="p-3 mb-4 mt-5 position-relative">
      <Row className="d-block justify-content-start">
        <Col className="m-3">
          <Title className="justify-content-start fw-bold">{text}</Title>
          {/* <p className='m-0 fs-6' >2022.10.25 - 10.28</p> */}
          <p className="m-0 fs-6 text-secondary">{subText}</p>
        </Col>
      </Row>

      <Row>
        <TableContainer>
          {datas.length > 0 ? (
            datas[h][2].map((tourData, i) => {
              return (
                <>
                  <CardItemLink
                    key={i}
                    width={width}
                    height={height}
                    src={datas[h][2][i].firstimage}
                    title={datas[h][2][i].title}
                    onClick={() => {
                      navigate(`/detail/${tourData.contentid}`);
                    }}
                  />
                </>
              );
            })
          ) : (
            <div>잠시만요!🏖</div>
          )}
        </TableContainer>
      </Row>
    </Container>
  );
}

// style-components
const TableContainer = styled.div`
  overflow-x: auto;
  white-space: nowrap;
  overflow-y: hidden;
`;
const Title = styled.p`
  font: 2rem/1 'Inter';
`;
