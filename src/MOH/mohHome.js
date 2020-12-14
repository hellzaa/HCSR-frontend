import React , {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import NavigBar from '../mohNavBar';
import './mohHome.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
//import BootstrapTable from 'react-bootstrap-table-next';
//import ReactDOM from 'react-dom';
//  
class Home extends Component {
    render() {
      return (
        <div>

        <NavigBar />
        <div id="mohHome">
         
        <h1> Welcome to MOH Portal!</h1>
          
        </div>
        </div>
       
        
        );
        }
        }
    
    export default Home;