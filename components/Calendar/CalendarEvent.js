import React, { Component } from 'react'

class CalendarEvent extends Component {
  constructor() {
    super()
  }

  togglePopup() {}

  render() {
    return (
      <div className="custom_event_content">
        <div
          className="custom-event-clicker"
          onClick={e => {
            this.togglePopup(e, this.props.event)
          }}
        />
        <h4>{this.props.event.title}</h4>
        <p>{this.props.event.shortDescription}</p>
      </div>
    )
  }
}

export default CalendarEvent
