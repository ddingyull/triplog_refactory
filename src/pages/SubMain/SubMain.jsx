import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import '../../styles/globalStyle'
import Calendar from './Calendar/Calendar'
// import Stay from './Stay/Stay'
// import PlanList from './PlanList/PlanList'
import Items from './Items/Items'


export default function SubMain() {
  
  return (
    <>
      <Nav/>
        <Calendar/>
        {/* <Stay/> */}
        {/* <PlanList/> */}
        <Items className="col-5 overflow-auto"/>
      <Footer/>
    </>
  );
}
