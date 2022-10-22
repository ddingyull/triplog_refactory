import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

export default function Forminput({id, errMessage}) {
  return(
    <Form className='mb-2'>
      <Form.Label className='d-block mb-1'>{id}</Form.Label>
      <Form.Control type="email" placeholder="이메일 입력" className='shadow-sm p-3 w-full border' />
      <Form.Text className="text-danger m-1">
          {errMessage}
      </Form.Text>
    </Form>
  )
}
