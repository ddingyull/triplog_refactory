import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { logout } from '../../store/modules/users';

function Logout(props){
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function logout(){
    dispatch(logout());
    navigate('/');
  }

    // useEffect(() => {
    //     axios.get("/api/hello").then((response) => {
    //       console.log(response);
    //     });
    //   }, []);

      // const onClickHandler = () =>{
      //     axios.get('/api/users/logout')
      //     .then(response => {
      //         if(response.data.success){
      //           props.history.push("Login")
      //         }
      //     })
      // }

    return(
        <button onClick={() => logout()}>
          로그아웃
        </button>
    )
}

export default Logout