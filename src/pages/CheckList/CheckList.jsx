import { Container, Accordion, Button, Row, InputGroup  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';

export default function CheckList() {
  const inputRef = useRef();
  const [checklist, setChecklist] = useState([]);

  const callApi = async () => {
    axios
      .get("http://localhost:4000/checklist")
      .then((res) => {
        console.log(res.data[0]);
        console.log(res.data[0].items);
        let copy = [...checklist, ...res.data];
        setChecklist(copy);
      })
      .catch(() => console.log("실패함"));

    // const check = document.querySelector(".check");
    // check.checked = checklist[0].checked;
  };

  useEffect(() => {
    callApi();
  }, []);

  if (checklist[0] !== undefined) {
    return (
      <>
        <h2 className="m-3">Check List</h2>

        {checklist[0].items.map(function (a, i) {
          return (
            <InputGroup className="p-3">
              <InputGroup.Checkbox />
              <input value={checklist[0].items[i].item}></input>
              <Button
                variant="success"
                onClick={() => {
                  const text = inputRef.current.value;
                  console.log(text);
                  axios
                    .post("http://localhost:4000/checklist/addItem", {
                      item: text,
                      checked: true,
                    })
                    .then((res) => {
                      console.log(res.data);
                    })
                    .catch(() => {
                      console.log("실패");
                    });
                }}
              >
                완료
              </Button>
              <Button
                variant="warning"
                onClick={() => {
                  axios
                    .delete("http://localhost:4000/checklist/deleteItem", {
                      data: {
                        num: i,
                        item: checklist[0].items[i].item,
                        checked: false,
                      },
                    })
                    .then((res) => {
                      console.log(res.data);
                    })
                    .catch(() => {
                      console.log("실패");
                    });
                }}
              >
                삭제
              </Button>
            </InputGroup>
          );
        })}
        <InputGroup className="p-3">
          <InputGroup.Checkbox />
          <input ref={inputRef}></input>
          <Button
            variant="success"
            onClick={() => {
              const text = inputRef.current.value;
              console.log(text);
              // let copy = [...item, { id: 2, item: text, checked: true }];
              // setItem(copy);
              // let copy = [...checklist[0]];
              // console.log(copy);
              axios
                .post("http://localhost:4000/checklist/addItem", {
                  item: text,
                  checked: true,
                })
                .then((res) => {
                  console.log(res.data);
                })
                .catch(() => {
                  console.log("실패");
                });
            }}
          >
            완료
          </Button>
          <Button
            variant="warning"
            onClick={() => {
              axios
                .delete("http://localhost:4000/checklist/deleteItem", {
                  data: {
                    _id: 3,
                  },
                })
                .then((res) => {
                  console.log(res.data);
                })
                .catch(() => {
                  console.log("실패");
                });
            }}
          >
            삭제
          </Button>
        </InputGroup>
        <Button className="m-3">추가</Button>
      </>
    );
  }

  return(
    <>
      <Nav/>
        <Container style={{width:'30rem'}} className='m-auto mt-5'>
          <h1 className='fw-bold lh-base mt-5 mb-5'>여행 준비<br></br>체크리스트</h1>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>기본 짐싸기</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>의류</li>
                    <li>전자기기 챙기기</li>
                    <li>세안용품</li>
                    <li>상비약</li>
                    <li>신분증/면허증</li>
                    <li>필기구</li>
                    <li>마스크/손 소독제</li>
                    <li>➕ 아이템 추가</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>필수 준비물</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>숙소</li>
                  <li>➕ 아이템 추가</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>트립로그에서 챙기기</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>여행 일정 짜기</li>
                  <li>가계부 짜기</li>
                  <li>➕ 아이템 추가</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>통신/교통 준비</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>여행지 교통편</li>
                  <li>➕ 아이템 추가</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4">
              <Accordion.Header>즐길거리 준비</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>관광 정보 확인하기</li>
                  <li>맛집 정보 확인하기</li>
                  <li>➕ 아이템 추가</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Row className="justify-content-center ">
              <Button variant="primary" className='col-4 mt-4' >카테고리 추가</Button>              
            </Row>
          </Accordion>

        </Container>
      <Footer/>
    </>
  )
}