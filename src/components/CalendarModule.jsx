import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';

import { Card, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CalendarModule({ text, subText }){

  const [value, onChange] = useState(new Date());

  return(
      <>
        <div className='my-5 ' style={{fontSize:'.9rem'}}> 
        <Calendar onChange={onChange} selectRange={true}/> 


          {value.length > 0 ? (
            <p className='text-center fs-6'>🇰🇷 여행 기간 
              {moment(value[0]).format("YYYY년 MM월 DD일")}
            <span className='bold'> - </span> {moment(value[1]).format("MM월 DD일")}
            </p>
              ) : (
            <p className='text-center fs-5'>
            <span className='bold p-3'> 오늘 </span>{' '}
              {moment(value).format("YYYY년 MM월 DD일")}
            </p>
            )}
        </div>
    </>
  )
}