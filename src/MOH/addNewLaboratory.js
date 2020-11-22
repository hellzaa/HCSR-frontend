import React , {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//mport './addNewMedicine.css';
//import {Redirect} from 'react-router-dom';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import axios from 'axios';

import NavigBar from '../mohNavBar';
import {Button, Form, Jumbotron} from 'react-bootstrap';

class addNewLaboratory extends Component{
constructor(){
super();
//const employeeToken=localStorage.getItem('token');
this.state={
LabName:"",
Type:"",
Branch:"",
City:"",
Subcity:"",
Woreda:"",
PhoneNo:"",
Latitude:"",
Longitude:""
//employeeToken:employeeToken
}
this.handleSubmit=this.handleSubmit.bind(this);
}

handleLabNameChange(event){
this.setState({LabName: event.target.value});

}
handleTypeChange(event){
this.setState({Type: event.target.value});

}
handleBranchChange(event){
this.setState({Branch: event.target.value});

}
handleCityChange(event){
this.setState({City: event.target.value});

}
handleSubcityChange(event){
this.setState({Subcity: event.target.value});

}
handleWoredaChange(event){
this.setState({Woreda: event.target.value});
  
}
handlePhoneNoChange(event){
this.setState({PhoneNo: event.target.value});
  
}
handleEmailChange(event){
this.setState({Email: event.target.value});
    
}
handlePoBoxChange(event){
this.setState({PoBox: event.target.value});
      
}
handleLatitudeChange(event){
this.setState({Latitude: event.target.value});
        
}
handleLongitudeChange(event){
this.setState({Longitude: event.target.value});
      
}

handleSubmit(event){
event.preventDefault();
this.props.history.push("/moh/laboratorylist");
window.location.reload();


axios.post(`http://localhost:3007/moh/laboratory/add`,{
LabName:this.state.LabName,
Type:this.state.Type,
Branch:this.state.Branch,
City:this.state.City,
Subcity:this.state.Subcity,
Woreda:this.state.Woreda,
PhoneNo:this.state.PhoneNo,
Email:this.state.Email,
PoBox:this.state.PoBox,
Latitude:this.state.Latitude,
Longitude:this.state.Longitude}).then(res=>{
if(res.status === 200){
this.props.push.history.replace("/moh/laboratorylist");
}

}).catch(console.log);
}
render()
{
return (
<div>

<NavigBar />
<div id="addnewmed">
<Jumbotron>
<Form onSubmit = {this.handleSubmit}>
  <Form.Group controlId="formBasicText">
    <Form.Label>Laboratory Name</Form.Label>
    <Form.Control type="text" placeholder="Laboratory Name" onChange = {this.handleLabNameChange.bind(this)}/>
  </Form.Group>
  <Form.Group controlId="formBasicText">
    <Form.Label>Type</Form.Label>
    <Form.Control type="text" placeholder="Type (Private or Gov't)" onChange = {this.handleTypeChange.bind(this)}/>
  </Form.Group>
  <Form.Group controlId="formBasicText">
    <Form.Label>Branch</Form.Label>
    <Form.Control type="text" placeholder="Branch" onChange = {this.handleBranchChange.bind(this)} />
  </Form.Group>
  <Form.Group controlId="formBasicText">
    <Form.Label>City</Form.Label>
    <Form.Control type="text" placeholder="City" onChange = {this.handleCityChange.bind(this)} />
  </Form.Group>
  <Form.Group controlId="formBasicText">
    <Form.Label>Subcity</Form.Label>
    <Form.Control type="text" placeholder="Subcity" onChange = {this.handleSubcityChange.bind(this)}/>
  </Form.Group>
  <Form.Group controlId="formBasicText">
    <Form.Label>Woreda</Form.Label>
    <Form.Control type="text" placeholder="Woreda" onChange = {this.handleWoredaChange.bind(this)}/>
  </Form.Group>
  <Form.Group controlId="formBasicText">
    <Form.Label>Phone No</Form.Label>
    <Form.Control type="text" placeholder="Phone No" onChange = {this.handlePhoneNoChange.bind(this)}/>
  </Form.Group>
  <Form.Group controlId="formBasicText">
    <Form.Label>Email</Form.Label>
    <Form.Control type="text" placeholder="Email" onChange = {this.handleEmailChange.bind(this)}/>
  </Form.Group>
  <Form.Group controlId="formBasicText">
    <Form.Label>PoBox</Form.Label>
    <Form.Control type="text" placeholder="PoBox" onChange = {this.handlePoBoxChange.bind(this)}/>
  </Form.Group>
  <Form.Group controlId="formBasicText">
    <Form.Label>Latitude</Form.Label>
    <Form.Control type="text" placeholder="Latitude" onChange = {this.handleLatitudeChange.bind(this)}/>
  </Form.Group>
  <Form.Group controlId="formBasicText">
    <Form.Label>Longitude</Form.Label>
    <Form.Control type="text" placeholder="Longitude" onChange = {this.handleLongitudeChange.bind(this)}/>
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
export default addNewLaboratory; 
