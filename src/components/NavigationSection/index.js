import {Link} from 'react-router-dom'

import './index.css'

const NavigationSection = props => {
  const {activeTabId} = props

  const addUserClass =
    activeTabId === 'ADDUSER' ? 'selectedAddUserTab' : 'AddUserTab'

  const usersClass = activeTabId === 'USERS' ? 'selectedUsersTab' : 'AddUserTab'

  const weatherClass =
    activeTabId === 'WEATHER' ? 'selectedWeatherTab' : 'WeatherTab'

  return (
    <div className="navigation-section">
      <img
        className="websiteLogo"
        src="https://res.cloudinary.com/rizwan987/image/upload/v1635937131/Logo_jsqy1o.png"
        alt=""
      />
      <hr className="hrLine" />
      <Link className="LinkItem" to="/add-user">
        <li className={addUserClass}>
          <img
            className="addUser-image"
            src="https://res.cloudinary.com/rizwan987/image/upload/v1635937301/add-user_fa5orv.png"
            alt=""
          />
          <p className="AddUserTabText">Add User</p>
        </li>
      </Link>

      <Link className="LinkItem" to="/users">
        <li className={usersClass}>
          <img
            className="users-image"
            src="https://res.cloudinary.com/rizwan987/image/upload/v1635937416/users_mdpfqh.png"
            alt=""
          />
          <p className="usersTabText">Users</p>
        </li>
      </Link>

      <Link className="LinkItem" to="/weather">
        <li className={weatherClass}>
          <img
            className="weather-image"
            src="https://res.cloudinary.com/rizwan987/image/upload/v1635937424/weather_cizulg.png"
            alt=""
          />
          <p className="weatherTabText">Weather </p>
        </li>
      </Link>
    </div>
  )
}

export default NavigationSection
