import { Container, Card } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import Form from '../../components/Form';

export default function Login() {
  return(
    <>
      <Nav/>
        <Container style={{marginTop:'5rem'}}>
          <Card style={{width:'30rem'}} className='m-auto'>
            <Form/>
          </Card>
        </Container>
      <Footer/>
    </>
  )
}