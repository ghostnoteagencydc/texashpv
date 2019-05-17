import React, { Component } from 'react'
import CalendarView from '../components/Calendar/CalendarView'
import CalendarAddEvent from '../components/Calendar/CalendarAddEvent'
import './calendar.css'

class Calender extends Component {
  constructor() {
    super()
    this.state = {
      popUpEventInfo: {},
      popupPosition: {
        left: 0,
        top: 0
      },
      popUpShown: false
    }
    this.closePopup = this.closePopup.bind(this)
    this.togglePopup = this.togglePopup.bind(this)
  }
  static async getInitialProps() {
    const res = await fetch(
      'https://hpvtexas.wpengine.com/wp-json/better-rest-endpoints/v1/event'
    )
    const data = await res.json()
    return { events: data }
  }
  togglePopup(e, event) {
    console.log(e.currentTarget.offsetWidth)
    var wrap = document.querySelector('.calendar-wrap')
    var popup = document.querySelector('.calendar-popup')
    //e is dom event
    var elPos = e.currentTarget.getBoundingClientRect()
    var popPos = popup.getBoundingClientRect()
    var wrapPos = wrap.getBoundingClientRect()
    console.log(wrapPos)
    console.log('toggle popup')
    this.setState({
      popUpEventInfo: event,
      popupPosition: {
        left: elPos.left - e.currentTarget.offsetWidth - 25 + 'px',
        top: elPos.top - wrapPos.top + 'px'
      },
      popUpShown: true
    })
    // console.log(popPos.left + wrapPos.left + 300)
    // console.log(wrap.offsetWidth)
    // if (popPos.left + 300 > wrap.offsetWidth) {
    //   console.log('aaahhhh')
    // }
  }

  closePopup(e) {
    console.log(e.target)
    if (
      this.state.popUpShown &&
      !e.target.classList.contains('custom-event-clicker') &&
      !e.target.classList.contains('calendar-popup') &&
      !e.target.parentElement.classList.contains('calendar-popup')
    ) {
      this.setState({
        popUpShown: false
      })
    }
  }
  render() {
    return (
      <div>
        <div className="calendar-container" onClick={this.closePopup}>
          <div
            className="calendar-popup"
            style={{
              position: 'absolute',
              left: `${this.state.popupPosition.left}`,
              top: `${this.state.popupPosition.top}`,
              display: `${this.state.popUpShown ? 'block' : 'none'}`
            }}
          >
            <h2>{this.state.popUpEventInfo.title}</h2>
            <p>{this.state.popUpEventInfo.description}</p>
          </div>

          <div className="calendar-left">
            <CalendarAddEvent {...this.props} />
          </div>
          <CalendarView
            events={this.props.events}
            {...this.props}
            togglePopup={this.togglePopup}
          />
        </div>
      </div>
    )
  }
}

export default Calender
