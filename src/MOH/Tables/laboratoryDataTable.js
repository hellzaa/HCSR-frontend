
import React, { Component } from 'react'
import { Table, Button } from 'reactstrap';
import ModalForm from '../Modals/laboratoryModal'
import axios from 'axios';

class DataTable extends Component {
  state = {
    LabID:0,
    LabName:"",
    Type:"",
    Branch:"",
    City:"",
    Subcity:"",
    Woreda:"",
    PhoneNo:"",
    Email:"",
    PoBox:"",
    Latitude:"",
    Longitude:""
  }

  deleteItem = LabID => {
  let confirmDelete = window.confirm('Delete item forever?')
  if(confirmDelete){
    console.log("Delete Confirmed!!!")
    console.log(LabID);
    axios.delete(`http://localhost:3007/moh/laboratory/delete/${this.state.LabID}`)
    //.then(res=>{
      //if(res.status === 200){
      //this.props.push.history.replace("/moh/laboratorylist");
      //console.log("Ere please delete");
      //console.log(LabID)
      //}
    .then(res => {
      if(res.status === 200){
        console.log("Ere please delete");
        console.log(LabID);
      }
    })
    .then (item => {
      this.props.deleteItemFromState(LabID)
    })
    .catch(err => console.log(err))
  }

}
  render() {

    const items = this.props.items.map(item => {
      return (
        <tr key={item.LabID}>
          <th scope="row">{item.LabID}</th>
          <td>{item.LabName}</td>
          <td>{item.Type}</td>
          <td>{item.Branch}</td>
          <td>{item.City}</td>
          <td>{item.Subcity}</td>
          <td>{item.Woreda}</td>
          <td>{item.PhoneNo}</td>
          <td>{item.Email}</td>
          <td>{item.PoBox}</td>
          <td>{item.Latitude}</td>
          <td>{item.Longitude}</td>
          <td>
            <div style={{width:"110px"}}>
              <ModalForm buttonLabel="Edit" item={item} updateLabortory={this.props.updateLaboratory}/>
              {' '}
              <Button color="danger" size="sm" onClick={() => this.deleteItem(item.LabID)}>Del</Button>
            </div>
          </td>
        </tr>
        )
      })
      return (
        <Table responsive striped hover size="sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Type</th>
              <th>Branch No.</th>
              <th>City</th>
              <th>Subcity</th>
              <th>Woreda</th>
              <th>Phone No.</th>
              <th>Email</th>
              <th>PoBox</th>
              <th>Lat</th>
              <th>Long</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {items}
          </tbody>
        </Table>
      )
    }
  }
  
  export default DataTable