import { useState, useEffect, useRef } from "react";
import { Container, Accordion, Button, Row, InputGroup, Form  } from 'react-bootstrap';
import axios from "axios";
import Footer from '../../components/Footer';
import Nav from '../../components/Nav.js';


export default function CheckList_BE () {
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

  // console.log("checklist:", checklist);
  // const item = checklist.items[i].item
  // if (checklist[0] !== undefined) {
  //   console.log(checklist[0].items[0].item);
  // }
  // console.log(checklist.items[0].item);

  const checkListData = [
    {
      title: '기본 짐싸기',
      content:[
        '의류', '전자기기 챙기기', '세안용품', '상비약', '신분증/면허증', '필기구', '마스크/손 소독제'
      ]
    },
    {
      title:'필수 준비물',
      content: [
        '숙소',
      ],
    },
    {
      title: '트립로그에서 챙기기',
      content: [
        '여행 일정짜기', '가계부 짜기'
      ]
    },
    {
      title: '통신/교통 준비',
      content: [
        '여행지 교통편'
      ]
    },
    {
      title: '즐길거리 준비',
      content: [
        '관광 정보 확인하기', '맛집 정보 확인하기'
      ]
    },
  ]
  return (
    <>
      <Nav/>
      <Container className='m-auto mt-5'>
        <h1 className='fw-bold lh-base mt-5 mb-5'>여행 준비<br></br>체크리스트</h1>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>기본 짐싸기</Accordion.Header>
            <Accordion.Body>
              <Form>
                {checkListData[0].content.map(function(a, i){
                  return(
                    <>
                      <Form.Check type='checkbox'>
                        <Form.Check.Input type='checkbox' />
                        <Form.Check.Label>{checkListData[0].content[i]}</Form.Check.Label>
                      </Form.Check>
                    </>
                  )}
                )}
                <input value={checklist[0].items[0].item}></input>
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
              </Form>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>필수 준비물</Accordion.Header>
            <Accordion.Body>
              <Form>
                {checkListData[1].content.map(function(a, i){
                  return(
                    <>
                      <Form.Check type='checkbox'>
                        <Form.Check.Input type='checkbox' />
                        <Form.Check.Label>{checkListData[1].content[i]}</Form.Check.Label>
                      </Form.Check>
                    </>
                  )}
                )}
              </Form>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>트립로그에서 챙기기</Accordion.Header>
            <Accordion.Body>
              <Form>
                {checkListData[2].content.map(function(a, i){
                  return(
                    <>
                      <Form.Check type='checkbox'>
                        <Form.Check.Input type='checkbox' />
                        <Form.Check.Label>{checkListData[2].content[i]}</Form.Check.Label>
                      </Form.Check>
                    </>
                  )}
                )}
              </Form>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>통신/교통 준비</Accordion.Header>
            <Accordion.Body>
              <Form>
                {checkListData[3].content.map(function(a, i){
                  return(
                    <>
                      <Form.Check type='checkbox'>
                        <Form.Check.Input type='checkbox' />
                        <Form.Check.Label>{checkListData[3].content[i]}</Form.Check.Label>
                      </Form.Check>
                    </>
                  )}
                )}
              </Form>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4">
            <Accordion.Header>즐길거리 준비</Accordion.Header>
            <Accordion.Body>
              <Form>
                {checkListData[4].content.map(function(a, i){
                  return(
                    <>
                      <Form.Check type='checkbox'>
                        <Form.Check.Input type='checkbox' />
                        <Form.Check.Label>{checkListData[4].content[i]}</Form.Check.Label>
                      </Form.Check>
                    </>
                  )}
                )}
              </Form>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      {/* {checklist[0].items.map(function (a, i) {
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
      <Button className="m-3">추가</Button> */}
      </Container>
      <Footer/>
    </>
  );
}
