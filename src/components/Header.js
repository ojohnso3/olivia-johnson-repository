import React from 'react';
import '../css/Header.css';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div className="Login">
        <div className="header">
            <img src='orange2.png' className="header-logo" alt="logo" />
            <Link to={'/home'} className='link'>HOME</Link>
            <Link to={'/projects'} className='link'>PROJECTS</Link>
            <Link to={'/experience'} className='link'>EXPERIENCE</Link>
            <Link to={'/profile'} className='link'>PROFILE</Link>
            <Button href='/login' className='logout-button' size='large' style={{fontSize: '25px'}}>Log Out</Button>          
        </div>
      </div>
    );
  }
}

export default Home;
