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
import CheckList_BE from './pages/CheckList/CheckList_BE';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/SubMain/" element={<SubMain />} />
        <Route path="/Plan" element={<Plan />} />
        <Route path="/lists/:areaCode" element={<Lists />} />
        <Route path="/detail/:contentId" element={<Detail />} />
        <Route path="/MyPage" element={<MyPage />} />
        <Route path="/Budget" element={<Budget />} />
        <Route path="/CheckList" element={<CheckList_BE />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
