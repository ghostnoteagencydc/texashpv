import { withRouter } from 'next/router'
import React, { Component } from 'react'
import Link from 'next/link'

class Content extends Component {
  render() {
    console.log(this.props)
    if (this.props.data) {
      return (
        <div>
          <Link href="/blog">Back to Blog</Link>
          <h1>{this.props.data.title}</h1>
          <p>By: {this.props.data.author_nicename}</p>
          <div
            className="post-content-container"
            dangerouslySetInnerHTML={{ __html: this.props.data.content }}
          />
        </div>
      )
    } else {
      console.log(this.props)
      return (
        <Link href="/blog">
          <p>Back to Blog</p>
        </Link>
      )
    }
  }
}

const Post = withRouter(props => {
  return <Content {...props} id={props.router.query.id} />
})

export default Post

Post.getInitialProps = async function(props) {
  const res = await fetch(
    `https://hpvtexas.wpengine.com/wp-json/better-rest-endpoints/v1/post/${
      props.query.slug
    }`
  )
  const data = await res.json()
  return { data: data }
}
