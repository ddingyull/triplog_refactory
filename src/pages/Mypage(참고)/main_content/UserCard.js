import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCartShopping, faTicket, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

export default function UserCard() {
  return (
    <>
      <Wrapper className="container-fluid">
        <div className="row row-1 justify-content-center">
          <p>My page</p>
          <div className="col-10 d-flex position-relative" id="user_info">
            <div className="user_img position-absolute">
                <FontAwesomeIcon icon={faUser} size="5x" className='icon'/>
            </div>

            <span>
              닉네임
              <span>회원정보변경</span>
            </span>

            <div className='d-flex position-absolute'>
              <div className="sub_nav d-flex flex-column text-center">
                <FontAwesomeIcon icon={faCartShopping} className='icon'/>
                <span className="mt-3">장바구니</span>
                <span>2</span>
              </div>
              <div className="sub_nav d-flex flex-column text-center">
                  <FontAwesomeIcon icon={faTicket} className='icon'/>
                <span className="mt-3">쿠폰</span>
                <span>2</span>
              </div>
              <div className="sub_nav d-flex flex-column text-center">
                <FontAwesomeIcon icon={faPenToSquare} className='icon'/>
                <span className="mt-3">후기</span>
                <span>1</span>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`

  .row {
    p {
      font-size: 23px;
      transform: translate(8%, 0);
    }

    #user_info {
      height: 300px;
      background-color: #d9d9d9;

      .user_img {
        left: 8%;
        top: 20%;
        width: 150px;
        height: 150px;
        background-color: #fff;
        border-radius: 50%;

        .icon {
          font-size: 100px;
          transform: translate(35%, 15%);
        }
      }

      > span:nth-of-type(1) {
        position: absolute;
        top: 40%;
        left: 25%;
        font-size: 20px;
        font-weight: bold;

        span {
          font-size: 15px;
          color: #787878;
          margin-left: 5px;

          &:hover {
            text-decoration: underline;
          }
        }
      }

      > div {
        top: 30%;
        right: -5%;

        .sub_nav {
          margin-right: 150px;

          .icon {
            font-size: 40px;
            color: rgb(101, 96, 96);
          }

          span:nth-of-type(2) {
            font: bold 30px 'sans-serif';
          }
        }
      }
    }
  }
`;

