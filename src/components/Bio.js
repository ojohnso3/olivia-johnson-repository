import React from 'react';
import '../css/Bio.css';

class Bio extends React.Component {
  
  constructor(props) {
    super(props); 
  }

  render() {
    return (
      <div className='bio'>
        <a id='bio-top'><h1 className='section-title'>About Me</h1></a>
        
        <div className='bio-container'>
          <img src='olivia.jpg' className="Olivia-logo" alt="logo" />
          <h3 className='bio-text'>Hi! I'm <u>Olivia Johnson</u> and I'm a junior studying Computer Science at Brown University. 
            I'm currently working as a <b>fullstack software engineer</b> at Strongsuit. I am passionate about the 
            intersection of technology with fields such as entertainment and biotech. Furthermore, 
            I am especially interested in <em>artificial intelligence</em> and <em>machine learning</em>.
            Outside of software engineering, I love to play soccer, bake banana bread, read dystopian fiction, 
            and stay up-to-date with new TV shows. 
          </h3>
        </div>
        
      </div>
    );
  }
}

export default Bio;