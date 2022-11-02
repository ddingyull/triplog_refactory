import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faFaceSmile } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Logout from '../pages/Login/Logout.jsx';

export default function NavHeader() {
  const state = useSelector((state) => state.users);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="shadow-sm">
        <Container className="text-center">
          <Navbar.Brand href="/" className="fw-bolder col-2">
            TripLog
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="d-block d-lg-none"
          />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            style={{ fontSize: '0.9rem' }}
            className="col-8"
          >
            <Nav className="m-auto ">
              <NavDropdown
                title="여행지"
                id="collasible-nav-dropdown"
                className="ms-4"
              >
                <NavDropdown.Item href="#action/3.1">전체</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">서울</NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
              <Nav.Link href="/Plan" className="ms-4">
                내 여행 짜기
              </Nav.Link>
              <Nav.Link href="/Plan" className="ms-4">
                여행 준비하기
              </Nav.Link>
              <Nav.Link href="/Detail" className="ms-4">
                디테일
              </Nav.Link>
              <Nav.Link href="/SubMain" className="ms-4">
                서브메인
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Nav className="col-2 d-sm-none d-lg-block">
            <Nav.Link href="/Login" className="d-sm-none d-md-inline-block">
              {state.isLogin === true ? (
                <Logout />
              ) : (
                <FontAwesomeIcon icon={faUser} />
              )}
            </Nav.Link>
            <Nav.Link href="/MyPage" className="d-sm-none d-md-inline-block">
              <FontAwesomeIcon icon={faFaceSmile} />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
