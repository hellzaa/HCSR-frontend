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
class addNewSpecialist extends Component{
constructor(){
super();
const employeeToken=localStorage.getItem('token');
this.state={
WorkingDay:"",
WorkingHour:"",
SpecialistInfo:"",
employeeToken:employeeToken,
items: [],
selectedValue: ""
}
this.handleSelect=this.handleSelect.bind(this);
this.handleSubmit=this.handleSubmit.bind(this);
}

handleSpecialistInfoChange(event){
this.setState({SpecialistInfo: event.target.value});

}
handleWorkingDayChange(event){
this.setState({WorkingDay: event.target.value});

}
handleWorkingHourChange(event){
this.setState({WorkingHour: event.target.value});

}
handleSelect(event){
  this.setState({selectedValue: event.target.value});
  console.log(this.state.selectedValue);
  }

componentDidMount=function(){
  fetch(`http://localhost:3007/hospital/getallspecialist/${this.state.employeeToken}`)
  .then(response=>response.json())
  .then(response=>this.setState({items:response}));
  console.log(this.state.items);

}

handleSubmit(event){
event.preventDefault();
//this.props.history.push("/hospital");
//window.location.reload();
console.log("in handle submit");
console.log(this.state.selectedValue);
axios.post(`http://localhost:3007/hospital/addnewspecialist/${this.state.employeeToken}`,{
SpecialistInfo:this.state.selectedValue,
WorkingDay:this.state.WorkingDay,
WorkingHour:this.state.WorkingHour
}).then(res=>{
if(res.status===200){
this.props.push.history.replace("/hospital");
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
    <Form.Label>Specialist</Form.Label>
   </Form.Group>
   <Form.Group controlId="formBasicSelect">
    <select value={this.state.selectedValue} onChange={this.handleSelect}>
    {
          this.state.items.map(function(item){
            return(
              <option value={item["SpecialistInfo"]}>{item["SpecialistInfo"]}</option>
            )
          })
        }
    </select>
  </Form.Group>
  <Form.Group>
	<Form.Label>Working Day</Form.Label>
	<Form.Control type="text" placeholder="Working Day"onChange={this.handleWorkingDayChange.bind(this)} />

  </Form.Group>
 <Form.Group>
	<Form.Label>Working Hour</Form.Label>
	<Form.Control type="text" placeholder="Working Hour"onChange={this.handleWorkingHourChange.bind(this)} />

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
export default addNewSpecialist; 
