import React from 'react'
import Header from '../components/header'
import App, { Container } from 'next/app'
import fetch from 'isomorphic-unfetch'
import _Cookies from 'easy-cookie-manager'

import '../components/shared.css'

class MyApp extends App {
  constructor() {
    super()
    this.state = {
      userToken: '',
      isLoggedIn: false,
      userData: {},
      loginErrorMessage: ''
    }
    this.getLogin = this.getLogin.bind(this)
    this.logout = this.logout.bind(this)
    this.checkTokenFromCookie = this.checkTokenFromCookie.bind(this)
  }
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    const res = await fetch(
      'https://hpvtexas.wpengine.com/wp-json/better-rest-endpoints/v1/pages'
    )
    const menu = await fetch(
      'https://hpvtexas.wpengine.com/wp-json/better-rest-endpoints/v1/menus/main'
    )
    const data = await res.json()
    const menudata = await menu.json()

    return { pageProps: pageProps, menudata: menudata }
  }

  async checkTokenFromCookie() {
    let token = _Cookies.getCookie('hpv_usertoken39200')
    if (token) {
      const res = await fetch(
        'https://hpvtexas.wpengine.com/wp-json/jwt-auth/v1/token/validate',
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      const cleanRes = await res.json()
      if (cleanRes.code == 'jwt_auth_valid_token') {
        console.log(cleanRes)
        this.setState({
          userToken: token,
          isLoggedIn: true
        })

        this.getUserInfo(token)
      }
    } else {
      console.log('cookie not found with token')
    }
  }

  componentDidMount() {
    this.checkTokenFromCookie()
  }

  async getUserInfo(token) {
    const rawResponse = await fetch(
      'https://hpvtexas.wpengine.com/wp-json/wp/v2/users/me',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    const res = await rawResponse.json()
    console.log(res)
    if (!res.data || !res.data.status) {
      this.setState({
        userData: res
      })
    }
  }

  async getLogin(user, pass) {
    const rawResponse = await fetch(
      'https://hpvtexas.wpengine.com/wp-json/jwt-auth/v1/token',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: user,
          password: pass
        })
      }
    )
    const res = await rawResponse.json()
    if (!res.data || !res.data.status) {
      this.setState({
        userToken: res.token,
        isLoggedIn: true
      })
      _Cookies.setCookie('hpv_usertoken39200', res.token, 30)
    } else if (res.message) {
      console.log(res.message)
      this.setState({
        loginErrorMessage: res.message
      })
    }
    console.log(res)
  }

  logout() {
    console.log('logging out')
    this.setState({
      userToken: '',
      isLoggedIn: false
    })
    _Cookies.deleteCookie('hpv_usertoken39200')
    console.log('logged out')
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Header menudata={this.props.menudata} />
        <Component
          {...pageProps}
          getLogin={this.getLogin}
          logout={this.logout}
          loginData={{
            isLoggedIn: this.state.isLoggedIn,
            userToken: this.state.userToken,
            loginErrorMessage: this.state.loginErrorMessage,
            userData: this.state.userData
          }}
        />
      </Container>
    )
  }
}

export default MyApp
