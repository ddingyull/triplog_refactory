import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import '../../styles/globalStyle'
import Welcome from './Welcome/Welcome';
import Map_SubMenu from './Map_SubMenu/Map_SubMenu';
import Planner from './Planner/Planner';
import { Container } from 'react-bootstrap';


export default function Plan() {
  
  return (
    <>
      <Nav/>
      <Welcome/>
      <Container className='d-flex justify-content-center gap-3'>
        <Map_SubMenu/>
        <Planner/>
      </Container>
      <Footer/>
    </>
  );
}
