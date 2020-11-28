import React , {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './addNewMedicine.css';
//import {Redirect} from 'react-router-dom';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
//import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import axios from 'axios';

import NavigBar from './NavBar.js';
import {Button, Form, Jumbotron} from 'react-bootstrap';
class addNewLabTest extends Component{
constructor(){
super();
const employeeToken=localStorage.getItem('token');
this.state={
LabTestName:"",
Description:"",
Price:"",
employeeToken:employeeToken,
items: [],
selectedValue: ""
}
this.handleSelect=this.handleSelect.bind(this);
this.handleSubmit=this.handleSubmit.bind(this);
}

handleLabTestNameChange(event){
this.setState({LabTestName: event.target.value});

}

handleDescriptionChange(event){
this.setState({Description: event.target.value});

}
handlePriceChange(event){
this.setState({Price: event.target.value});
  
}

handleSelect(event){
  this.setState({selectedValue: event.target.value});
  console.log(this.state.selectedValue);
  }

componentDidMount=function(){
  fetch(`http://localhost:3007/laboratory/getalllabtest/${this.state.employeeToken}`)
  .then(response=>response.json())
  .then(response=>this.setState({items:response}));
  console.log(this.state.items);

}

handleSubmit(event){
event.preventDefault();
//this.props.history.push("/laboratory");
//window.location.reload();
console.log("in handle submit");
console.log(this.state.selectedValue);
axios.post(`http://localhost:3007/laboratory/addnewlabtest/${this.state.employeeToken}`,{
LabTestName:this.state.selectedValue,
Description:this.state.Description,
Price:this.state.Price}).then(res=>{
if(res.status===200){
//this.props.push.history.replace("/laboratory");
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
    <Form.Label>Lab Test Name</Form.Label>
   </Form.Group>
   <Form.Group controlId="formBasicSelect">
    <select value={this.state.selectedValue} onChange={this.handleSelect}>
    {
          this.state.items.map(function(item){
            return(
              <option value={item["LabTestName"]}>{item["LabTestName"]}</option>
            )
          })
        }
    </select>
  </Form.Group>
  <Form.Group controlId="formBasicText">
    <Form.Label>Description</Form.Label>
    <Form.Control type="text" placeholder="Description"onChange={this.handleDescriptionChange.bind(this)} />
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
export default addNewLabTest; 
