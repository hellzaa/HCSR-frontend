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


class HospitalInventory extends Component{
constructor(){
const employeeToken=localStorage.getItem('token');
super();
this.state={items: [],
employeeToken:employeeToken }
}

onAddClicked=()=>{

this.props.history.push('/hospital/addnewspecialist')
}
componentDidMount(){
if(this.state.employeeToken!=null)
	fetch(`http://localhost:3007/hospital/specialist/${this.state.employeeToken}`)
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
  dataField: 'Title',
  text: 'Title',
  sort: true,
  filter: textFilter()
}, 
{
  dataField: 'FirstName',
  text: 'First Name',
  sort: true,
  filter: textFilter()
}, 
{
  dataField: 'LastName',
  text: 'Last Name',
  sort: true,
  filter: textFilter()
}, 
 {
  dataField: 'Speciality',
  text: 'Speciality',
  sort: true,
  filter: textFilter()
}
];

if(this.state.items!=null)
return (
<div>

<NavigBar />
<div id="add">
</div>
<Button variant="outline-secondary" size="sm"onClick={this.onAddClicked}>Add New Specialist </Button>
<div id="add">
</div>
<div className="container">
<div style={{ marginTop:20 }}>
<BootstrapTable insertRow exportCSV  keyField='FirstName' 
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
export default HospitalInventory; 
