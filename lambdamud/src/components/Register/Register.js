import React, { Component } from 'react'
import axios from 'axios'

export default class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password1: '',
            password2: ''
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleRegister = e => {
        const requestBody = {
            ...this.state
        }

        if(requestBody.password1 === requestBody.password2) {
        axios.post('https://lambdamudproj.herokuapp.com/api/registration', requestBody).then(res => {
            console.log('registration', res.data)
            localStorage.setItem('token', res.data.key)
            //this.props.history.push()
        }).catch(err => {
            console.log(err)
        }) } else {
            console.log('The provided passwords do not match')
            window.alert('The provided passwords do not match')
        }
    }

    render() {
        return (
            <div>
                <h1>Account Registration</h1>
                <form>
                    <h2>Login</h2>
                    <input name="username" placeholder="Login" onChange={this.handleChange} value={this.state.username} />
                    <h2>Password</h2>
                    <input name="password1" placeholder="Password" onChange={this.handleChange} value={this.state.password1} />
                    <h2>Re-type Password</h2>
                    <input name="password2" placeholder="Re-type Password" onChange={this.handleChange} value={this.state.password2} />
                </form>
                <button onClick={this.handleRegister}>Connect</button>
            </div>
        )
    }
}
