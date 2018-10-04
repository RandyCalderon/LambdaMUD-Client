import React, { Component } from 'react'

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            login: '',
            password: ''
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div>
                <h1>Welcome to LambdaMud!</h1>
                <form>
                    <h2>Login</h2>
                    <input type="text" name="login" onChange={this.handleChange} placeholder="Login" value={this.state.login} />
                    <h2>Password</h2>
                    <input type="text" name="password" onChange={this.handleChange} placeholder="Password" value={this.state.password} />
                </form>
                <button>Connect</button>
            </div>
        )
    }

}