import { Container, Row } from 'react-bootstrap';
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import Welcome from './Welcome';
// import KakaoMap from './Map_SubMenu/KakaoMap'
import SelectList from './SelectList'
import Planner from './Planner';
// import Map_SubMenu from './Map_SubMenu/Map_SubMenu';




export default function Plan() {
  
  return (
    <>
      <Nav/>
      <Container>
      <Welcome/>
      {/* <KakaoMap/> */}
      {/* <Container className='d-flex justify-content-center gap-3'> */}
        <Row sm={1} md={1} lg={1} xl={2} className='d-flex justify-content-center'>
          <SelectList/>
          <Planner/>
          {/* <Map_SubMenu/> */}
        </Row>
      {/* </Container> */}
      </Container>
      <Footer/>
    </>
  );
}
