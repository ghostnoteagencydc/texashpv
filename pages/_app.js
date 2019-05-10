import React from 'react'
import Header from '../components/header'
import App, { Container } from 'next/app'
import fetch from 'isomorphic-unfetch'

import '../components/shared.css'

class MyApp extends App {
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

  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Header menudata={this.props.menudata} />
        <Component {...pageProps} />
      </Container>
    )
  }
}

export default MyApp
