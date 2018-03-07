import React, {Component} from "react";
import {Route, Link} from 'react-router-dom';

 export default class Home extends Component {
     constructor(){
         super()
         
         this.state = {
             username : '',
             password : ''
         }

     }

     updateUsername(newstring){
        this.setState({
            username : newstring
        })
     }

     updatePassword(newstring){
         this.setState({
             password: newstring
         })
     }

     render(){
     return (
            <div>

                <p>Username</p>
                <input onChange={event =>this.updateUsername(event.target.value)}/>
                <p>Password</p>
                <input onChange={event=>this.updatePassword(event.target.user)}/> <br/>

                <Link to='/start'><button>Login</button> <br/></Link>
                <Link to='/register'><button>Register</button></Link>

            </div>
     )
    }
 }