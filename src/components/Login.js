import React from 'react';
import '../css/Login.css';
import { message } from 'antd';

class Login extends React.Component {
  
  constructor(props) {
    super(props); 

    this.handleAddProfile = this.handleAddProfile.bind(this)
  }

  handleAddProfile() {
    message.info('Try Clicking on Olivia!') // fix later
  }


  render() {
    return (
      <div className="login">

        <h1 id='welcome-header'>Welcome to <span id='my-name'>Olivia Johnson</span>’s Website!</h1>

        <h2>Whose profile are you visiting today?</h2>

        <div className='profile-container'>
          <div className='user-profile'>
            <a href='/home'>
              <img src='olivia.jpg' className="user-logo" alt="logo" />
              <h3 className='profile-name'>Olivia</h3>
            </a>
          </div>

          <div className='user-profile' id='plus' onClick={this.handleAddProfile}>
            <img src='plus-icon.png' className="user-logo" alt="logo" />
            <h3 className='profile-name'>Add Profile</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;