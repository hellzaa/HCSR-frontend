
import React, { Component } from 'react'
import { Table, Button } from 'reactstrap';
import ModalForm from '../Modals/laboratoryModal'
import axios from 'axios';

class DataTable extends Component {
  
  deleteRow(LabID){
    let confirmDelete = window.confirm('Do you want to delete this laboratory forever?')
    if(confirmDelete){
      return(
        axios.delete(`http://localhost:3007/moh/laboratory/delete/${LabID}`)
        .then(res => {
          console.log(res);
          console.log(res.data);
          window.location.reload();
        })
      )    
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
              <Button color="danger" size="sm" onClick={() => this.deleteRow(item.LabID)}>Del</Button>
            </div>
          </td>
        </tr>
        )
      })
      return (
        <Table responsive striped hover bordered size="sm">
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