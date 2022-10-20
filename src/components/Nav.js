import { Container, Nav, Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NavHeader() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">TripLog</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/lists">미정</Nav.Link>
            <Nav.Link href="/detail">미정</Nav.Link>
            <Nav.Link href="/aboutus">미정</Nav.Link>
            <Nav.Link href="/login">미정</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}