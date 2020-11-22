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
//import FormControl from 'react-bootstrap';


class pharmacyProfile extends Component{
constructor(){
super();
const employeeToken=localStorage.getItem('token');
this.state={
  items: {
PharmacyName:"",
Type:"",
Branch:"",
City:"",
Subcity:"",
Woreda:"",
PhoneNo:"",
Email:"",
PoBox:"",
Latitude:"",
Longitude:"",
  },
employeeToken:employeeToken,


}
this.handleSubmit= this.handleSubmit.bind(this);
}


handlePharmacyNameChange(event){
this.setState({Name: event.target.value});

}
handleTypeChange(event){
  this.setState({Type: event.target.value});
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
handleBranchChange(event){
this.setState({Branch: event.target.value});

}
handleEmailChange(event){
this.setState({Email: event.target.value});

}
handlePoBoxChange(event){
this.setState({PoBox: event.target.value});

}
handlePhoneNoChange(event){
  this.setState({PhoneNo: event.target.value});
  
}
handleLatitudeChange(event){
  this.setState({Latitude: event.target.value});
}
handleLongitudeChange(event){
  this.setState({Longitude: event.target.value});
}
componentDidMount(){
axios.get(`http://localhost:3007/pharmacy/pharmacyinfo/${this.state.employeeToken}`)
//.then(response=>response.json())
.then(response=>this.setState({items:response.data[0]}));
//.then((response)=>console.log(this.state.items[0].Firstname));
}


handleSubmit(event){
event.preventDefault();
//console.log(this.state.items[0].Firstname);
axios.put(`http://localhost:3007/pharmacy/editpharmacyprofile/${this.state.employeeToken}`,{
PharmacyName:this.state.PharmacyName,
Type: this.state.Type,
City:this.state.City,
Subcity:this.state.Subcity,
Woreda:this.state.Woreda,
Email:this.state.Email,
PhoneNo:this.state.PhoneNo,
PoBox:this.state.PoBox,
Branch:this.state.Branch,
Latitude: this.state.Latitude,
Longitude: this.state.Longitude}).then(res=>{
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
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Name" value={this.state.items.PharmacyName} onChange={this.handlePharmacyNameChange.bind(this)}/>
  </Form.Group>
  <Form.Group controlId="formBasicText">
    <Form.Label>Type</Form.Label>
    <Form.Control type="text" placeholder="Type (Private or Gov't)" value={this.state.items.Branch} onChange={this.handleTypeChange.bind(this)}/>
  </Form.Group>
  <Form.Group controlId="formBasicText">
    <Form.Label>Branch</Form.Label>
    <Form.Control type="text" placeholder="Branch #" value={this.state.items.Branch} onChange={this.handleBranchChange.bind(this)}/>
  </Form.Group>
  <Form.Group controlId="formBasicText">
    <Form.Label>City</Form.Label>
    <Form.Control type="text" placeholder="City"value={this.state.items.City} onChange={this.handleCityChange.bind(this)} />
  </Form.Group>
  <Form.Group controlId="formBasicText">
    <Form.Label>Subcity</Form.Label>
    <Form.Control type="text" placeholder="Subcity" value={this.state.items.Subcity} onChange={this.handleSubcityChange.bind(this)} />
  </Form.Group>
  <Form.Group controlId="formBasicText">
    <Form.Label>Woreda</Form.Label>
    <Form.Control type="text" placeholder="Woreda" value={this.state.items.Woreda} onChange={this.handleWoredaChange.bind(this)} />
  </Form.Group>
  <Form.Group controlId="formBasicText">
    <Form.Label>PhoneNo</Form.Label>
    <Form.Control type="text" placeholder="PhoneNo" value={this.state.items.PhoneNo} onChange={this.handlePhoneNoChange.bind(this)} />
  </Form.Group>
  <Form.Group controlId="formEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="Email" placeholder="Email"  value={this.state.items.Email} onChange={this.handleEmailChange.bind(this)} />
  </Form.Group>
  <Form.Group controlId="formBasicText">
    <Form.Label>PoBox</Form.Label>
    <Form.Control type="text" placeholder="PoBox" value={this.state.items.PoBox} onChange={this.handlePoBoxChange.bind(this)} />
  </Form.Group>
  <Form.Group controlId="formBasicText">
    <Form.Label>Latitude</Form.Label>
    <Form.Control type="text" placeholder="Latitude" value={this.state.items.Latitude} onChange={this.handleLatitudeChange.bind(this)} />
  </Form.Group>
  <Form.Group controlId="formBasicText">
    <Form.Label>Longitude</Form.Label>
    <Form.Control type="text" placeholder="Longitude" value={this.state.items.Longitude} onChange={this.handleLongitudeChange.bind(this)} />
  </Form.Group>

  <Button variant="primary" type="submit">
    Edit
  </Button>
</Form>
</Jumbotron>
</div>


</div>

);
}

}
export default pharmacyProfile; 
