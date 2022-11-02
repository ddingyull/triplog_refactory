import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faFaceSmile,
  faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';

export default function Logout({ logout }) {
  return (
    <Button onClick={logout}>
      <FontAwesomeIcon icon={faArrowRightFromBracket} />
    </Button>
  );
}
