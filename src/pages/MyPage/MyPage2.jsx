import { Routes, Route } from 'react-router-dom';
import MypageMain from './content/MypageMain';
import MyTrip from './content/MyTrip';
import Review from './content/Review';

export default function Mypage() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MypageMain />} />
        <Route path="/mytrip" element={<MyTrip />} />
        {/* <Route path='/checklist' element={<CheckList />}/> */}
        {/* <Route path='/budget' element={<Budget />} /> */}
        <Route path="/review" element={<Review />} />
      </Routes>
    </>
  );
}
