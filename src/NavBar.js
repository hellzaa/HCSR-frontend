import React, {Component} from 'react';
import {Navbar ,Nav} from 'react-bootstrap';
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
	if(decodedToken.sessiondata.Institution==="Pharmacy" && decodedToken.sessiondata.JobDescription === "Admin")
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
      <Nav.Link href="http://localhost:3000/pharmacy/adminprofile">Admin Profile</Nav.Link>
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
else if(decodedToken.sessiondata.Institution==="Pharmacy" && decodedToken.sessiondata.JobDescription === "User")
		{
return(
<div>
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">HCSR</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="http://localhost:3000/pharmacy">Medicine List</Nav.Link>
      <Nav.Link href="http://localhost:3000/pharmacy/adminprofile">User Profile</Nav.Link>
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
else if(decodedToken.sessiondata.Institution==="Laboratory" && decodedToken.sessiondata.JobDescription === "Admin")
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
      <Nav.Link href="http://localhost:3000/laboratory/adminprofile">Admin Profile</Nav.Link>
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
else if(decodedToken.sessiondata.Institution==="Laboratory" && decodedToken.sessiondata.JobDescription === "User")
	{
return(
<div>
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">HCSR</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="http://localhost:3000/laboratory">LabTest List</Nav.Link>
      <Nav.Link href="http://localhost:3000/laboratory/adminprofile">User Profile</Nav.Link>
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
else if(decodedToken.sessiondata.Institution==="Hospital" && decodedToken.sessiondata.JobDescription === "Admin")
		{
return(
<div>
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">HCSR</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="http://localhost:3000/hospital">Specialist List</Nav.Link>
      <Nav.Link href="http://localhost:3000/hospital/employeeprofile">Employee List</Nav.Link>
      <Nav.Link href="http://localhost:3000/hospital/adminprofile">Admin Profile</Nav.Link>
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

else if(decodedToken.sessiondata.Institution==="Hospital" && decodedToken.sessiondata.JobDescription === "User")
		{
return(
<div>
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">HCSR</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="http://localhost:3000/hospital">Specialist List</Nav.Link>
      <Nav.Link href="http://localhost:3000/hospital/adminprofile">User Profile</Nav.Link>
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
