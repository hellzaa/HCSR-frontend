import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './Login';
import Logout from './Logout';
import PharmacyInventory from "./pharmacyInventory";
import LaboratoryInventory from "./laboratoryInventory";
import HospitalInventory from "./hospitalInventory";
import addNewMedicine from "./addNewMedicine";
import addNewLabTest from "./addNewLabTest";
import addNewSpecialist from "./addNewSpecialist";
import pharmacyAdminProfilePage from "./pharmacyAdminProfilePage";
import pharmacyProfile from "./pharmacyProfile";
import employeeRecord from "./employeeRecord";
import addNewEmployee from "./addNewEmployee";
import mohPharmacyList from "./MOH/mohPharmacyList";
import * as serviceWorker from './serviceWorker';
import {Route, BrowserRouter as Router} from 'react-router-dom';



import mohLaboratoryList from "./MOH/mohLaboratoryList";

import mohHospitalList from "./MOH/mohHospitalList";

import Home from './MOH/mohHome';
import AdminList from './MOH/mohAdminList';

const routing=(
<Router>
<div>
<Route exact path = '/' component = {Login} />
<Route exact path = '/logout' component = {Logout} />
<Route exact path = '/pharmacy' component = {PharmacyInventory}/>
<Route exact path = '/pharmacy/addnewmedicine' component = {addNewMedicine}/>
<Route exact path = '/pharmacy/adminprofile' component = {pharmacyAdminProfilePage}/>
<Route exact path = '/pharmacy/addnewemployee' component = {addNewEmployee}/>
<Route exact path = '/pharmacy/employeeprofile' component = {employeeRecord}/>
<Route exact path = '/pharmacy/pharmacyprofile' component = {pharmacyProfile} />


<Route exact path = '/laboratory' component = {LaboratoryInventory} />
<Route exact path = '/laboratory/addnewlabtest' component = {addNewLabTest} />
<Route exact path = '/laboratory/employeeprofile' component = {employeeRecord}/>
<Route exact path = '/laboratory/addnewemployee' component = {addNewEmployee}/>


<Route exact path = '/hospital' component = {HospitalInventory} />
<Route exact path = '/hospital/addnewspecialist' component = {addNewSpecialist} />
<Route exact path = '/hospital/employeeprofile' component = {employeeRecord}/>
<Route exact path = '/hospital/addnewemployee' component = {addNewEmployee}/>

<Route exact path = '/moh' component = {Home}/>
<Route exact path = '/moh/pharmacylist' component = {mohPharmacyList}/>
<Route exact path = '/moh/laboratorylist' component = {mohLaboratoryList}/>
<Route exact path = '/moh/hospitallist' component = {mohHospitalList}/>
<Route exact path = '/moh/facilityadmins' component = {AdminList}/>

</div>
</Router>
)
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
