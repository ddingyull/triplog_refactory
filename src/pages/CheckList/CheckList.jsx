import {
  Container,
  Accordion,
  Button,
  Row,
  InputGroup,
  Form,
  Col,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import {
  FaArrowAltCircleRight,
  FaArrowRight,
  FaRegArrowAltCircleRight,
  FaTrash,
} from 'react-icons/fa';
// 리듀서
import { useDispatch, useSelector } from 'react-redux';

export default function CheckList() {
  const dispatch = useDispatch();
  const nickName = useSelector((state) => state.users.userNickName);

  const inputRef = useRef();
  const [checked, setChecked] = useState([]);
  const [checklist, setChecklist] = useState([]);
  const [okay, setOkay] = useState(false);

  const callApi = async () => {
    axios
      .post('http://localhost:4000/checklist', { nickName })

      .then((res) => {
        console.log(res.data);
        setChecklist(res.data);
        setChecked(res.data.checked);
        setOkay(true);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    callApi();
  }, []);

  const handleToggle = (b) => () => {
    // console.log(b);
    const currentIndex = checked.indexOf(b);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(b);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  /* 추가 인풋 */
  let input = '';
  const changeHandler = (e) => {
    console.log(e.target.value);
    input = e.target.value;
  };

  if (okay) {
    return (
      <>
        <Nav />
        <Container className="m-auto mt-5 col-8">
          <h1 className="fw-bold lh-base mt-5 mb-5">
            <span style={{ color: '#198754' }}>{nickName}</span>님, 여행 준비
            <br></br>체크리스트
          </h1>
          <Accordion
            defaultActiveKey={[0]}
            alwaysOpen
            className="container col-lg-6"
          >
            {checklist.items.map(function (a, i) {
              return (
                <>
                  <Accordion.Item eventKey={i}>
                    <Accordion.Header>
                      {checklist.items[i].title}
                    </Accordion.Header>
                    <Accordion.Body className="text-start">
                      <Form>
                        {checklist.items[i].content.map(function (b, j) {
                          return (
                            <>
                              <Form.Check type="checkbox">
                                <Form.Check.Input
                                  type="checkbox"
                                  onClick={handleToggle(b)}
                                  checked={checked.indexOf(b) !== -1}
                                />
                                <Form.Check.Label className="col-10">
                                  {checklist.items[i].content[j]}
                                </Form.Check.Label>
                                <FaTrash
                                  className="col-2"
                                  style={{ color: 'grey' }}
                                  onClick={() => {
                                    axios
                                      .delete(
                                        'http://localhost:4000/checklist/deleteItem',
                                        {
                                          data: {
                                            nickName: nickName,
                                            title: checklist.items[i].title,
                                            item: checklist.items[i].content[j],
                                          },
                                        }
                                      )
                                      .then((res) => {
                                        console.log(res.data);
                                      })
                                      .catch(() => {
                                        console.log('실패');
                                      });
                                  }}
                                />
                              </Form.Check>
                            </>
                          );
                        })}
                        <InputGroup className="mt-3">
                          <Form.Control
                            placeholder="아이템 추가하기🤗"
                            // aria-label="Recipient's username"
                            // aria-describedby="basic-addon2"
                            onChange={(e) => changeHandler(e)}
                          />
                          <Button
                            variant="success"
                            id="button-addon2"
                            onClick={() => {
                              axios
                                .post(
                                  'http://localhost:4000/checklist/addItem',
                                  {
                                    nickName: nickName,
                                    title: checklist.items[i].title,
                                    item: input,
                                  }
                                )
                                .then((res) => {
                                  console.log(res.data);
                                })
                                .catch(() => {
                                  console.log('실패');
                                });
                            }}
                          >
                            추가
                          </Button>
                        </InputGroup>
                      </Form>
                    </Accordion.Body>
                  </Accordion.Item>
                </>
              );
            })}
            <Row className="mt-3 mx-1">
              <Col>
                <h5 calssName="fw-bold text-center">
                  체크리스트 저장하기{' '}
                  <FaArrowRight style={{ color: '#198754' }} />
                </h5>
              </Col>
              <Col className="text-end">
                <Button
                  variant="success"
                  onClick={() => {
                    axios
                      .post('http://localhost:4000/checklist/checked', {
                        nickName: nickName,
                        checked: checked,
                      })
                      .then((res) => console.log(res.data))
                      .catch(() => console.log('실패'));
                  }}
                >
                  저장
                </Button>
              </Col>
            </Row>
          </Accordion>
        </Container>
        <Footer />
      </>
    );
  }
}
