import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

import OrderList from './OrderList';


export default function OrderSearch() {
  return (
    <>
      <Header>
        <p>장바구니</p>
        <div className='d-flex align-items-center position-relative w-100'>
          <span className='position-absolute'>상품정보</span>
          <span className='position-absolute'>주문번호</span>
          <span className='position-absolute'>주문상태</span>
        </div>
      </Header>
      {/* 개수 state 설정 */}
      <OrderList />
    </>
  );
}

const Header = styled.div`
  margin-top: 13%;

  > p {
    font-size: 18px;
  }

  div {
    height: 50px;
    border-top: 2px solid black;
    border-bottom: 1px solid #9b9393;

    span {
      font-size: 16px;
      font-weight: bold;

      &:nth-of-type(1) {
        left: 15%
      }

      &:nth-of-type(2) {
        left: 63%
      }

      &:nth-of-type(3) {
        left: 85%
      }
    }
  }
`;
