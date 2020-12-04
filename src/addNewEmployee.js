import React , {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './addNewMedicine.css';
//import { withRouter } from 'react-router-dom';
//import {Redirect} from 'react-router-dom';
import axios from 'axios';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import NavigBarAdminProfile from './NavBar.js';
import {Button,  Form, Jumbotron} from 'react-bootstrap';
import jwt from 'jwt-decode';

class addNewEmployee extends Component{
  
constructor(){
super();
const employeeToken =localStorage.getItem('token');
const tokenDecoded=jwt(employeeToken);
this.state={
Firstname:"",
Lastname:"",
Username:"",
Password:"",
JobDescription:"",
employeeToken: employeeToken,
tokenDecoded: tokenDecoded
};

this.handleSubmit=this.handleSubmit.bind(this);
}

handleFirstnameChange(event){
this.setState({Firstname: event.target.value});

}
handleLastnameChange(event){
this.setState({Lastname: event.target.value});

}
handleUsernameChange(event){
this.setState({Username: event.target.value});

}
handleJobDescriptionChange(event){
this.setState({JobDescription: event.target.value});

}
handlePasswordChange(event){
this.setState({Password: event.target.value});

}

handleSubmit(event){
event.preventDefault();
if(this.state.tokenDecoded.sessiondata.Institution==="Pharmacy" && this.state.tokenDecoded.sessiondata.JobDescription==="Admin")  
   {
	 this.props.history.push("/pharmacy/employeeprofile");
	 window.location.reload();
   }
else if(this.state.tokenDecoded.sessiondata.Institution==="Laboratory" && this.state.tokenDecoded.sessiondata.JobDescription==="Admin")  
   {
	this.props.history.push("/laboratory/employeeprofile");
	window.location.reload();
   }
else if(this.state.tokenDecoded.sessiondata.Institution==="Hospital" && this.state.tokenDecoded.sessiondata.JobDescription==="Admin")  
   {
	this.props.history.push("/hospital/employeeprofile");
	window.location.reload();
   }

if(this.state.tokenDecoded.sessiondata.Institution==="Pharmacy" && this.state.tokenDecoded.sessiondata.JobDescription==="Admin")  
{
axios.post(`http://localhost:3007/pharmacy/addnewemployee/${this.state.employeeToken}`,{
Firstname:this.state.Firstname,
Lastname:this.state.Lastname,
Password:this.state.Password,
JobDescription:this.state.JobDescription,
Username:this.state.Username,

}).then(res=>{
if(res.status===200){
console.log("Add new employee token");
console.log(localStorage.getItem('token'));
var employeetoken=jwt(localStorage.getItem('token'));
console.log(employeetoken);
console.log("New user added");
//this.props.push.history.replace("/pharmacy/employeeprofile");
}

}).catch(console.log);
}

else if(this.state.tokenDecoded.sessiondata.Institution==="Laboratory" && this.state.tokenDecoded.sessiondata.JobDescription==="Admin")  
{
  axios.post(`http://localhost:3007/laboratory/addnewemployee/${this.state.employeeToken}`,{
    Firstname:this.state.Firstname,
    Lastname:this.state.Lastname,
    Password:this.state.Password,
    JobDescription:this.state.JobDescription,
    Username:this.state.Username,
    
    }).then(res=>{
    if(res.status===200){
    console.log("Add new employee token");
    console.log(localStorage.getItem('token'));
    var employeetoken=jwt(localStorage.getItem('token'));
    console.log(employeetoken);
    console.log("New user added");
    //this.props.push.history.replace("/pharmacy/employeeprofile");
    }
    
    }).catch(console.log);


}
else if(this.state.tokenDecoded.sessiondata.Institution==="Hospital" && this.state.tokenDecoded.sessiondata.JobDescription==="Admin")  
{
  axios.post(`http://localhost:3007/hospital/addnewemployee/${this.state.employeeToken}`,{
    Firstname:this.state.Firstname,
    Lastname:this.state.Lastname,
    Password:this.state.Password,
    JobDescription:this.state.JobDescription,
    Username:this.state.Username,
    
    }).then(res=>{
    if(res.status===200){
    console.log("Add new employee token");
    console.log(localStorage.getItem('token'));
    var employeetoken=jwt(localStorage.getItem('token'));
    console.log(employeetoken);
    console.log("New user added");
    //this.props.push.history.replace("/pharmacy/employeeprofile");
    }
    
    }).catch(console.log);


}

}
render()
{
return (
<div>


<NavigBarAdminProfile />

<div id="addnewmed">
<Jumbotron>
<Form onSubmit={this.handleSubmit}>
  <Form.Group controlId="formBasicText">
    <Form.Label>First Name</Form.Label>
    <Form.Control type="text" placeholder="First Name" onChange={this.handleFirstnameChange.bind(this)}/>
  </Form.Group>
  <Form.Group controlId="formBasicText">
    <Form.Label>Last Name</Form.Label>
    <Form.Control type="text" placeholder="Last Name" onChange={this.handleLastnameChange.bind(this)}/>
  </Form.Group>
  <Form.Group controlId="formBasicText">
    <Form.Label>Username</Form.Label>
    <Form.Control type="text" placeholder="Username"onChange={this.handleUsernameChange.bind(this)} />
  </Form.Group>
  <Form.Group controlId="formBasicText">
    <Form.Label>Job Description</Form.Label>
    <Form.Control type="text" placeholder="Job Description"onChange={this.handleJobDescriptionChange.bind(this)} />
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" onChange={this.handlePasswordChange.bind(this)}/>
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</Jumbotron>
</div>

</div>

);
}

}
export default addNewEmployee; 
