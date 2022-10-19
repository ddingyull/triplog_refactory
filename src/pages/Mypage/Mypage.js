import {Routes, Route } from 'react-router-dom';


import MypageMain from './MypageMain';
import MyInfo from './MyInfo';
import MyCancel from './MyInfo';
import MyReview from './MyReview';

export default function Mypage() {
  return (
    <>
    <Routes>
        <Route path='/' element={ <MypageMain /> } />
        <Route path='/myinfo' element={<MyInfo />}/>
        <Route path='/cancel' element={<MyCancel />}/>
        <Route path='/review' element={<MyReview />} />
    </Routes>
    </>
  );
}
