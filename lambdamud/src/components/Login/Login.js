import React, { Component } from 'react'
import axios from 'axios'
export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleLogin = () => {
        const requestBody = {
            ...this.state
        }

        axios.post('https://lambdamudproj.herokuapp.com/api/login', requestBody).then(res => {
            localStorage.setItem('token', res.data.key)
        }).catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <div>
                <h1>Welcome to LambdaMud!</h1>
                <form>
                    <h2>Login</h2>
                    <input type="text" name="username" onChange={this.handleChange} placeholder="Login" value={this.state.username} />
                    <h2>Password</h2>
                    <input type="password" name="password" onChange={this.handleChange} placeholder="Password" value={this.state.password} />
                </form>
                <button onClick={this.handleLogin}>Connect</button>
            </div>
        )
    }

}