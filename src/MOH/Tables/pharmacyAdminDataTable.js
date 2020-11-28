
import React, { Component } from 'react'
import { Table, Button } from 'reactstrap';
import ModalForm from '../Modals/pharmacyAdminModal'
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
/* 
deleteRow(UserID){
  let confirmDelete = window.confirm('Do you want to delete this user forever?')
  if(confirmDelete){
    return(
      axios.delete(`http://localhost:3007/moh/pharmacy/delete/${PharmacyID}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
        window.location.reload();
    })
    )
    
  }
}
*/
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
            <div style={{width:"110px"}}>
              <ModalForm buttonLabel="Edit"/> 
              {' '}
              <Button color="danger" size="sm">Del</Button>
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
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Username</th>
              
              <th>Institution</th>
             
              <th>Pharmacy Id.</th>
              <th>Laboratory Id.</th>
              <th>Hospital Id.</th>
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
  
  export default DataTable;