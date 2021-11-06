import {Component} from 'react'

import './index.css'

class Header extends Component {
  state = {
    currentDateTime: '',
  }

  componentDidMount() {
    this.timerID = setInterval(this.getDateAndTime, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  getDateAndTime = () => {
    const today = new Date()

    const hour = today.getHours()
    const minutes = today.getMinutes()
    const todayDate = today.getDate()

    const dayName = today.toString().split(' ')[0]
    const month = today.toString().split(' ')[1]

    const isAM = hour >= 12 ? 'PM' : 'AM'
    const hours = ((hour + 11) % 12) + 1

    const dateAndTime = `${dayName} ${todayDate} ${month} ${hours}:${minutes} ${isAM}`

    this.setState({currentDateTime: dateAndTime})
  }

  render() {
    const {currentDateTime} = this.state

    return (
      <div className="header-container">
        <p className="time-and-date">{currentDateTime}</p>
        <div className="profile">
          <p className="user-profile-name">Welcome John</p>
          <img
            className="profile-icon"
            src="https://res.cloudinary.com/rizwan987/image/upload/v1635936753/user-icon_m74aps.png"
            alt="profile"
          />
        </div>
      </div>
    )
  }
}

export default Header
