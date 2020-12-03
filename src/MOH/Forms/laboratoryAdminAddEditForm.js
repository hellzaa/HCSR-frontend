import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';

class AddEditForm extends React.Component {
  state = {
    UserID:0,
    Firstname:"",
    Lastname:"",
    Username:"",
    Password:"",
    Laboratory:""
  }

  onChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }
  submitFormAdd = e => {
    e.preventDefault();
    window.location.reload();
    console.log("Submit Form...!!!!");
    axios.post(`http://localhost:3007/moh/laboratory/addadmin`,{
    //  blabla:"blabla"
      Firstname: this.state.Firstname,
      Lastname: this.state.Lastname,
      Username: this.state.Username,
      Password: this.state.Password,
      Laboratory: this.state.Laboratory})
      .then(item => {
      if(Array.isArray(item)) {
        console.log("Laboratory Admin")
        console.log(item[0])
        this.props.addLaboratoryAdmin(item[0])
        this.props.push.history.replace("moh/facilityadmins")
        this.props.toggle()
    } else {
      console.log('failure')
      //console.log(err.response)
    }
  })
  .catch(err => console.log(err))
}

submitFormEdit = e => {

}
componentDidMount(){
  // if item exists, populate the state with proper data
  if(this.props.item){
    const { UserID, Firstname, Lastname, Username, Password, Institution, JobDescription, Laboratory } = this.props.item
    this.setState({ UserID, Firstname, Lastname, Username, Password, Institution, JobDescription, Laboratory })
  }
}

render() {
  return (

    <Form onSubmit={this.props.item ? this.submitFormEdit : this.submitFormAdd}>
      <FormGroup>
        <Label for="Firstname">First Name</Label>
        <Input type="text" name="Firstname" id="Firstname" onChange={this.onChange} value={this.state.Firstname === null ? '' : this.state.Firstname} />
      </FormGroup>
      <FormGroup>
        <Label for="Lastname">Lastname</Label>
        <Input type="text" name="Lastname" id="Lastname" onChange={this.onChange} value={this.state.Lastname === null ? '' : this.state.Lastname} />
        </FormGroup>
        <FormGroup>
          <Label for="Username">Username</Label>
          <Input type="text" name="Username" id="Username" onChange={this.onChange} value={this.state.Username === null ? '' : this.state.Username} />
        </FormGroup>
        <FormGroup>
          <Label for="Password">Password</Label>
          <Input type="password" name="Password" id="Password" onChange={this.onChange} value={this.state.Password === null ? '' : this.state.Password}/>
        </FormGroup>
        <FormGroup>
          <Label for="Laboratory">Laboratory Id.</Label>
          <Input type="number" name="Laboratory" id="Laboratory" onChange={this.onChange} value={this.state.Laboratory === null ? '' : this.state.Laboratory} />
        </FormGroup>

        <Button>Submit</Button>
      </Form>
    );
  }
}

export default AddEditForm
