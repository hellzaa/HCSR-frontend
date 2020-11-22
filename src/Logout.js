import React , {Component} from 'react';
//import Navbar from 'react-bootstrap';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
//import { Button } from 'semantic-ui-react';
class Logout extends Component{
    /*
    logout = () => {
        localStorage.removeItem('token');
        localStorage.clear();
        window.location.href = '/';
    }
    render (){
        return(
            <Redirect to="/" />
        )
    }*/

constructor(){
super();
//this.state={username:"", password:""}
this.handleLogout= this.handleLogout.bind(this);
}


handleLogout(event) {
event.preventDefault();


//Port must be the same as the backend (demo/bin/wwww)
axios.post("http://localhost:3007/logout")
.then(res=> {

if(res.status===200){
localStorage.removeItem('token');  
localStorage.clear();
    console.log("Logged Out");
    console.log("Here here here");

//localStorage.setItem('token', res.data.token);
console.log(localStorage.getItem('token'));
this.props.history.push("/");
}

})
.catch(function(err){
console.log(err);
});
}

render ()
{
    return (
        <Redirect to="/"></Redirect>
    )
}

}
export default Logout; 
