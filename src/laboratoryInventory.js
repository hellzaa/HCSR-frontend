import React , {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './laboratoryInventory.css';
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
import { Redirect } from 'react-router-dom';


class LaboratoryInventory extends Component{
constructor(){
const employeeToken=localStorage.getItem('token');
super();
this.state={items: [],
employeeToken:employeeToken }
}

onAddClicked=()=>{

this.props.history.push('/laboratory/addnewlabtest')
}
componentDidMount(){
if(this.state.employeeToken!=null)
	fetch(`http://localhost:3007/laboratory/labtest/${this.state.employeeToken}`)
	.then(response=>response.json())
	.then(response=>this.setState({items:response}));

	
else
this.setState({items:null});

}

render()
{

const selectRowProp = {
  mode: "checkbox",
  clickToSelect: true,
  bgColor: "rgb(238, 193, 213)" 
};
const columns = [{
  dataField: 'LabTestName',
  text: 'Lab Test Name',
  sort: true,
  filter: textFilter()
}, 
{
  dataField: 'Description',
  text: 'Description',
  sort: true,
  filter: textFilter()
}, 
 {
  dataField: 'Price',
  text: 'Price',
  sort: true,
  filter: textFilter()
}];

if(this.state.items!=null)
return (
<div>

<NavigBar />
<div id="add">
</div>
<Button variant="outline-secondary" size="sm"onClick={this.onAddClicked}>Add New Lab Test </Button>
<div id="add">
</div>
<div className="container">
<div style={{ marginTop:20 }}>
<BootstrapTable insertRow exportCSV  keyField='LabTestName' 
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
else
return(
 <Redirect to="/"></Redirect>

)

}

}
export default LaboratoryInventory; 
