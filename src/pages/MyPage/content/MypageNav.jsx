import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function MypageNav() {
  return (
    <>
      <Nav className="justify-content-center">
        <div className="col-3">
          <div className="nav_bar">
            <div style={{width:'10rem', height:'10rem'}} className='bg-success rounded text-center'>TripLog</div>
            <span>
              <p href="/mypage">나의 TripLog</p>
            </span>
            <span>
              <a href="#">여행 조회</a>
            </span>
            <span>
              <a href="/mypage/cancelinfo">체크리스트 조회</a>
            </span>
            <span>
              <a href="/mypage/cancelinfo">가계부 조회</a>
            </span>
          </div>

          <div className="nav_bar">
            <span>
              <p href="#">활동 내역</p>
            </span>
            <span>
              <a href="/mypage/reviewinfo">리뷰</a>
            </span>
            <span>
              <a href="/mypage/reviewinfo">찜한 곳</a>
            </span>
          </div>

          <div className="nav_bar">
            <span>
              <p href="#">회원정보</p>
            </span>
            <span>
              <a href="#">로그아웃</a>
            </span>
            <span>
              <a href="/mypage/userinfo">회원정보 변경</a>
            </span>
            <span>
              <a href="#">회원탈퇴</a>
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
    /* margin-top: 50px; */

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
        font-size: 1.2rem;
        font-weight: bold;
      }

      span:nth-of-type(2),
      span:nth-of-type(3), 
      span:nth-of-type(4) {
        margin-top: .5rem;
        color: #5b5656;

        &.on {
          font-weight: bold;
        }
    }
  }}
`;
