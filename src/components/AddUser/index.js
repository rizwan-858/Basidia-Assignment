import {Component} from 'react'
import {v4} from 'uuid'

import NavigationSection from '../NavigationSection'
import Header from '../Header'

import './index.css'

class AddUser extends Component {
  state = {
    usernameInput: '',
    emailInput: '',
    phoneInput: '',
    dobInput: '',
    stateInput: '',
    emailErr: false,
    phoneErr: false,
  }

  onChangeUsername = event => {
    this.setState({usernameInput: event.target.value})
  }

  onChangeEmail = event => {
    const input = event.target.value
    this.setState({emailInput: event.target.value})
    if (!input.includes('@gmail.com')) {
      this.setState({emailErr: true})
    } else {
      this.setState({emailErr: false})
    }
  }

  onChangePhone = event => {
    const input = event.target.value
    this.setState({phoneInput: event.target.value})
    const numLength = input.length
    if (numLength < 10) {
      this.setState({phoneErr: true})
    } else {
      this.setState({phoneErr: false})
    }
  }

  onChangeDob = event => {
    this.setState({dobInput: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {
      usernameInput,
      emailInput,
      phoneInput,
      dobInput,
      stateInput,
    } = this.state
    const newUser = {
      id: v4(),
      username: usernameInput,
      email: emailInput,
      phone: phoneInput,
      DOB: dobInput,
      state: stateInput,
    }

    const user = JSON.parse(localStorage.getItem('usersList'))
    if (user) {
      const newdata = [...user, newUser]
      localStorage.setItem('usersList', JSON.stringify(newdata))
    } else {
      const newdata = [newUser]
      localStorage.setItem('usersList', JSON.stringify(newdata))
    }

    this.setState({
      usernameInput: '',
      emailInput: '',
      phoneInput: '',
      dobInput: '',
      stateInput: '',
    })
  }

  onChangeSelectedState = event => {
    this.setState({stateInput: event.target.value})
  }

  renderAddUserForm = () => {
    const {
      usernameInput,
      emailInput,
      phoneInput,
      dobInput,
      emailErr,
      phoneErr,
      stateInput,
    } = this.state

    return (
      <form onSubmit={this.onSubmitForm} className="form-container">
        <div className="container">
          <p className="label">Username</p>
          <div className="input-container">
            <input
              value={usernameInput}
              type="text"
              className="Input"
              onChange={this.onChangeUsername}
            />
          </div>
        </div>

        <div className="container">
          <p className="label">Email</p>
          <div className="input-container">
            <input
              value={emailInput}
              type="text"
              onChange={this.onChangeEmail}
              className="Input"
            />
          </div>
        </div>
        {emailErr && (
          <p className="emailErrMsg inputLaptop">Enter valid email id</p>
        )}

        <div className="container">
          <p className="label">Phone</p>
          <div className="input-container">
            <input
              value={phoneInput}
              type="tel"
              onChange={this.onChangePhone}
              className="Input"
            />
          </div>
        </div>
        {phoneErr && (
          <p className="inputLaptop phoneErrMsg">
            Enter a valid phone number(10 digits)
          </p>
        )}
        <div className="container">
          <p className="label">DOB</p>
          <div className="input-container">
            <input
              value={dobInput}
              type="date"
              onChange={this.onChangeDob}
              className="dateInput"
            />
          </div>
        </div>
        <div className="container">
          <label htmlFor="state" className="label">
            State
          </label>
          <div className="input-container">
            <select
              className="stateInput"
              id="state"
              value={stateInput}
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
          </div>
        </div>
        <button type="submit" className="submitButton">
          Create User
        </button>
      </form>
    )
  }

  render() {
    return (
      <div className="add-users-bgContainer">
        <NavigationSection activeTabId="ADDUSER" />
        <div className="con">
          <Header />
          <p className="form-heading">Add User</p>
          {this.renderAddUserForm()}
        </div>
      </div>
    )
  }
}

export default AddUser
