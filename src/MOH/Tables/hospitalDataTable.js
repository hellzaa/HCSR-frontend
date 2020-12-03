
import React, { Component } from 'react'
import { Table, Button } from 'reactstrap';
import ModalForm from '../Modals/hospitalModal'
import axios from 'axios';

class DataTable extends Component {

  deleteRow(HospID){
    let confirmDelete = window.confirm('Do you want to delete this hospital forever?')
    if(confirmDelete){
      return(
        axios.delete(`http://localhost:3007/moh/hospital/delete/${HospID}`)
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
        <tr key={item.HospID}>
          <th scope="row">{item.HospID}</th>
          <td>{item.HospitalName}</td>
          <td>{item.City}</td>
          <td>{item.Subcity}</td>
          <td>{item.Woreda}</td>
          <td>{item.Referral}</td>
          <td>{item.Website}</td>
          <td>{item.PhoneNo}</td>
          <td>{item.Email}</td>
          <td>{item.PoBox}</td>
          <td>{item.Latitude}</td>
          <td>{item.Longitude}</td>
          <td>
            <div style={{width:"100px"}}>
              <ModalForm buttonLabel="Edit" item={item} updateHospital={this.props.updateHospital}/>
              {' '}
              <Button color="danger" size="sm" onClick={() => this.deleteRow(item.HospID)}>Del</Button>
            </div>
          </td>
        </tr>
        )
      })
      return (
        <Table responsive striped hover  bordered size="sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>City</th>
              <th>Subcity</th>
              <th>Woreda</th>
              <th>Referral</th>
              <th>Website</th>
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
