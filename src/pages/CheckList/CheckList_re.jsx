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
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

export default function CheckListRe() {
  const dispatch = useDispatch();
  const nickName = useSelector((state) => state.users.userNickName);
  const check = useSelector((state) => state.check);

  const inputRef = useRef();
  const [checked, setChecked] = useState([]);
  const [checklist, setChecklist] = useState([]);
  const [okay, setOkay] = useState(false);
  const [update, setUpdate] = useState(false);
  const [text, setText] = useState('');

  const callApi = async () => {
    axios
      .post('http://13.125.234.1:4000/checklist', { nickName })

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
  }, [update]);

  const handleToggle = (b) => () => {
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
    setText(e.target.value);
  };

  if (okay) {
    return (
      <>
        <Container className="m-auto mx-5 col-9">
          <AccordionCustom style={{ width: '130%' }}>
            <Accordion
              defaultActiveKey={[0]}
              alwaysOpen
              className="container mx-3"
            >
              {checklist.items.map(function (a, i) {
                return (
                  <>
                    <Accordion.Item eventKey={i} key={i}>
                      <Accordion.Header>
                        {checklist.items[i].title}
                      </Accordion.Header>
                      <Accordion.Body className="text-start">
                        <Form>
                          {checklist.items[i].content.map(function (b, j) {
                            return (
                              <>
                                <Form.Check type="checkbox" key={i}>
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
                                          'http://13.125.234.1:4000/checklist/deleteItem',
                                          {
                                            data: {
                                              nickName: nickName,
                                              title: checklist.items[i].title,
                                              item: checklist.items[i].content[
                                                j
                                              ],
                                            },
                                          }
                                        )
                                        .then((res) => {
                                          console.log(res.data);
                                          setUpdate(!update);
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
                              onChange={(e) => changeHandler(e)}
                              value={text}
                            />
                            <Button
                              variant="success"
                              id="button-addon2"
                              onClick={() => {
                                axios
                                  .post(
                                    'http://13.125.234.1:4000/checklist/addItem',
                                    {
                                      nickName: nickName,
                                      title: checklist.items[i].title,
                                      item: text,
                                    }
                                  )
                                  .then((res) => {
                                    console.log(res.data);
                                    setText('');
                                    setUpdate(!update);
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
                <Col className="text-end">
                  <Button
                    variant="success"
                    onClick={() => {
                      axios
                        .post('http://13.125.234.1:4000/checklist/checked', {
                          nickName: nickName,
                          checked: checked,
                        })
                        .then((res) => {
                          console.log(res.data);
                          setUpdate(!update);
                        })
                        .catch(() => console.log('실패'));
                    }}
                  >
                    저장
                  </Button>
                </Col>
              </Row>
            </Accordion>
          </AccordionCustom>
        </Container>
      </>
    );
  }
}

const AccordionCustom = styled.div`
  .accordion-button:not(.collapsed) {
    color: #ffffff;
    background-color: #198754;
    box-shadow: inset 0 -1px 0 rgb(0 0 0 / 13%);
  }
  .accordion-button:focus,
  .accordion-button:active {
    outline: none !important;
    box-shadow: none !important;
    -webkit-box-shadow: none !important;
  }
  input[type='checkbox']:checked {
    background: #198754;
    border-color: #198754;
  }
`;
