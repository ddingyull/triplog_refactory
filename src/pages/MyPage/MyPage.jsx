import { useState, useEffect } from 'react';
import { Route, useNavigate } from "react-router-dom";

export default function MyPage() {
    const Navigate = useNavigate();

    const isLogin = localStorage.getItem("token");

    const AuthRoute = function() {
        return (
          isLogin ? 
            <MyPage/> 
            : alert('로그인이 필요한 페이지입니다'),
              Navigate('/Login')
            )
              }

    useEffect (() => {
        AuthRoute();
      }, []);

    return (
        <div>마이페이지 입니다.</div>
    );
}