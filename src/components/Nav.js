import { useState } from 'react';
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Form,
  Button,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faFaceSmile,
  faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import Logout from '../pages/Login/Logout';
import { logout } from '../store/modules/users';

export default function NavHeader() {
  const state = useSelector((state) => state.users);
  console.log(state);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const reduxLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <>
      <Navbar expand="lg" className="shadow-sm">
        <Container className="text-center">
          <Navbar.Brand href="/" className="fw-bolder col-4">
            TripLog
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '70px' }}
              navbarScroll
            >
              {/* <NavDropdown title="여행지" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">여행지</NavDropdown.Item>
                <NavDropdown.Item href="#action4">여행지</NavDropdown.Item>
              </NavDropdown> */}
              <Nav.Link href="/lists/1" className="ms-4">
                서울
              </Nav.Link>
              <Nav.Link href="/lists/6" className="ms-4">
                부산
              </Nav.Link>
              <Nav.Link href="/lists/32" className="ms-4">
                강원
              </Nav.Link>
              <Nav.Link href="/lists/35" className="ms-4">
                경주
              </Nav.Link>
              <Nav.Link href="/lists/37" className="ms-4">
                전주
              </Nav.Link>
              <Nav.Link href="/lists/39" className="ms-4">
                제주
              </Nav.Link>
            </Nav>
            <Nav className="d-flex">
              <Nav.Link
                href="/Login"
                variant="outline-success"
                className="fs-5"
                // onClick={() => setShow(!show)}
              >
                {state.isLogin === false ? (
                  <FontAwesomeIcon icon={faUser} />
                ) : null}
              </Nav.Link>

              <Nav.Link variant="outline-success" className="fs-5">
                {state.isLogin === true ? (
                  <FontAwesomeIcon
                    icon={faArrowRightFromBracket}
                    onClick={() => {
                      reduxLogout();
                    }}
                  />
                ) : null}
              </Nav.Link>
              <Nav.Link href="/MyPage" className="d-sm-none d-md-inline-block">
                <FontAwesomeIcon icon={faFaceSmile} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
