import React, { Component } from 'react'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: ''
    }
    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(e) {
    e.preventDefault()
    this.props.getLogin(this.state.username, this.state.password)
  }

  handleInput(e) {
    this.setState({
      [`${e.currentTarget.name}`]: e.currentTarget.value
    })
  }
  render() {
    console.log(this.props.loginData)
    return (
      <div>
        <p>
          {this.props.loginData.isLoggedIn
            ? `You are logged in as ${this.props.loginData.userData.username}`
            : 'You are not logged in'}
        </p>
        <p
          dangerouslySetInnerHTML={{
            __html: this.props.loginData.loginErrorMessage
          }}
        />
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            id="username"
            placeholder="Username"
            name="username"
            value={this.state.username}
            onChange={this.handleInput}
          />
          <input
            type="text"
            id="password"
            placeholder="Password"
            name="password"
            value={this.state.password}
            onChange={this.handleInput}
          />
          <button type="submit">submit</button>
        </form>
      </div>
    )
  }
}

export default Login
