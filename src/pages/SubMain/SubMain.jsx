import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import '../../styles/globalStyle'
import Calendar from './Calendar/Calendar'
import Items from './Items/Items'


export default function SubMain() {
  
  return (
    <>
      <Nav/>
        <Calendar text="나만의 여행 짜기" subText="온전히 내 취향대로, 나만의 감성대로"/>
        <Items text="✨ 트립로그 Pick! 이번주 인기 숙소" subText="브이로그 감성 낭낭한 숙소 찾기"/>
        <Items text="🗂 여행 전 필수 준비항목" subText="트립로그가 챙겨주는 이번 여행!"/>
        <Items text="🌊 부산에가면 꼭 가야할 곳은?" subText="겨울에 가면 더 좋은 부산 여행지 추천"/>
      <Footer/>
    </>
  );
}
