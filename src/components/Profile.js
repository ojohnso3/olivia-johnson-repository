import React from 'react';
import Header from './Header.js';
import Bio from './Bio.js';
import Education from './Education.js';
import Skills from './Skills.js';
import '../css/Profile.css';
import { Link } from 'react-router-dom';


class Profile extends React.Component {
  render() {
    return (
      <div className="profile">
        <Header/>

        <div className='profile-content'>
          {/* <h1 className='page-title'>Profile Page</h1> */}
          <div className='the-title'>
            <img src='profile.jpg' className='page-image'/>
            <div className="overlay">Profile</div>
          </div>

          <div className='profile-links'>
            <a className='profile-link' href='#bio-top'>Bio</a>
            <a className='profile-link' href='#education-top'>Education</a>
            <a className='profile-link' href='#skills-top'>Skills</a>
          </div>

          <Bio />
          
          <Education />

          <Skills />
          
        </div>
      </div>
    );
  }
}

export default Profile;
