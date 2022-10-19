import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function MypageNav() {
  return (
    <>
      <Nav className="justify-content-center">
        <div className="col-3">
          <div className="nav_bar">
            <span>
              <a href="/mypage">나의 주문 내역</a>
            </span>
            <span>
              <a href="#">주문 조회</a>
            </span>
            <span>
              <a href="/mypage/cancelinfo">취소/환불 현황</a>
            </span>
          </div>
          <div className="nav_bar">
            <span>
              <a href="#">쿠폰/마일리지</a>
            </span>
            <span>
              <a href="#">나의 쿠폰</a>
            </span>
            <span>
              <a href="#">나의 마일리지</a>
            </span>
          </div>
          <div className="nav_bar">
            <span>
              <a href="#">회원정보</a>
            </span>
            <span>
              <a href="/mypage/userinfo">회원정보 변경</a>
            </span>
            <span>
              <a href="#">회원탈퇴</a>
            </span>
          </div>
          <div className="nav_bar">
            <span>
              <a href="#">상품후기</a>
            </span>
            <span>
              <a href="/mypage/reviewinfo">후기 목록</a>
            </span>
          </div>
        </div>
      </Nav>
    </>
  );
}

const Nav = styled.div`

  .col-3 {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    margin-top: 50px;

    .nav_bar {
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;

      a {
        text-decoration: none;
        color: black;

        &:hover {
          text-decoration: underline;
        }
      }

      span {
        margin: 10% 0 0 10%;
      }

      span:nth-of-type(1) {
        font-size: 18px;
        font-weight: bold;
      }

      span:nth-of-type(2),
      span:nth-of-type(3) {
        margin-top: 10px;
        color: #5b5656;

        &.on {
          font-weight: bold;
        }
      }
    }
  }
`;
