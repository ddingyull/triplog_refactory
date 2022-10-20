import { Container, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import DayPlan from '../contents/DayPlan'


export default function Map_SubMenu(){
  return(
      <PlanCard className="col-5 overflow-auto" style={{height:"100vh"}}>
        <DayPlan/>
        <DayPlan/>
        <DayPlan/>
      </PlanCard>
  )
}

// style-components
const PlanCard = styled.div`
  font-family: 'Inter';
  flex-wrap: wrap;
`