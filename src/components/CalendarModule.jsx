import React, { useState } from 'react';
import { Button, Modal, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import useNavigate from '';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import axios from 'axios';

//CalendarModule
function CalendarModule({ text, subText }) {
  const [value, onChange] = useState(new Date());
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const getDate = (e) => {
  //   const planDate = e.target.getAttribute('planDate');
  //   console.log(planDate);
  //   setShow(false);
  //   Navigate('/Plan')
  // }

  const getDate = (e) =>{
    const planDate = e.target.getAttribute('planDate');
    console.log(planDate);
    setShow(false);

    axios.post('http://localhost3000/몰라', {
      planDate : ''
    })
    .then((res) => {
      console.log('여행일자 전송 성공');
      // Navigate('/Plan')
    })
    .catch(()=>{
      console.log('실패');
    })

  }

  return (
    <>
    <Button variant="dark" onClick={handleShow}>
      날짜 선택하기
    </Button>

    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>TripLog</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div>
        <h4 className='text-center'>🛫 여행 날짜를 선택해주세요</h4>

      {value.length > 0 ? (
        <p className='text-center'>
          {moment(value[0]).format("YYYY년 MM월 DD일")}
          <span className='bold'> ~ </span> {moment(value[1]).format("MM월 DD일")}
        </p>
      ) : (
        <p className='text-center'>
          <span className='bold'>오늘:</span>{' '}
          {moment(value).format("YYYY년 MM월 DD일")}
        </p>
      )}

        <Calendar 
          minDate = {new Date()} 
          onChange={onChange} 
          selectRange={true}
          className='m-auto' />
    </div>
      </Modal.Body>
      <Modal.Footer>
        <Button 
          variant="secondary" 
          onClick={handleClose}>
          닫기
        </Button>
        <Button 
          variant="success" 
          plandate={'hello'}
          onClick={getDate}>
            선택 완료
        </Button>
    
      </Modal.Footer>
    </Modal>
  </>
  );
}

export default CalendarModule;