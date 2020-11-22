
import React, { Component } from 'react'
import { Table, Button } from 'reactstrap';
import ModalForm from '../Modals/pharmacyModal'
import axios from 'axios';

class DataTable extends Component {
  state = {
    PharmacyID:0,
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
    Longitude:""
  }

  deleteItem = PharmacyID => {
  let confirmDelete = window.confirm('Delete item forever?')
  if(confirmDelete){
    console.log("Delete Confirmed!!!")
    console.log(PharmacyID);
    axios.delete(`http://localhost:3007/moh/pharmacy/delete/${this.state.PharmacyID}`)
    //.then(res=>{
      //if(res.status === 200){
      //this.props.push.history.replace("/moh/pharmacylist");
      //console.log("Ere please delete");
      //console.log(PharmacyID)
      //}
    .then(res => {
      if(res.status === 200){
        console.log("Ere please delete");
        console.log(PharmacyID);
      }
    })
    .then (item => {
      this.props.deleteItemFromState(PharmacyID)
    })
    .catch(err => console.log(err))
  }

}
  render() {

    const items = this.props.items.map(item => {
      return (
        <tr key={item.PharmacyID}>
          <th scope="row">{item.PharmacyID}</th>
          <td>{item.PharmacyName}</td>
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
              <ModalForm buttonLabel="Edit" item={item} updatePharmacy={this.props.updatePharmacy}/>
              {' '}
              <Button color="danger" size="sm" onClick={() => this.deleteItem(item.PharmacyID)}>Del</Button>
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