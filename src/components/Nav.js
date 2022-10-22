import { Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faFaceSmile } from "@fortawesome/free-solid-svg-icons";

export default function NavHeader() {
  return (
    <>
        <Navbar collapseOnSelect expand="lg" className='shadow-sm'>
      <Container className='text-center'>
        <Navbar.Brand href="/" className='fw-bolder col-2'>TripLog</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" style={{fontSize:"0.9rem"}} className="col-8" >
          <Nav className="m-auto " >
            <NavDropdown title="여행지" id="collasible-nav-dropdown" className='ms-4'>
              <NavDropdown.Item href="#action/3.1">전체</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                서울
              </NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <Nav.Link href="/Plan" className='ms-4'>내 여행 짜기</Nav.Link>
            <Nav.Link href="/Plan" className='ms-4'>여행 준비하기</Nav.Link>
            <Nav.Link href="/Detail" className='ms-4'>디테일</Nav.Link>
            <Nav.Link href="/SubMain" className='ms-4'>서브메인</Nav.Link>

          </Nav>
        </Navbar.Collapse>
        <Nav className='col-2'>
            <Nav.Link href="/Login"><FontAwesomeIcon icon={faUser}/></Nav.Link>
            <Nav.Link href="/MyPage"><FontAwesomeIcon icon={faFaceSmile} /></Nav.Link>
          </Nav>
      </Container>
    </Navbar>
    </>
  );
}