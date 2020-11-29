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
this.genericname=React.createRef();
this.tradename=React.createRef();
this.description=React.createRef();
this.dosage=React.createRef();
this.state={
GenericName:"",
TradeName:"",
Dosage:"",
Description:"",
Amount:"",
prefillinfo:"",
employeeToken:employeeToken
}
this.handleSubmit=this.handleSubmit.bind(this);
}

handleAmountChange(event){
this.setState({Amount: event.target.value});

}
handlePriceChange(event){
this.setState({Price: event.target.value});
  
}

componentDidMount(){

axios.get(`http://localhost:3007/pharmacy/callqrreader/${this.state.employeeToken}`).then(response=>{
this.setState({items:response});
this.setState({prefillinfo: JSON.parse(this.state.items["data"])});
console.log(this.state.prefillinfo);


});
	

}

handleSubmit(event){
event.preventDefault();
this.props.history.push("/pharmacy");
window.location.reload();


axios.post(`http://localhost:3007/pharmacy/addnewmedicine/${this.state.employeeToken}`,{

GenericName:this.genericname.current.value,
TradeName:this.tradename.current.value,
Dosage:this.dosage.current.value,
Description:this.description.current.value,
Amount:this.state.Amount,
Price:this.state.Price}).then(res=>{
console.log(res);
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
    <Form.Control type="text" value={this.state.prefillinfo["GenericName"]} ref={this.genericname} />
  </Form.Group>
  <Form.Group controlId="formBasicText">
    <Form.Label>Trade Name</Form.Label>
    <Form.Control type="text" value={this.state.prefillinfo["TradeName"]} ref={this.tradename} />
  </Form.Group>
  <Form.Group controlId="formBasicText">
    <Form.Label>Dosage</Form.Label>
    <Form.Control type="text" value={this.state.prefillinfo["Dosage"]} ref={this.dosage} />
  </Form.Group>
  <Form.Group controlId="formBasicText">
    <Form.Label>Description</Form.Label>
    <Form.Control type="text" value={this.state.prefillinfo["Description"]} ref={this.description} />
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
