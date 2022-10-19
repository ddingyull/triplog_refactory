import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap'; 

import MypageNav from './main_content/MypageNav';
import OrderProgress from './main_content/OrderProgress';
import OrderSearch from './main_content/OrderSearch';
import CartSearch from './main_content/CartSearch'
import UserCard from './main_content/UserCard';

export default function MypageMain() {

  return (
    <>
    <Container style={{marginTop: '100px'}}>
        <Row> <UserCard /> </Row>
        <Row className="flex-wrap" style={{marginTop: '100px'}}>
            <Col md={3}><MypageNav /></Col>
            <Col>
                <OrderProgress />
                <OrderSearch />
                <CartSearch />
            </Col>
          </Row>
    </Container>
    </>
  );
}

