import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import '../../styles/globalStyle'
import Calendar from './Calendar'
import Store from './Store'
import PlanList from './PlanList'
import Items from './Items'


export default function SubMain() {
  
  return (
    <>
      <Nav/>
        <Calendar/>
        {/* <Store/>
        <PlanList/>
        <Items/> */}
      <Footer/>
    </>
  );
}
