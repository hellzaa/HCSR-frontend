import React, {Component} from 'react';
import {Navbar ,Nav, NavDropdown} from 'react-bootstrap';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { Redirect } from 'react-router-dom';
import jwt from "jwt-decode";

class NavigBar extends Component{

render()
{


const employeeToken=localStorage.getItem('token');
console.log(employeeToken);

if(employeeToken!=null)
{
const decodedToken=jwt(employeeToken);
console.log(decodedToken);
	if(decodedToken.sessiondata.Institution==="Pharmacy")
		{
return(
<div>
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">HCSR</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="http://localhost:3000/pharmacy">Medicine List</Nav.Link>
      <Nav.Link href="http://localhost:3000/pharmacy/employeeprofile">Employee List</Nav.Link>
      <NavDropdown title="Profile" id="collasible-nav-dropdown">
        <NavDropdown.Item href="http://localhost:3000/pharmacy/adminprofile">Admin Profile</NavDropdown.Item>
        <NavDropdown.Item href="http://localhost:3000/pharmacy/pharmacyprofile">Pharmacy Profile</NavDropdown.Item>
        {/*<NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>*/}
      </NavDropdown>
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

		}
else if(decodedToken.sessiondata.Institution==="Laboratory")
		{
return(
<div>
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">HCSR</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="http://localhost:3000/laboratory">LabTest List</Nav.Link>
      <Nav.Link href="http://localhost:3000/laboratory/employeeprofile">Employee List</Nav.Link>
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

		}


}

else
return(
 <Redirect to="/"></Redirect>

)

}
}
export default NavigBar;
