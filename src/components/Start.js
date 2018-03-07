import React, { Component } from 'react';
import List from './List';
import ChildFunction from './childFunction';
import axios from 'axios';
import Mushu from './Mushu';

export default class Start extends Component{

    constructor(){
        super()

        this.state={
            proverbs: [{name: "Your words are like 1000 doves - hard to keep and easy to release. ~Shin", id: 1}, {name: "That's like the rabbit calling out 'big ears!' ~Spanish", id: 2}, {name: "He's not as slow as he walks easy ~Scottish", id: 3}],
            users: [],
            input: '',
            id: 0,
            user: []
        }

// sim1: 37C
        this.weapon = this.weapon.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
    }
// sim1: 44E, 39C
    componentDidMount(){
// sime1: 76C
        axios.get('/api/getUsers').then(res=>{
            console.log(res.data)
            this.setState({
                users: res.data
            })
        })
    }

    weapon(noun){
        alert(`Never bring a ${noun} to a knife fight.`)
    }

    addUser(){
        let body = {
            username : this.state.input
        }
        axios.post('/api/addUser', body).then(res=>{
            return res.data
        })
    }

    changeUser(){
        let body = {
            username : this.state.input,
            id: this.state.id
        }
        axios.put('/api/changeUser', body).then(res=>{
            return res.data
        })
    }

    deleteUser(){
        axios.delete(`/api/deleteUser/${this.state.input}`).then(res=>{
            return res.data
        })
    }

    handleChange(string){
        this.setState({
            input: string
        })
    }

    handleID(number){
        this.setState({
            id: Number(number)
        })
    }

    query(){
// sim1: 76E
        axios.get(`/api/getUser?id=${this.state.id}`).then(res=>{
            this.setState({
                user: res.data
            })
        })
    }

    render(){
        let names = this.state.users.map(person=>{
            return (
                <div>Name: {person.username}, ID: {person.id}</div>
            )
        })
        return(
            <div>Start
                <br/>
                {/* <Mushu/> */}
                <List lists={this.state.proverbs}/>
                <br/>
                <ChildFunction childFunc={this.weapon}/>
                <br/>

                <p>
                Users: <br/>
                {names}
                </p>

                <input onChange={e=>this.handleChange(e.target.value)}></input><button onClick={e=>this.addUser()}>Add User</button><br/>

                <input placeholder="username goes here" onChange={e=>this.handleChange(e.target.value)}></input>
                <button onClick={e=>this.deleteUser()}>Delete User</button><br/>

                <input placeholder="username goes here" onChange={e=>this.handleChange(e.target.value)}></input>
                
                <input placeholder="ID goes here" onChange={e=>this.handleID(e.target.value)}></input>

                <button onClick={e=>this.changeUser()}>Change Username</button>
                <br/>

                <input placeholder="ID goes here" onChange={e=>this.handleID(e.target.value)}></input>

                <button onClick={e=>this.query()}>Look up user by ID</button>
                {JSON.stringify(this.state.user)}
                
            </div>
        )
    }
}