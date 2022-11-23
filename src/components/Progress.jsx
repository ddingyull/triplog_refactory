import { FaStar } from 'react-icons/fa';
import styled from 'styled-components';

export default function Progress({ starAvg }) {
  const rating = (starAvg) => {
    const result = [];
    for (let i = 5; i > 0; i--) {
      starAvg--;
      if (starAvg >= 0) {
        result.push(<FaStar size="20" color="#fcc419"></FaStar>);
      } else {
        result.push(<FaStar size="20" color="lightgray"></FaStar>);
      }
    }
    return result;
  };
  return (
    <>
      {rating(starAvg)} {starAvg} / 5
    </>
  );
}
