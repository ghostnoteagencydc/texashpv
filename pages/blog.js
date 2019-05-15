import { Component } from 'react'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import Moment from 'moment'

import './blog.css'

class Blog extends Component {
  static async getInitialProps() {
    const res = await fetch(
      'https://hpvtexas.wpengine.com/wp-json/better-rest-endpoints/v1/posts?media=true'
    )
    const data = await res.json()
    console.log(data)
    return { posts: data }
  }

  render() {
    console.log(this.props.posts)
    return (
      <main>
        {/* <Header menudata={this.props.menudata} /> */}
        <Link href="/">
          <a>Go Home</a>
        </Link>
        <section>
          <h1>Blog</h1>
          <div className="posts-grid">
            {this.props.posts.map((p, i) => {
              var imgurl = ''
              if (p.media) {
                imgurl = p.media.medium
              } else {
                imgurl =
                  'https://designshack.net/wp-content/uploads/placeholder-image.png'
              }
              return (
                <Link href={`/post?slug=${p.slug}`} key={i}>
                  <div
                    className="post-box"
                    key={i}
                    data-id={p.id}
                    data-slug={p.slug}
                    data-tags-ids={JSON.stringify(p.tag_ids)}
                    data-tags={JSON.stringify(p.tag_names)}
                    data-category-ids={JSON.stringify(p.category_ids)}
                    data-categories={JSON.stringify(p.category_names)}
                    data-author-name={p.author}
                    data-author-id={p.author_id}
                    data-author-nicename={p.author_nicename}
                    data-posted-date={p.date}
                    data-modified-date={p.date_modified}
                  >
                    <div className="post-box-left">
                      <div
                        className="post-box-image"
                        style={{ backgroundImage: `url(${imgurl})` }}
                      />
                    </div>
                    <div className="post-box-right">
                      <p className="post-box-date">
                        {Moment(p.date).format('D  MMMM YYYY')}
                      </p>
                      <h3 className="post-box-title">{p.title}</h3>
                      <p className="post-box-author">By: {p.author_nicename}</p>
                      <p
                        className="post-box-excerpt"
                        dangerouslySetInnerHTML={{ __html: p.excerpt }}
                      />
                      <div className="post-box-read-button">
                        <span>Read Post</span> <i className="fas fa-arrow-right" />
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </section>
      </main>
    )
  }
}

export default Blog
