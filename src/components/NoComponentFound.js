import React from 'react';
import Header from './Header.js';
import '../css/NoComponentFound.css';

class NoComponentFound extends React.Component {

  render() {
    return (
      <div id='no-found-page'>
        <Header />
        <br/>
        <h1 id='no-found-header'>Sorry! Looks like that page doesn't exist. 
          Click <a href='/home'>HERE</a> to return Home</h1>
      </div>
    )
  }
}

export default NoComponentFound;
