import { withRouter } from 'next/router'
import Head from 'next/head'
import React, { Component } from 'react'
import Link from 'next/link'
import './post.css'

class Content extends Component {
  openShareBox(link) {
    var leftPos = window.innerWidth / 2
    window.open(
      link,
      'targetWindow',
      'toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=600,height=400, top=0, left=' +
        leftPos.toString()
    )
    return false
  }
  render() {
    if (this.props.data) {
      return (
        <div>
          <Head>
            <meta property="og:url" content={window.location.href} />
            <meta property="og:type" content="post" />
            <meta property="og:title" content={this.props.data.title} />
            <meta property="og:description" content={this.props.data.excerpt} />
            <meta
              property="og:image"
              content="http://static01.nyt.com/images/2015/02/19/arts/international/19iht-btnumbers19A/19iht-btnumbers19A-facebookJumbo-v2.jpg"
            />
          </Head>
          <Link href="/blog">Back to Blog</Link>
          <h1>{this.props.data.title}</h1>
          <p>By: {this.props.data.author_nicename}</p>
          <div
            className="post-content-container"
            dangerouslySetInnerHTML={{ __html: this.props.data.content }}
          />
          <div class="blog-post-social-icons">
            <a
              onClick={() =>
                this.openShareBox(
                  `https://twitter.com/intent/tweet?text=${
                    this.props.data.title
                  }:${window.location.href}`
                )
              }
            >
              <i class="fab fa-twitter" />
            </a>
            <a
              onClick={() =>
                this.openShareBox(
                  `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURI(
                    window.location.href
                  )}&title=${this.props.data.title}&source=HPVTexas`
                )
              }
              target="_blank"
            >
              <i class="fab fa-linkedin-in" />
            </a>
            <a
              onClick={() =>
                this.openShareBox(
                  `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                    window.location.href
                  )}&quote=${encodeURI(this.props.data.title)}`
                )
              }
            >
              <i class="fab fa-facebook" />
            </a>
            <a
              onClick={() =>
                this.openShareBox(
                  `mailto:?subject=${this.props.data.title}&body=${
                    window.location.href
                  }`
                )
              }
              target="_blank"
            >
              <i class="fas fa-envelope" />
            </a>
          </div>
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
