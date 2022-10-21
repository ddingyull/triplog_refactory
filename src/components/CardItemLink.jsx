import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';


export default function CardItemLink({imgSrc}){
  return(
    <Card style={{ width: '18rem' }} className="m-3 d-inline-block">
      <Card.Img variant="top" src="/images/map_ex.png" />
      <Card.Img variant="top" src={imgSrc} style={{Maxwidth:"900px"}}/>
      <Card.Body>
      {/* <Card.Title>Card Title</Card.Title> */}
      {/* <Button variant="success">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  )
}

//style-components
// const CardItem = styled.div`
//   width: ${(props) => props.width};
//   height: ${(props) => props.height};
//   border-radius: .65em;
// `