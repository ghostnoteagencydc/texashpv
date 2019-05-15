import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Moment from 'moment'

class CalendarAddEvent extends Component {
  constructor() {
    super()
    this.state = {
      startDate: new Date(),
      endDate: new Date(),
      title: '',
      allDay: false
    }
    this.handleChangeStart = this.handleChangeStart.bind(this)
    this.handleChangeEnd = this.handleChangeEnd.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChangeTitle = this.handleChangeTitle.bind(this)
    this.handleChangeAllDay = this.handleChangeAllDay.bind(this)
    this.msgField = React.createRef()
  }

  async handleSubmit() {
    this.msgField.current.className = ''
    this.msgField.current.classList.add('calendar-add-msg', 'msg-field')
    var noErrors = true;
    if(this.state.title.length < 1){
      noErrors = false;
    }
    if(noErrors){
    const rawResponse = await fetch(
      'https://hpvtexas.wpengine.com/wp-json/wp/v2/event',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + this.props.loginData.userToken
        },
        body: JSON.stringify({
          title: this.state.title,
          status: 'publish'
        })
      }
    )
    const res = await rawResponse.json()

    const acfPost = await fetch(
      `https://hpvtexas.wpengine.com/wp-json/acf/v3/event/${res.id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + this.props.loginData.userToken
        },
        body: JSON.stringify({
          fields: {
            all_day: this.state.allDay,
            start: Moment(this.state.startDate).format('YYYY-M-D H:m:s'),
            end: Moment(this.state.endDate).format('YYYY-M-D H:m:s'),
            approved: false
          }
        })
      }
    )
    const acfRes = await acfPost.json()
    } else{
      this.msgField.current.innerHTML = 'ERROR: NO TITLE FOUND'
      this.msgField.current.classList.add('msg-field-shown', 'msg-error')
    }
  }

  handleChangeStart(date) {
    if (this.state.endDate < date) {
      this.setState({
        startDate: date,
        endDate: date
      })
    }
    this.setState({
      startDate: date
    })
  }
  handleChangeEnd(date) {
    this.setState({
      endDate: date
    })
  }

  handleChangeTitle(e) {
    this.setState({
      title: e.currentTarget.value
    })
  }
  handleChangeAllDay(e) {
    this.setState({
      allDay: e.currentTarget.checked
    })
  }
  render() {
    return (
      <div className="calendar-add-event">
      <p className='calendar-add-msg msg-field' ref={this.msgField}></p>
        <div class='calendar-add-event-form'>
        <label>
          Event Name
          <input
            type="text"
            placeholder="Event Name"
            onChange={this.handleChangeTitle}
          />
        </label>
        <label>
          All Day?
          <input type="checkbox" onChange={this.handleChangeAllDay} />
        </label>
        <label>
          Start Date
          <div className="icon-and-date-picker">
            <i className="far fa-calendar-alt" />
            <DatePicker
              selected={this.state.startDate}
              onChange={this.handleChangeStart}
              startDate={this.state.startDate}
              endDate={this.state.endDate}
              minDate={new Date()}
              name="startDate"
              dateFormat="MM/dd/yyyy h:mm aa"
              showTimeInput
              locale="en"
              selectsStart
              shouldCloseOnSelect={false}
            />
          </div>
        </label>
        <i className="fas fa-angle-right" />
        <label>
          End Date
          <div className="icon-and-date-picker">
            <i className="far fa-calendar-alt" />
            <DatePicker
              selected={this.state.endDate}
              onChange={this.handleChangeEnd}
              startDate={this.state.startDate}
              endDate={this.state.endDate}
              minDate={this.state.startDate}
              name="startDate"
              dateFormat="MM/dd/yyyy h:mm aa"
              showTimeInput
              locale="en"
              selectsEnd
              shouldCloseOnSelect={false}
            />
          </div>
        </label>
        <button onClick={this.handleSubmit}>Submit Event To Review</button>
        </div>
      </div>
    )
  }
}

export default CalendarAddEvent
