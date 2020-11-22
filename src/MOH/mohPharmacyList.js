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
import ModalForm from './Modals/pharmacyModal';
import DataTable from './Tables/pharmacyDataTable';
import { CSVLink } from "react-csv";

class PharmacyList extends Component{
state={
  items: []
}
//employeeToken:employeeToken }


getPharmacies(){
  fetch('http://localhost:3007/moh/pharmacy/get')
    .then(response => response.json())
    .then(response => this.setState({items:response}))
    .catch(err => console.log(err))
    console.log("Getting pharmacies...")
}

addPharmacy = (item) => {
  this.setState(prevState => ({
    items: [...prevState.items, item]
  }))
}

updatePharmacy = (item) => {
  const itemIndex = this.state.items.findIndex(data => data.id === item.PharmacyID)
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
deleteItemFromState = (id) => {
  const updatedItems = this.state.items.filter(item => item.PharmacyID !== id)
  this.setState({ items: updatedItems })
}

componentDidMount(){
  this.getPharmacies()
}

render() {
  return (
      <div>
      <NavigBar />
      <Row>
        <Col>
          <h1 style={{margin: "20px 0"}}>Pharmacy List</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <CSVLink
            filename={"Pharmacies.csv"}
            color="primary"
            style={{float: "left", marginRight: "10px"}}
            className="btn btn-primary" 
            data={this.state.items}>
            Download CSV
          </CSVLink>
          <ModalForm buttonLabel="Add Pharmacy" addPharmacy={this.addPharmacy}/>
        </Col>
        </Row>
      <div>
      <Row>
        <Col>
          <DataTable items={this.state.items} updatePharmacy={this.updatePharmacy} deleteItemFromState={this.deleteItemFromState} />
        </Col>
      </Row>
      </div>
      
      </div>
    )
  }
}










/*

onAddClicked=()=>{
this.props.history.push('/moh/pharmacy/add')
}

onEditClicked = () => {
  this.props.history.push('/moh/pharmacy/edit/:PharmacyID')
}

componentDidMount(){

fetch(`http://localhost:3007/moh/pharmacy/get`)
.then(response=>response.json())
.then(response=>this.setState({items:response}));

}

render()
{

const selectRowProp = {
  mode: "checkbox",
  clickToSelect: true,
  bgColor: "rgb(238, 193, 213)" 
};
const columns = [{
  dataField: 'PharmacyName',
  text: 'Pharmacy Name',
  sort: true,
  filter: textFilter()
}, {
  dataField: 'Type',
  text: 'Type',
  sort: true,
  filter: textFilter()
}, {
  dataField: 'Branch',
  text: 'Branch',
  sort: true,
  filter: textFilter()
}, {
  dataField: 'City',
  text: 'City',
  sort: true,
  filter: textFilter()
}, {
  dataField: 'Subcity',
  text: 'Subcity',
  sort: true,
  filter: textFilter()
},{
  dataField: 'Woreda',
  text: 'Woreda',
  sort: true,
  filter: textFilter()
},{
  dataField: 'PhoneNo',
  text: 'PhoneNo',
  //sort: true,
  filter: textFilter()
},{
    dataField: 'Email',
    text: 'Email',
    sort: true,
    filter: textFilter()
},{
  dataField: 'Latitude',
  text: 'Latitude',
  sort: true,
  filter: textFilter()
},{
  dataField: 'Longitude',
  text: 'Longitude',
  sort: true,
  filter: textFilter()
}];


return (
<div>

<NavigBar />
<div id="add">
</div>
<Button variant="outline-secondary" size="sm" onClick={this.onAddClicked}>Add New Pharmacy</Button>
<Button variant="outline-secondary" size="sm" onClick={this.onEditClicked}>Edit</Button>
<div id="add">
</div>

<div style={{ marginTop:20 }}>
<BootstrapTable insertRow exportCSV  keyField='PharmacyName' 
  data={this.state.items}
  selectRow={selectRowProp} columns={columns} 
  dataSort={ true }  
  filter={ filterFactory() }
  pagination={ paginationFactory() }
  striped hover condensed />
  
</div>

</div>

);

}

}*/
export default PharmacyList; 
