import React , {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './addNewMedicine.css';
//import {Redirect} from 'react-router-dom';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import axios from 'axios';

import NavigBar from './NavBar.js';
import {Button, Form, Jumbotron} from 'react-bootstrap';
class addNewMedicine extends Component{
constructor(){
super();
const employeeToken=localStorage.getItem('token');
this.state={
GenericName:"",
TradeName:"",
Dosage:"",
Description:"",
Amount:"",
employeeToken:employeeToken
}
this.handleSubmit=this.handleSubmit.bind(this);
}

handleGenericNameChange(event){
this.setState({GenericName: event.target.value});

}
handleTradeNameChange(event){
this.setState({TradeName: event.target.value});

}
handleDosageChange(event){
this.setState({Dosage: event.target.value});

}
handleDescriptionChange(event){
this.setState({Description: event.target.value});

}
handleAmountChange(event){
this.setState({Amount: event.target.value});

}
handlePriceChange(event){
this.setState({Price: event.target.value});
  
}

handleSubmit(event){
event.preventDefault();
this.props.history.push("/pharmacy");
window.location.reload();


axios.post(`http://localhost:3007/pharmacy/addnewmedicine/${this.state.employeeToken}`,{
GenericName:this.state.GenericName,
TradeName:this.state.TradeName,
Dosage:this.state.Dosage,
Description:this.state.Description,
Amount:this.state.Amount,
Price:this.state.Price}).then(res=>{
if(res.status===200){
this.props.push.history.replace("/pharmacy");
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
<Form onSubmit={this.handleSubmit}>
  <Form.Group controlId="formBasicText">
    <Form.Label>Generic Name</Form.Label>
    <Form.Control type="text" placeholder="Generic Name" onChange={this.handleGenericNameChange.bind(this)}/>
  </Form.Group>
  <Form.Group controlId="formBasicText">
    <Form.Label>Trade Name</Form.Label>
    <Form.Control type="text" placeholder="Trade Name" onChange={this.handleTradeNameChange.bind(this)}/>
  </Form.Group>
  <Form.Group controlId="formBasicText">
    <Form.Label>Dosage</Form.Label>
    <Form.Control type="text" placeholder="Dosage"onChange={this.handleDosageChange.bind(this)} />
  </Form.Group>
  <Form.Group controlId="formBasicText">
    <Form.Label>Description</Form.Label>
    <Form.Control type="text" placeholder="Description"onChange={this.handleDescriptionChange.bind(this)} />
  </Form.Group>
  <Form.Group controlId="formBasicText">
    <Form.Label>Amount</Form.Label>
    <Form.Control type="text" placeholder="Amount" onChange={this.handleAmountChange.bind(this)}/>
  </Form.Group>
  <Form.Group controlId="formBasicText">
    <Form.Label>Price (ETB) </Form.Label>
    <Form.Control type="text" placeholder="Price" onChange={this.handlePriceChange.bind(this)}/>
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
export default addNewMedicine; 
