import React, {Component} from 'react';
import {Navbar ,Nav, NavDropdown} from 'react-bootstrap';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

class NavigBar extends Component{

render()
{
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
      <NavDropdown title="Profile" id="collasible-nav-dropdown">
        <NavDropdown.Item href="http://localhost:3000/pharmacy/adminprofile">Admin Profile</NavDropdown.Item>
        <NavDropdown.Item href="http://localhost:3000/pharmacy/pharmacyprofile">Pharmacy Profile</NavDropdown.Item>
        <NavDropdown.Item href="http://localhost:3000/pharmacy/employeeprofile">Employee Profile</NavDropdown.Item>
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
}
export default NavigBar;
