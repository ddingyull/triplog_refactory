import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import Main from './pages/Main/Main';
import SubMain from './pages/SubMain/SubMain';
import Plan from './pages/Plan/Plan';
import Lists from './pages/Lists/Lists';
import Detail from './pages/Detail/Detail';
import MyPage from './pages/MyPage/MyPage';
import Budget from './pages/Budget/Budget';
import CheckList from './pages/CheckList/CheckList';
import User from './pages/User/User';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/SubMain/" element={<SubMain />} />
        <Route path="/Plan" element={<Plan />} />
        <Route path="/lists" element={<Lists />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/MyPage" element={<MyPage />} />
        <Route path="/Budget" element={<Budget />} />
        <Route path="/CheckList" element={<CheckList />} />
        <Route path="/User" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
