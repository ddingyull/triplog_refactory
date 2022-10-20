import { Card, Stack, Badge, Col, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';


export default function Memo_Plan(){
  return(
      <Stack className="d-flex m-3 shadow-sm" direction="horizontal" gap={3} style={{height:"4rem"}}>
        {/* <div className='border border-left border-light'></div> */}
        <Badge className='bg-warning roundedCircle text-center' style={{width:"1rem", height:"1rem"}}>
        |
        </Badge>

        <Stack className='col-9 d-flex flex-column my-auto'>
          <Title className='m-1 fs-5'>작성한 value값이 들어갈 예정</Title>
        </Stack>
      </Stack>
  )
}

// style-components
const Title = styled.p`
  font: 2rem/1 'Inter'
`