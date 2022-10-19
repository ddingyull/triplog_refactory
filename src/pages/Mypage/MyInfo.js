import {Container, Row, Col } from 'react-bootstrap'

import UserInfo from './main_content/UserInfo';
import MypageNav from './main_content/MypageNav';
import UserCard from './main_content/UserCard';

export default function MyCancel() {
  return (
    <>
    <UserCard />
    <Container>
      <Row style={{marginTop: '100px'}}>
        <Col md={3}> <MypageNav /> </Col>
        <Col> <UserInfo /></Col>
      </Row>
    </Container>
    </>
  );
}
