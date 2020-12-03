import React , {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import NavigBar from '../mohNavBar';
//import {Button} from 'react-bootstrap';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
//import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
//import paginationFactory from 'react-bootstrap-table2-paginator';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
//import BootstrapTable from 'react-bootstrap-table-next';
import { Row, Col } from 'reactstrap';
import ModalForm from './Modals/pharmacyAdminModal';
import LabModalForm from './Modals/laboratoryAdminModal';
import HospModalForm from './Modals/hospitalAdminModal';
import DataTable from './Tables/pharmacyAdminDataTable';
import { CSVLink } from "react-csv";



class AdminList extends Component{
  state={
      items: []
    }

getAllAdmins(){
  fetch('http://localhost:3007/moh/getalladmins')
  .then(response => response.json())
  .then(response => this.setState({items:response}))
  .catch(err => console.log(err))
  console.log("Getting all admins...")
}

addPharmacyAdmin = (item) => {
  console.log("Adding Pharmacy Admin")
  this.setState(prevState => ({
    items: [...prevState.items, item]
  }))
}

addLaboratoryAdmin = (item) => {
  console.log("Adding Laboratory Admin")
  this.setState(prevState => ({
    items: [...prevState.items, item]
  }))
}

addHospitalAdmin = (item) => {
  console.log("Adding Hospital Admin")
  this.setState(prevState => ({
    items: [...prevState.items, item]
  }))
}

componentDidMount(){
  this.getAllAdmins()
}

render() {
  return (
      <div>
      <NavigBar />
      <Row>
        <Col>
          <h1 style={{margin: "20px 0"}}>Facility Admins - List</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <CSVLink
            filename={"Admins.csv"}
            color="primary"
            style={{float: "left", marginRight: "10px"}}
            className="btn btn-primary"
            data={this.state.items}>
            Download CSV
          </CSVLink>
          <ModalForm buttonLabel="Add Pharmacy Admin" addPharmacyAdmin={this.addPharmacyAdmin}/>
          <LabModalForm buttonLabel="Add Laboratory Admin" addLaboratoryAdmin={this.addLaboratoryAdmin}/>
          <HospModalForm buttonLabel="Add Hospital Admin" addHospitalAdmin={this.addHospitalAdmin}/>
        </Col>
        </Row>
      <div>
      <Row>
        <Col>
          <DataTable items={this.state.items}/>
        </Col>
      </Row>
      </div>

      </div>
    )
  }
}

export default AdminList;
