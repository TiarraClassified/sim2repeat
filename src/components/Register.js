import React, { Component } from 'react';
import axios from 'axios';

export default class Register extends Component{

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

    register(){
        let body = {
            "username" : this.state.username,
            "password" : this.state.password
        }

        axios.post('http://localhost:4000/api/auth/register', body).then(
            res=>{
                console.log(res);
            }
        ).catch(e=> console.log(e))
    }

    render(){
        return(
            <div>                
            <p>Username</p>
            <input onChange={event =>this.updateUsername(event.target.value)}/>
            <p>Password</p>
            <input onChange={event=>this.updatePassword(event.target.user)}/> <br/>
            <button onClick={()=>this.register()}>Register</button>
            </div>
            
        )
    }
}