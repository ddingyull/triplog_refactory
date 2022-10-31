import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import MypageMain from './MyPageMain';
import MyTrip from './MyTrip';
import MyReview from './MyReview';
import MyPick from './MyPick';

export default function MyPage() {

  // useEffect (() => {
  //   AuthRoute();
  // }, []);
  
  // const AuthRoute = function() {
  //   return (
  //     isLogin ? 
  //       <MyPage/> 
  //       : alert('로그인이 필요한 페이지입니다'),
  //         Navigate('/Login')
  //       )
  //         }

  // const Navigate = useNavigate();
  // const isLogin = localStorage.getItem("token");

    return (
      <>
      <Routes>
          <Route path='/' element={ <MypageMain /> } />
          <Route path='/mytrip' element={<MyTrip />}/>
          <Route path='/myreview' element={<MyReview />}/>
          <Route path='/mypick' element={<MyPick />} />
      </Routes>
      </>
    );
}