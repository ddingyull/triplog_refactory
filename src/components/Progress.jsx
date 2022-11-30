import { FaStar } from 'react-icons/fa';
import styled from 'styled-components';

export default function Progress({ starAvg }) {
  // const rating = (starAvg) => {
  //   const result = [];
  //   for (let i = 5; i > 0; i--) {
  //     starAvg--;
  //     if (starAvg >= 0) {
  //       result.push(<FaStar size="20" color="#fcc419"></FaStar>);
  //     } else {
  //       result.push(<FaStar size="20" color="lightgray"></FaStar>);
  //     }
  //   }
  //   return result;
  // };
  return (
    <>
      <StarWrap>
        <span class="star">
          <FaStar size="20"></FaStar>
          <FaStar size="20"></FaStar>
          <FaStar size="20"></FaStar>
          <FaStar size="20"></FaStar>
          <FaStar size="20"></FaStar>
          <span class="starAvg" style={{ width: `${starAvg * 20}%` }}>
            <FaStar size="20"></FaStar>
            <FaStar size="20"></FaStar>
            <FaStar size="20"></FaStar>
            <FaStar size="20"></FaStar>
            <FaStar size="20"></FaStar>
          </span>
        </span>{' '}
      </StarWrap>
      {isNaN(starAvg) ? 0 : starAvg} / 5
    </>
  );
}

const StarWrap = styled.span`
  .star {
    position: relative;
    color: lightgray;

    .starAvg {
      white-space: nowrap;
      position: absolute;
      overflow: hidden;

      left: 0;
      color: #fcc419;
      pointer-events: none;
    }
  }
`;
