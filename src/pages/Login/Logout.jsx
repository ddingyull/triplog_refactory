import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { logout } from '../../store/modules/users';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSolid,
  faUser,
  faFaceSmile,
} from '@fortawesome/free-solid-svg-icons';

function Logout(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function logout() {
    dispatch(logout());
    navigate('/');
  }

  return (
    <button onClick={() => logout()}>
      <FontAwesomeIcon icon="fa-arrow-right-from-bracket" />
    </button>
  );
}

export default Logout;
