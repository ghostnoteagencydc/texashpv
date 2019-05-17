import React, { Component } from 'react'
import Link from 'next/link'
import dummyData from './dummymemberdata.json'
import './members.css'

class Members extends Component {
  // static async getInitialProps() {
  //   const res = await fetch(
  //     'https://hpvtexas.wpengine.com/wp-json/better-rest-endpoints/v1/users?media=true'
  //   )
  //   const data = await res.json()
  //   console.log(data)
  //   return { posts: data }
  // }
  render() {
    return (
      <div className="members">
        <h1>Members</h1>
        <div className="member-list">
          {dummyData.map((m, i) => {
            return (
              <Link href={`/member?id=${m.id}`} key={i}>
                <div key={i} className="member-list-box">
                  <div
                    className="member-list-box-av"
                    style={{
                      backgroundImage: `url(${m.avatar})`
                    }}
                  />
                  <h4>{m.name}</h4>
                  <p>{m.title}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Members
