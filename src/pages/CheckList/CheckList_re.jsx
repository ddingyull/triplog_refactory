import {
  Container,
  Accordion,
  Button,
  Row,
  InputGroup,
  Form,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { FaTrash } from 'react-icons/fa';
// 리듀서
import { useDispatch, useSelector } from 'react-redux';

export default function CheckListRe() {
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
        <Container className="m-auto mt-5 ">
          <h1 className="fw-bold lh-base mt-5 mb-4">
            <span style={{ color: '#198754' }}>{nickName}</span>
            <span>님의</span>
            <br></br>
            <span>체크리스트📝 입니다</span>
          </h1>
          <Accordion
            defaultActiveKey={[0]}
            alwaysOpen
            className="container col-lg-10"
          >
            {checklist.items.map(function (a, i) {
              return (
                <>
                  <Accordion.Item eventKey={i}>
                    <Accordion.Header>
                      {checklist.items[i].title}
                    </Accordion.Header>
                    <Accordion.Body>
                      <Form>
                        {checklist.items[i].content.map(function (b, j) {
                          return (
                            <>
                              <Form.Check
                                type="checkbox"
                                className="d-flex justify-content-between"
                              >
                                <Form.Check.Input
                                  type="checkbox"
                                  onClick={handleToggle(b)}
                                  checked={checked.indexOf(b) !== -1}
                                />
                                <Form.Check.Label>
                                  {checklist.items[i].content[j]}
                                </Form.Check.Label>
                                <FaTrash
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
          </Accordion>
          {/* <div className="container ">
            <h4 calssName="fw-bold text-center">내 체크리스트 저장하기!</h4>
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
          </div> */}
        </Container>
      </>
    );
  }
}
