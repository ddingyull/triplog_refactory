import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";


// import MypageMain from './MypageMain';
// import MyInfo from './MyInfo';
// import MyCancel from './MyInfo';
// import MyReview from './MyReview';

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
          {/* <Route path='/' element={ <MypageMain /> } />
          <Route path='/mytrip' element={<MyInfo />}/>
          <Route path='/review' element={<MyCancel />}/>
          <Route path='/mypick' element={<MyReview />} /> */}
      </Routes>
      </>
    );
}