import React, { useEffect } from 'react'
import axios from 'axios'

function Logout(props){

    useEffect(() => {
        axios.get("/api/hello").then((response) => {
          console.log(response);
        });
      }, []);

      const onClickHandler = () =>{
          axios.get('/api/users/logout')
          .then(response => {
              if(response.data.success){
                props.history.push("Login")
              }
          })
      }

    return(
            <button onClick={onClickHandler}>
                로그아웃
            </button>
    )
}

export default Logout