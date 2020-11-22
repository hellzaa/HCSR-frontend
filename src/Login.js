import React , {Component} from 'react';
import './login.css'
import axios from 'axios';
import jwt from 'jwt-decode';
class Login extends Component{
constructor(){
super();
this.state={Username:"", Password:""}
this.handleSubmit= this.handleSubmit.bind(this);
}


handleUsernameChange(event){
this.setState({Username:event.target.value});

}


handlePasswordChange(event){
this.setState({Password:event.target.value});

}


handleSubmit(event){
event.preventDefault();

//Port must be the same as the backend (demo/bin/wwww)
axios.post("http://localhost:3007/login",{Username: this.state.Username, Password: this.state.Password, withCredentials: true})
.then(res=> {

if(res.status===200){
  console.log("here");

localStorage.setItem('token', res.data.token);
console.log(localStorage.getItem('token'));
var employeetoken=jwt(localStorage.getItem('token'));
console.log(employeetoken);
if(employeetoken.sessiondata.Institution==="MOH")
    this.props.history.push("/moh");
else if(employeetoken.sessiondata.Institution==="Pharmacy")
this.props.history.push("/pharmacy");
else if(employeetoken.sessiondata.Institution==="Laboratory")
this.props.history.push("/laboratory");
else if(employeetoken.sessiondata.Institution==="Hospital")
this.props.history.push("/hospital");
}

})
.catch(function(err){
console.log(err);
});
}



render()
{
return (
<div id="box">
<h1 id="loginbox">Login</h1>

<form onSubmit={this.handleSubmit}>
<input placeholder="Username" type="text" id="Username" onChange={this.handleUsernameChange.bind(this)}/>
<input placeholder="Password" type="password" id="Password" onChange={this.handlePasswordChange.bind(this)}/>
<button id="login">LogIn</button>
</form>

</div>

)
}
}
export default Login; 
