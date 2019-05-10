import BigCalendar from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import moment from 'moment'

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
const localizer = BigCalendar.momentLocalizer(moment) // or globalizeLocalizer
const now = new Date()

import React, { Component } from 'react'

class MyCalendar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      events: []
    }
  }

  componentDidMount() {
    if (this.props.events) {
      var parsed = this.props.events.map(e => {
        console.log(e.acf)
        var obj = {
          id: e.id,
          title: e.title,
          allDay: e.acf.all_day,
          start: moment(e.acf.start).toDate(),
          end: moment(e.acf.end).toDate()
        }
        console.log(obj)
        return obj
      })
      this.setState({
        events: parsed
      })
    }
  }

  render() {
    return (
      <div className="calendar-wrap">
        <BigCalendar
          localizer={localizer}
          events={this.state.events}
          startAccessor="start"
          endAccessor="end"
        />
      </div>
    )
  }
}

export default MyCalendar
