import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import Main from './pages/Main/Main';
import SubMain from './pages/SubMain/SubMain';
import Plan from './pages/Plan/Plan';
import Lists from './pages/Lists/Lists';
import Detail from './pages/Detail/Detail';
import MyPage from './pages/Mypage(참고)/Mypage';
import Budget from './pages/Budget/Budget';
import CheckList from './pages/CheckList/CheckList';
import Login from './pages/Login/Login';
import Users from './pages/Users/Users';
import KakaoRedirectHandler from './components/KakaoRedirectHandler.js';
// 리덕스 세팅
import { Provider } from 'react-redux';
import store from './store/modules/store'


function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/SubMain/" element={<SubMain />} />
        <Route path="/Plan" element={<Plan />} />
        <Route path="/lists/:areaCode" element={<Lists />} />
        <Route path="/detail/:contentId" element={<Detail />} />
        <Route path="/MyPage" element={<MyPage />} />
        <Route path="/Budget" element={<Budget />} />
        <Route path="/CheckList" element={<CheckList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<Users />} />
        <Route path="/oauth/callback/kakao" element={<KakaoRedirectHandler />} />
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
