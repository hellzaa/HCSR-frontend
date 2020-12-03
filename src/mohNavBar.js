import React, {Component} from 'react';
import {Navbar ,Nav} from 'react-bootstrap';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { Redirect } from 'react-router-dom';


class NavigBar extends Component{

render()
{
const employeeToken=localStorage.getItem('token');
console.log(employeeToken);
if(employeeToken!=null)
return(
<div>
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed>
  <Navbar.Brand href="#home">MOH Portal</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href = "http://localhost:3000/moh">Home</Nav.Link>
      <Nav.Link href = "http://localhost:3000/moh/pharmacylist">Pharmacy List</Nav.Link>
      <Nav.Link href = "http://localhost:3000/moh/laboratorylist">Laboratory List</Nav.Link>
      <Nav.Link href = "http://localhost:3000/moh/hospitallist">Hospital List</Nav.Link>
      <Nav.Link href = "http://localhost:3000/moh/facilityadmins">Facility Admins</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="http://localhost:3000/logout">
        Logout
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>


</div>
);
else
return(
 <Redirect to="/"></Redirect>

)

}
}
export default NavigBar;
