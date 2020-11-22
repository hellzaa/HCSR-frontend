import React , {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './employeeRecord.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import NavigBar from './NavBar.js';
import {Button} from 'react-bootstrap';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css'; 
import paginationFactory from 'react-bootstrap-table2-paginator';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

class EmployeeRecord extends Component{
constructor(){
  const employeeToken=localStorage.getItem('token');
super();
this.state={items: [] ,
  employeeToken: employeeToken
}
}

onAddClicked=()=>{
this.props.history.push('/pharmacy/addnewemployee')
}
componentDidMount(){

fetch(`http://localhost:3007/pharmacy/employeerecord/${this.state.employeeToken}`)
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
  dataField: 'Firstname',
  text: 'First Name',
  sort: true,
  filter: textFilter()
}, {
  dataField: 'Lastname',
  text: 'Last Name',
  sort: true,
  filter: textFilter()
}, {
  dataField: 'Username',
  text: 'Username',
  sort: true,
  filter: textFilter()

},
/*{
  dataField: 'Password',
  text: 'Password'
},*/ 
 {
  dataField: 'JobDescription',
  text: 'Job Description',
  sort: true,
  filter: textFilter()

}];

return (
<div>

<NavigBar />
<div id="add">
</div>
<Button variant="outline-secondary" size="sm"onClick={this.onAddClicked}>Add New Employee </Button>
<div id="add">
</div>
<div className="container">

<BootstrapTable keyField='Firstname' data={this.state.items} columns={columns} 
selectRow={selectRowProp} dataSort={ true }  
filter={ filterFactory() }
pagination={ paginationFactory() }
striped hover condensed />


</div>
</div>

);
}

}
export default EmployeeRecord; 
