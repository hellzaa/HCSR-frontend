
import React, { Component } from 'react'
import { Table } from 'reactstrap';
//import ModalForm from '../Modals/pharmacyAdminModal'
//import axios from 'axios';

class DataTable extends Component {
    state ={
        UserID:0,
        Firstname:"",
        Lastname:"",
        Username:"",
        Password:"",
        Institution:"",
        JobDescription:"",
        Pharmacy:"",
        Laboratory:"",
        Hospital:""
    }

  render() {

    const items = this.props.items.map(item => {
      return (
        <tr key={item.UserID}>
          <th scope="row">{item.UserID}</th>
          <td>{item.Firstname}</td>
          <td>{item.Lastname}</td>
          <td>{item.Username}</td>

          <td>{item.Institution}</td>

          <td>{item.Pharmacy}</td>
          <td>{item.Laboratory}</td>
          <td>{item.Hospital}</td>
          <td>

          </td>
        </tr>
        )
      })
      return (
        <Table responsive striped hover bordered size="sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Username</th>

              <th>Institution</th>

              <th>Pharmacy Id.</th>
              <th>Laboratory Id.</th>
              <th>Hospital Id.</th>
            </tr>
          </thead>
          <tbody>
            {items}
          </tbody>
        </Table>
      )
    }
  }

  export default DataTable;
