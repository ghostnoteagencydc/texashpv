import React, { Component } from 'react'
import CalendarView from '../components/Calendar/CalendarView'
import CalendarAddEvent from '../components/Calendar/CalendarAddEvent'
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
        <CalendarAddEvent {...this.props} />
        <CalendarView events={this.props.events} {...this.props} />
      </div>
    )
  }
}

export default Calender
