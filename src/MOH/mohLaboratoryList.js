import React , {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './PharmacyList.css';
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
import ModalForm from './Modals/laboratoryModal';
import DataTable from './Tables/laboratoryDataTable';
import { CSVLink } from "react-csv";



class LaboratoryList extends Component{
  state={
    items: []
  }
  
  
getLaboratories(){
  fetch('http://localhost:3007/moh/laboratory/get')
    .then(response => response.json())
    .then(response => this.setState({items:response}))
    .catch(err => console.log(err))
    console.log("Getting laboratories...")
}
  
addLaboratory = (item) => {
  this.setState(prevState => ({
    items: [...prevState.items, item]
  }))
}
  
updateLaboratory = (item) => {
  const itemIndex = this.state.items.findIndex(data => data.id === item.LabID)
  const newArray = [
    // destructure all items from beginning to the indexed item
    ...this.state.items.slice(0, itemIndex),
    // add the updated item to the array
    item,
    // add the rest of the items to the array from the index after the replaced item
    ...this.state.items.slice(itemIndex + 1)
  ]
  this.setState({ items: newArray })
}

componentDidMount(){
  this.getLaboratories()
}

deleteRow(id){
  DataTable.deleteRow(id).then(res => {
    this.setState({items:this.state.items.filter(item => item.LabID !==id)});
  });
}


  render() {
    return (
        <div>
        <NavigBar />
        <Row>
          <Col>
            <h1 style={{margin: "20px 0"}}>Laboratory List</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <CSVLink
              filename={"Laboratories.csv"}
              color="primary"
              style={{float: "left", marginRight: "10px"}}
              className="btn btn-primary" 
              data={this.state.items}>
              Download CSV
            </CSVLink>
            <ModalForm buttonLabel="Add Laboratory" addLaboratory={this.addLaboratory}/>
          </Col>
          </Row>
        <div>
        <Row>
          <Col>
            <DataTable items={this.state.items} updateLaboratory={this.updateLaboratory} deleteRow={this.deleteRow} />
          </Col>
        </Row>
        </div>
        
        </div>
      )
    }
  }

export default LaboratoryList; 
