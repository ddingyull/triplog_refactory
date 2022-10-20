import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';


export default function CardItemLink({ width, height}){
  return(
      <CardItemLink width={width} height={height}>
        <img src ="/images/map_ex.png"></img>
      </CardItemLink>
  )
}

//style-components
const CardItem = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: .65em;
`