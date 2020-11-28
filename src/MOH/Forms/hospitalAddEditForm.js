import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';

class AddEditForm extends React.Component {
  state = {
    HospID:0,
    HospitalName:"",
    City:"",
    Subcity:"",
    Woreda:"",
    Referral:"",
    Website:"",
    PhoneNo:"",
    Email:"",
    PoBox:"",
    Latitude:"",
    Longitude:""
  }

  onChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }
  submitFormAdd = e => {
    e.preventDefault();
    //this.props.history.push("/moh/pharmacylist");
    window.location.reload();
    axios.post(`http://localhost:3007/moh/hospital/add`,{
      HospitalName: this.state.HospitalName,
      City: this.state.City,
      Subcity: this.state.Subcity,
      Woreda: this.state.Woreda,
      Referral: this.state.Referral,
      Website: this.state.Website,
      PhoneNo: this.state.PhoneNo,
      Email: this.state.Email,
      PoBox: this.state.PoBox,
      Latitude: this.state.Latitude,
      Longitude: this.state.Longitude})
      .then(item => {
      if(Array.isArray(item)) {
        // console.log(item[0])
        this.props.addHospital(item[0])
        this.props.push.history.replace("moh/hospitallist")
        this.props.toggle()
    } //else {
      //console.log('failure')
   // }
  })
  .catch(err => console.log(err))
}

submitFormEdit = e => {
  e.preventDefault();
  //this.props.history.push("/moh/pharmacylist");
  window.location.reload();
  axios.put(`http://localhost:3007/moh/hospital/edit/${this.state.HospID}`,{
    HospitalName: this.state.HospitalName,
    City: this.state.City,
    Subcity: this.state.Subcity,
    Woreda: this.state.Woreda,
    Referral: this.state.Referral,
    Website: this.state.Website,
    PhoneNo: this.state.PhoneNo,
    Email: this.state.Email,
    PoBox: this.state.PoBox,
    Latitude: this.state.Latitude,
    Longitude: this.state.Longitude})
    .then(item => {
      if(Array.isArray(item)) {
        // console.log(item[0])
        this.props.updateHospital(item[0])
        this.props.push.history.replace("moh/hospitallist")
        this.props.toggle()
    } //else {
      //console.log('failure')
   // }
  })
  .catch(err => console.log(err))
}
componentDidMount(){
  // if item exists, populate the state with proper data
  if(this.props.item){
    const { HospID, HospitalName, City, Subcity, Woreda, Referral, Website, PhoneNo, Email, PoBox, Latitude, Longitude } = this.props.item
    this.setState({ HospID, HospitalName, City, Subcity, Woreda, Referral, Website, PhoneNo, Email, PoBox, Latitude, Longitude })
  }
}

render() {
  return (

    <Form onSubmit={this.props.item ? this.submitFormEdit : this.submitFormAdd}>
        <FormGroup>
          <Label for="HospitalName">Hospital Name</Label>
          <Input type="text" name="HospitalName" id="HospitalName" onChange={this.onChange} value={this.state.HospitalName === null ? '' : this.state.HospitalName} />
        </FormGroup>
        <FormGroup>
          <Label for="City">City</Label>
          <Input type="text" name="City" id="City" onChange={this.onChange} value={this.state.City === null ? '' : this.state.City}  />
        </FormGroup>
        <FormGroup>
          <Label for="Subcity">Subcity</Label>
          <Input type="text" name="Subcity" id="Subcity" onChange={this.onChange} value={this.state.Subcity === null ? '' : this.state.Subcity}/>
        </FormGroup>
        <FormGroup>
          <Label for="Woreda">Woreda</Label>
          <Input type="number" name="Woreda" id="Woreda" onChange={this.onChange} value={this.state.Woreda  === null ? '' : this.state.Woreda}  />
        </FormGroup>
        <FormGroup>
        <Label for="Referral">Referral</Label>
        <Input type="text" name="Referral" id="Referral" onChange={this.onChange} value={this.state.Referral === null ? '' : this.state.Referral}  />
        </FormGroup>
        <FormGroup>
          <Label for="Website">Website</Label>
          <Input type="Website" name="Website" id="Website" onChange={this.onChange} value={this.state.Website === null ? '' : this.state.Website}  />
        </FormGroup>
        <FormGroup>
          <Label for="PhoneNo">Phone No.</Label>
          <Input type="text" name="PhoneNo" id="PhoneNo" onChange={this.onChange} value={this.state.PhoneNo === null ? '' : this.state.PhoneNo}  />
        </FormGroup>
        <FormGroup>
          <Label for="Email">Email</Label>
          <Input type="email" name="Email" id="Email" onChange={this.onChange} value={this.state.Email === null ? '' : this.state.Email}  />
        </FormGroup>
        <FormGroup>
          <Label for="PoBox">PoBox</Label>
          <Input type="number" name="PoBox" id="PoBox" onChange={this.onChange} value={this.state.PoBox === null ? '' : this.state.PoBox}  />
        </FormGroup>
        <FormGroup>
          <Label for="Latitude">Latitude</Label>
          <Input type="text" name="Latitude" id="Latitude" onChange={this.onChange} value={this.state.Latitude === null ? '' : this.state.Latitude}  />
        </FormGroup>
        <FormGroup>
          <Label for="Longitude">Longitude</Label>
          <Input type="text" name="Longitude" id="Longitude" onChange={this.onChange} value={this.state.Longitude === null ? '' : this.state.Longitude}  />
        </FormGroup>
        
        <Button>Submit</Button>
      </Form>
    );
  }
}

export default AddEditForm