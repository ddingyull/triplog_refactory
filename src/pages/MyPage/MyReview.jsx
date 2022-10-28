import styled from "styled-components"
import { Container, Row, Col } from "react-bootstrap"

import MypageNav from "./content/MypageNav"

export default function MyReview() {

    return (
        <>
        <div className=".cancel_list d-flex flex-column m-3">
          <div style={{borderTop: '1px solid black', borderBottom: '1px solid black', height: '35px'}}>후기 목록</div>
          <List className='d-flex felx-column'>
          <div className='p-5'>
            <img
            src="/images/mainImg.jpg"
            alt="cake_img"
            />
            <span>레터링케이크</span>
            <span>2022.09.22</span>
            <p className='mt-2'>22000원</p>
            <div style={{width: '500px'}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sed
            molestiae voluptas porro ad iusto eligendi impedit quaerat error
            vel.
          </div>
        </div>
        </List>
        </div>        
    </>
    )
}

const List = styled.div`
  border-bottom: 1px solid #9b9393;

  > div {

    img {
      float: left;
      width: 140px;
      height: 140px;
      transform: translate(-30%, 0);
    }

    span:nth-of-type(1) {
      font: bold 17px sans-serif;
    }

    span:nth-of-type(2) {
      font: bold 14px sans-serif;
      color: #a19a9a;
      margin-left: 15px;
    }
  }
`;

