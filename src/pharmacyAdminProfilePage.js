import React , {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './pharmacyAdminProfilePage.css';
//import {Redirect} from 'react-router-dom';
import axios from 'axios';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
//import BootstrapTable from 'react-bootstrap-table-next';
import NavigBarAdmin from './NavBar.js';
import {Button, Form, Jumbotron} from 'react-bootstrap';
//import filter from 'react-bootstrap-table2-filter';

class pharmacyAdminProfilePage extends Component{
constructor(){
  const employeeToken = localStorage.getItem('token');
super();
this.state={
items:
{
  Firstname:"",
  Lastname:"",
  Username:"",
  JobDescription:"",
  Password:"",
},
employeeToken: employeeToken

}
this.handleSubmit= this.handleSubmit.bind(this);
}


handleFirstNameChange(event){
this.setState({Firstname: event.target.value});

}
handleLastNameChange(event){
  event.persist();
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



componentDidMount(){
axios.get(`http://localhost:3007/pharmacy/employeeinfo/${this.state.employeeToken}`)
//.then(response=>response.json())
.then(response=>this.setState({items:response.data[0]}))
//.then(response=>this.setState({Firstname:response.Firstname}))
.then((response)=>console.log(this.state.items));
}


handleSubmit(event){
event.preventDefault();
//console.log(this.state.items[0].Firstname);
axios.put(`http://localhost:3007/pharmacy/adminprofile/${this.state.employeeToken}`,{
Firstname: this.state.Firstname,
Lastname: this.state.Lastname,
Username: this.state.Username,
JobDescription: this.state.JobDescription,
Password: this.state.Password}).then(res=>{
if(res.status===200){
//this.props.push.history.replace("/pharmacy");
console.log(this.state.items[0]);
console.log("sucess");
}

}).catch(console.log);
}

render()
{


return (
<div>

<NavigBarAdmin />
<div id="addnewmed">
<Jumbotron>
<Form onSubmit={this.handleSubmit}>
  <Form.Group controlId="formBasicText">
    <Form.Label>Firstname</Form.Label>
    <Form.Control type="text" value={this.state.items.Firstname} onChange={this.handleFirstNameChange.bind(this)}/>
  </Form.Group>
  <Form.Group controlId="formBasicText">
    <Form.Label>Lastname</Form.Label>
    <Form.Control type="text" value={this.state.items.Lastname} onChange={this.handleLastNameChange.bind(this)}/>
  </Form.Group>
  <Form.Group controlId="formBasicText">
    <Form.Label>Username</Form.Label>
    <Form.Control type="text" value={this.state.items.Username} onChange={this.handleUsernameChange.bind(this)} />
  </Form.Group>
  <Form.Group controlId="formBasicText">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" value={this.state.items.Password} onChange={this.handlePasswordChange.bind(this)} />
  </Form.Group>

  <Form.Group controlId="formBasicText">
    <Form.Label>Job Description</Form.Label>
    <Form.Control type="text"  value={this.state.items.JobDescription} onChange={this.handleJobDescriptionChange.bind(this)} />
  </Form.Group>

  <Button variant="primary" type="submit" onClick={()=>console.log(this.state.items[0])}>
    Edit
  </Button>
</Form>
</Jumbotron>
</div>


</div>

);
}

}
export default pharmacyAdminProfilePage;
