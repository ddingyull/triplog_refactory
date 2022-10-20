import { Container, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Calendar(){
  return(
      <Card className="col-7 m-auto">
        <img className="col-7 m-auto" alt="지도이미지" src="/images/calendar.jpeg" style={{width:"60vh"}}></img>
      </Card>
  )
}