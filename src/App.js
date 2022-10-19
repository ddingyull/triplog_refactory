import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import Mypage from './pages/Mypage/Mypage';
import Main from './pages/Main/Main';
import Cart from './pages/Cart/Cart';
import Lists from './pages/Lists/Lists';
import Owner from './pages/Owner/Owner';
import Login from './pages/Login/Login';
import Detail from './pages/Detail/Detail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/mypage/" element={<Mypage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/lists" element={<Lists />} />
        <Route path="/owner" element={<Owner />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
