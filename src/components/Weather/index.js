import {Component} from 'react'

import Header from '../Header'
import NavigationSection from '../NavigationSection'

import './index.css'

class Weather extends Component {
  state = {
    currentState: '',
    weatherDetails: {},
  }

  componentDidMount() {
    this.getWeather()
  }

  getWeather = async () => {
    const {currentState} = this.state
    console.log(currentState)
    const url = `https://foreca-weather.p.rapidapi.com/current/102643743?alt=0&tempunit=C&windunit=MS&tz=india/${currentState}&lang=en`
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'foreca-weather.p.rapidapi.com',
        'x-rapidapi-key': 'cdb4aad450mshfc0f93d4e271f05p10f85fjsnd0827ee5a56f',
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      const updatedWeather = {
        temperature: data.current.temperature,
        humidity: data.current.relHumidity,
        pressure: data.current.pressure,
      }
      console.log(updatedWeather)
      this.setState({weatherDetails: updatedWeather})
    }
  }

  onChangeSelectedState = event => {
    this.setState({currentState: event.target.value}, this.getWeather)
  }

  render() {
    const {weatherDetails, currentState} = this.state
    const {temperature, humidity, pressure} = weatherDetails
    return (
      <div className="weather-bg">
        <NavigationSection activeTabId="WEATHER" />
        <div className="con">
          <Header />
          <p className="weather-heading">Weather</p>
          <div className="weather-container">
            <label htmlFor="state" className="select-state-heading">
              Select State
            </label>
            <select
              className="stateInput"
              id="state"
              value={currentState}
              onChange={this.onChangeSelectedState}
            >
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Andaman and Nicobar Islands">
                Andaman and Nicobar Islands
              </option>
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
              <option value="Assam">Assam</option>
              <option value="Bihar">Bihar</option>
              <option value="Chandigarh">Chandigarh</option>
              <option value="Chhattisgarh">Chhattisgarh</option>
              <option value="Dadar and Nagar Haveli">
                Dadar and Nagar Haveli
              </option>
              <option value="Daman and Diu">Daman and Diu</option>
              <option value="Delhi">Delhi</option>
              <option value="Lakshadweep">Lakshadweep</option>
              <option value="Puducherry">Puducherry</option>
              <option value="Goa">Goa</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Haryana">Haryana</option>
              <option value="Himachal Pradesh">Himachal Pradesh</option>
              <option value="Jammu and Kashmir">Jammu and Kashmir</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Kerala">Kerala</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Manipur">Manipur</option>
              <option value="Meghalaya">Meghalaya</option>
              <option value="Mizoram">Mizoram</option>
              <option value="Nagaland">Nagaland</option>
              <option value="Odisha">Odisha</option>
              <option value="Punjab">Punjab</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Sikkim">Sikkim</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Telangana">Telangana</option>
              <option value="Tripura">Tripura</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Uttarakhand">Uttarakhand</option>
              <option value="West Bengal">West Bengal</option>
            </select>

            <div className="weather-display">
              <div className="forecast">
                <p className="heading">Temperature</p>
                <h1 className="text">{temperature}</h1>
              </div>
              <div className="vl" />
              <div className="forecast">
                <p className="heading">Humidity</p>
                <h1 className="text">{humidity}</h1>
              </div>
              <div className="vl" />
              <div className="forecast">
                <p className="heading">Pressure</p>
                <h1 className="text">{pressure}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Weather
