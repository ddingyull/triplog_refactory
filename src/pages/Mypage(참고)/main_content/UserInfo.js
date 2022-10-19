import styled from 'styled-components';
import {Dropdown} from 'react-bootstrap'

export default function UserInfo() {
  return (
    <>
      <Wrapper>
        <div>회원정보 수정</div>

        <div className="info_list">
          <div>
            <span>이름</span>
            <input type="text" />
          </div>

          <div>
            <span>전화번호</span>
            <input type="text" />
          </div>

          <div>
            <span>비밀번호</span>
            <input type="text" />

            <button type="button" className="btn btn-secondary">
              비밀번호 변경
            </button>
          </div>

          <div>
            <span>이메일</span>
            <input type="text" />
            <span>@</span>
            <input type="text" />

            <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">naver.com</Dropdown.Item>
                <Dropdown.Item href="#/action-2">nate.com</Dropdown.Item>
                <Dropdown.Item href="#/action-3">gmail.com</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
          </div>

          <div>
            <span>주소</span>
            <div>주소 api</div>

            {/* <div className="address_info">
                  <input type="text" id="sample4_postcode" placeholder="우편번호" />
                  <input type="button" onclick="sample4_execDaumPostcode()" value="우편번호 찾기" /><br />
                  <input type="text" id="sample4_roadAddress" placeholder="도로명주소" />
                  <input type="text" id="sample4_jibunAddress" placeholder="지번주소" />
                  <span id="guide" style="color:#999;display:none"></span>
                  <input type="text" id="sample4_detailAddress" placeholder="상세주소" />
                </div> */}
          </div>

          <div>
            <span>마케팅 정보</span>
            <input type="radio" />
            <input type="radio" />
          </div>
        </div>

        <button type="button" className="btn btn-secondary">
          회원정보 수정
        </button>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
    width: 100%;
    height: 30px;
    border-bottom: 1px solid black;

   .info_list {
      > div {
        display: flex;
        align-items: center;
        border-bottom: 1px solid rgb(229, 229, 229);
        height: 50px;

        &:nth-of-type(1),
        &:nth-of-type(2),
        &:nth-of-type(3),
        &:nth-of-type(4),
        &:nth-of-type(7) {
          span {
            width: 100px;
            font-size: 16px;
            font-weight: bold;
            padding-left: 30px;
          }

          input {
            width: 125px;
            height: 30px;
            background-color: #c7c7c7;
            margin-left: 50px;
            border: none;
          }
        }

        &:nth-of-type(3) {
          .btn {
            margin-left: 40px;
          }
        }

        &:nth-of-type(4) {
          input:nth-of-type(2) {
            margin-left: 15px;
          }

          span:nth-of-type(2) {
            width: 20px;
            margin-left: 10px;
            padding: 0;
          }

          .btn {
            margin-left: 30px;
          }
        }

        &:nth-of-type(5) {
          display: flex;
          height: 100px;

          span {
            width: 100px;
            font-size: 16px;
            font-weight: bold;
            padding-left: 30px;
          }

          .address_info {
            margin-left: 50px;

            input {
              margin-bottom: 10px;
            }
          }
        }

        &:nth-of-type(6) {
          span {
            font-size: 16px;
            font-weight: bold;
          }

          input {
            margin-left: 40px;
          }
        }
      }

      > .btn {
        position: absolute;
        right: 0;
      }
    }
`;
