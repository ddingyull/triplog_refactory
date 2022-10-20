import { Card, Stack, Badge, Col, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';


export default function Item_Plan(){
  return(
      <Stack className="d-flex m-3 shadow-sm" direction="horizontal" gap={3} style={{height:"4rem"}}>
        {/* <div className='border border-left border-light'></div> */}
        <Badge className='bg-success roundedCircle text-center' style={{width:"1.4rem", height:"1.4rem"}}>
          1
        </Badge>

        <Stack className='col-9 d-flex flex-column my-auto'>
          <Title className='m-1 fs-5'>동문 재래 시장</Title>
          <Title className='m-1 fs-6'>관광 . 제주 시내</Title>
        </Stack>
      </Stack>
  )
}

// style-components
const Title = styled.p`
  font: 2rem/1 'Inter'
`

