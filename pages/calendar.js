import React, { Component } from 'react'
import CalendarView from '../components/Calendar/CalendarView'
import './calendar.css'

class Calender extends Component {
  static async getInitialProps() {
    const res = await fetch(
      'https://hpvtexas.wpengine.com/wp-json/better-rest-endpoints/v1/event'
    )
    const data = await res.json()
    return { events: data }
  }
  render() {
    return (
      <div>
        <CalendarView events={this.props.events} />
      </div>
    )
  }
}

export default Calender
