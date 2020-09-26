import React from 'react';
import '../css/Header.css';
import { Button, Dropdown } from 'antd';
import { Link } from 'react-router-dom';

class OldHeader extends React.Component {

  constructor(props) {
    super(props); 

    this.myFunction = this.myFunction.bind(this)
  }

  myFunction() {
    console.log('hiiii')
    var x = document.getElementById("myTopnav");
    if (x.className === "header") {
      x.className += " responsive";
    } else {
      x.className = "header";
    }
  } 

  render() {
    return (
      <div className="Login">
        <div className="header" id='myTopnav'>
            <img src='black-orange.png' className="header-logo" alt="logo" />
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

export default OldHeader;

            {/* <a id='bars' href="javascript:void(0);" className="icon" onClick={this.myFunction}>
              <i className="fa fa-bars"></i>
            </a>         */}
