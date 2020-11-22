import React , {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './pharmacyInventory.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import NavigBar from './NavBar.js';
import {Button} from 'react-bootstrap';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css'; 
import paginationFactory from 'react-bootstrap-table2-paginator';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import BootstrapTable from 'react-bootstrap-table-next';



class PharmacyInventory extends Component{
constructor(){
const employeeToken=localStorage.getItem('token');
super();
this.state={items: [],
employeeToken:employeeToken }
}

onAddClicked=()=>{
this.props.history.push('/pharmacy/addnewmedicine')
}
componentDidMount(){

fetch(`http://localhost:3007/pharmacy/inventory/${this.state.employeeToken}`)
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
  dataField: 'GenericName',
  text: 'Generic Name',
  sort: true,
  filter: textFilter()
}, {
  dataField: 'TradeName',
  text: 'Trade Name',
  sort: true,
  filter: textFilter()
}, {
  dataField: 'Dosage',
  text: 'Dosage',
  sort: true,
  filter: textFilter()
}, {
  dataField: 'Description',
  text: 'Description',
  sort: true,
  filter: textFilter()
}, {
  dataField: 'Amount',
  text: 'Amount',
  sort: true,
  filter: textFilter()
}, {
  dataField: 'Price',
  text: 'Price',
  sort: true,
  filter: textFilter()
}];


return (
<div>

<NavigBar />
<div id="add">
</div>
<Button variant="outline-secondary" size="sm"onClick={this.onAddClicked}>Add New Medcine </Button>
<div id="add">
</div>
<div className="container">
<div style={{ marginTop:20 }}>
<BootstrapTable insertRow exportCSV  keyField='GenericName' 
data={this.state.items} 
selectRow={selectRowProp} columns={columns} 
dataSort={ true }  
filter={ filterFactory() }
pagination={ paginationFactory() }
striped hover condensed />

</div>
</div>
</div>

);

}

}
export default PharmacyInventory; 
