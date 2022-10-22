import { createContext, useState } from 'react'
import { Container, Card, Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
// import Forminput from '../../components/Forminput';
// import Btn from '../../components/Button'
import UsersForm from '../../components/UsersForm'

const initialFormData = {
  // userID: '',
  // nickname: '',
  useremail: '',
  userpw: '',
  // userimg:'',
  // regDate:''
  // id:'',
  // pw:'',
};

export const FormContext = createContext({
  formData: initialFormData,
  setFormData: () => {},
});

export default function Login() {
  const [formData, setFormData] = useState(initialFormData);

  return(
    <FormContext.Provider value={{ formData, setFormData }}>
      <Nav/>
      <UsersForm/>
      <Footer/>
    </FormContext.Provider>
  )
}