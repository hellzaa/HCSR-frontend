import React , {Component} from 'react';
import './App.css';
class medData extends Component{
constructor(){
super();
this.state={medData: [] }
}
getMedicineData(){
fetch("http://localhost:3007/pharmacy/inventory/1")
.then(response=>response.json())
.then(medData=>{this.setState({medData})});
}
componentDidMount(){
this.getMedicineData();
}
render (){
return(
    <div className="App">
       <ul>
{this.state.medData.map(medData=>
 <li key={medData.MedID}>{medData.GenericName}</li>
)}
     </ul>
</div>
);}}



export default medData; 
