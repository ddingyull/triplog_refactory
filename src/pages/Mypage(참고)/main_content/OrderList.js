import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function OrderList() {
  return (
    <>
      <List className='d-flex felx-column'>
        <div className='p-5'>
          <img
            src="http://www.cakenalda.co.kr/shopimages/cakenalda/0640120000132.jpg?1609835682"
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
    </>
  );
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
