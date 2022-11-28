import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import Main from './pages/Main/Main';
import SubMain from './pages/SubMain/SubMain';
import Plan from './pages/Plan/Plan';
import List from './pages/Lists/List';
import DetailPage from './pages/Detail/DetailPage';
import MyPage from './pages/MyPage/MyPage';
import Budget from './pages/Budget/Budget';
import CheckList from './pages/CheckList/CheckList';
import Login from './pages/Login/Login';
import Users from './pages/Users/Users';
import KakaoRedirectHandler from './components/KakaoRedirectHandler.js';
import 'bootstrap/dist/css/bootstrap.min.css';
// // 리덕스 세팅
// import { Provider, useSelector } from 'react-redux';
// import { configureStore } from '@reduxjs/toolkit';
// import rootReducer from './store';
// const reduxDevTool =
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// const store = configureStore({ reducer: rootReducer }, reduxDevTool);

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/SubMain/:areaCode" element={<SubMain />} />
      <Route path="/Plan/:areaCode" element={<Plan />} />
      <Route path="/list/:region/:type" element={<List />} />
      <Route path="/detail/:region/:contentid" element={<DetailPage />} />
      <Route path="/MyPage" element={<MyPage />} />
      <Route path="/Budget" element={<Budget />} />
      <Route path="/CheckList" element={<CheckList />} />
      <Route path="/login" element={<Login />} />
      <Route path="/users" element={<Users />} />
      <Route path="/oauth/callback/kakao" element={<KakaoRedirectHandler />} />
    </Routes>
  );
}

export default App;
