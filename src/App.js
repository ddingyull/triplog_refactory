import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import Main from './pages/Main/Main';
import SubMain from './pages/SubMain/SubMain';
import Plan from './pages/Plan/Plan';
// import Lists from './pages/Lists/Lists';
import List from './pages/Lists/List';
import DetailPage from './pages/Detail/DetailPage';
import MyPage from './pages/MyPage/MyPage2';
import Budget from './pages/Budget/Budget';
import CheckList from './pages/CheckList/CheckList';
import Login from './pages/Login/Login';
import Users from './pages/Users/Users';
import KakaoRedirectHandler from './components/KakaoRedirectHandler.js';
import MainIntro from './pages/Main/MainIntro';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Routes>
      <Route path="/MainIntro" element={<MainIntro />} />
      <Route path="/" element={<Main />} />
      <Route path="/SubMain/:areaCode" element={<SubMain />} />
      <Route path="/Plan/:areaCode" element={<Plan />} />
      {/* <Route path="/lists/:areaCode" element={<Lists />} />
      <Route path="/detail/:contentId" element={<Detail />} /> */}
      <Route path="/list/:region/:type" element={<List />} />
      <Route path="/detail/:region/:contentid" element={<DetailPage />} />
      <Route path="/MyPage/:nickName/:option" element={<MyPage />} />
      <Route path="/Budget" element={<Budget />} />
      <Route path="/CheckList" element={<CheckList />} />
      <Route path="/login" element={<Login />} />
      <Route path="/users" element={<Users />} />
      <Route path="/oauth/callback/kakao" element={<KakaoRedirectHandler />} />
    </Routes>
  );
}

export default App;
