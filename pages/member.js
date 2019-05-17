import { withRouter } from 'next/router'
import React, { Component } from 'react'
import Link from 'next/link'

class Content extends Component {
  render() {
    if (this.props) {
      return (
        <div>
          <Link href="/members">Back to Members</Link>
          <h1>Member ID: {this.props.id}</h1>
          <p>Member page</p>
        </div>
      )
    } else {
      return (
        <Link href="/members">
          <p>Back to Members</p>
        </Link>
      )
    }
  }
}

const Post = withRouter(props => {
  console.log(props)
  return <Content {...props} id={props.router.query.id} />
})

export default Post

// Post.getInitialProps = async function(props) {
//   const res = await fetch(
//     `https://hpvtexas.wpengine.com/wp-json/better-rest-endpoints/v1/post/${
//       props.query.slug
//     }`
//   )
//   const data = await res.json()
//   return { data: data }
// }
