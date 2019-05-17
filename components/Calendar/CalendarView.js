import BigCalendar from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import CalendarEvent from './CalendarEvent'
import moment from 'moment'

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
const localizer = BigCalendar.momentLocalizer(moment) // or globalizeLocalizer
const now = new Date()

import React, { Component } from 'react'

function getShortString(str) {
  if (str.length > 20) {
    return str.substring(0, 20) + '...'
  } else {
    return str
  }
}

class MyCalendar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      events: [],
      currentView: ''
    }
  }

  componentDidMount() {
    console.log(this.props)
    if (this.props.events) {
      var parsed = this.props.events.map(e => {
        console.log(moment(e.acf.end).toDate())
        if (e.acf && e.acf.approved) {
          var obj = {
            id: e.id,
            title: e.title,
            allDay: e.acf.all_day,
            start: moment(e.acf.start).toDate(),
            end: moment(e.acf.end).toDate(),
            approved: e.acf.approved,
            description: e.acf.description ? e.acf.description : 'Event',
            shortDescription: getShortString(
              e.acf.description ? e.acf.description : 'Event'
            )
          }
          console.log(obj)
          return obj
        }
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
          allDayAccessor="allDay"
          step={15}
          timeslots={8}
          showMultiDayTimes
          onView={view => {
            console.log(view)
            this.setState({ currentView: view })
          }}
          components={{
            event: () => {
              var cev = new CalendarEvent()
              cev.togglePopup = this.props.togglePopup
              return cev
            }
          }}
        />
      </div>
    )
  }
}

export default MyCalendar
