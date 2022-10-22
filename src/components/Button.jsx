import { Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

const BtnModule = styled.a`
  width: inherit;
  border-radius: 5px;
  padding: .9rem;
  margin: 4px;
  text-align: center;
  text-decoration: none;
  font-weight: 700;
  color: ${(props) => props.textColor};
  background-color: ${(props) => props.backgroundColor};
  transition: .3s;

  &:hover {
    color:${(props) => props.hoverColor};
    background: ${(props) => props.hoverBackgroundColor};
  }
  `

export default function Btn ({text, clickEvent, textColor, backgroundColor, hoverColor, hoverBackgroundColor}) {
  return(
      <BtnModule 
        type="submit"
        onClick={clickEvent}
        textColor={textColor}
        backgroundColor={backgroundColor}
        hoverColor={hoverColor}
        hoverBackgroundColor={hoverBackgroundColor}
        >
        {text}
      </BtnModule>
  )
}