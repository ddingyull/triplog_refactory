import { Card, Col, Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import DayPlan from './contents/DayPlan'
import ItemList from './contents/ItemList'


export default function SelectList(){
  return(
      <PlanCard className="col-sm-10 col-md-5 overflow-auto" style={{height:"100vh"}}>
        <ItemList/>
      </PlanCard>
  )
}

// style-components
const PlanCard = styled.div`
  font-family: 'Inter';
  flex-wrap: wrap;
`