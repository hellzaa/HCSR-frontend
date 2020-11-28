import React , {Component} from 'react';
//import Navbar from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
//import { Button } from 'semantic-ui-react';
class Logout extends Component{
constructor(){
super();

localStorage.removeItem('token');  
localStorage.clear();
}

render ()
{
    return (
        <Redirect to="/"></Redirect>
    )
}

}
export default Logout; 
