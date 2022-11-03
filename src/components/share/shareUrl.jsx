import React from 'react';
import styled from 'styled-components';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FaShare } from 'react-icons/fa';

const URLShareButton = styled.button`
  width: 24px;
  height: 24px;
  color: white;
  border-radius: 24px;
  border: 0px;
  font-weight: 800;
  font-size: 10px;
  margin-bottom: 7px;
  cursor: pointer;
  background-color: #198754;
  &:hover {
    background-color: #157347;
    border: 1px solid #146c43;
  }
`;

// window 객체에서 현재 url 가져오기
const currentUrl = window.location.href;

export default function ShareUrl() {
  return (
    <>
      <CopyToClipboard text={currentUrl}>
        <URLShareButton>
          <FaShare />
        </URLShareButton>
      </CopyToClipboard>
    </>
  );
}
