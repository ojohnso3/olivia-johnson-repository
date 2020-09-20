import React from 'react';
import '../css/Bio.css';

class Bio extends React.Component {

  render() {
    return (
      <div className='bio'>
        <a id='bio-top'><h1 className='section-title'>About Me</h1></a>
        
        <div className='bio-container'>
          <img src='olivia.jpg' className="olivia-logo" alt="logo" />
          <h3 className='bio-text'>Hi! I'm Olivia Johnson and I'm a junior from New York City studying 
            Computer Science at Brown University. 
            <br/><br/> 
            I'm currently working as a Fullstack Software Engineer at Strongsuit. 
            I am especially interested in Artificial Intelligence and Machine Learning.
            I am also passionate about the intersection of technology with fields such as entertainment and biotech. 
            <br/><br/> 
            Outside of software engineering, I love to play soccer, bake banana bread, read dystopian fiction, 
            and stay up-to-date with new TV shows. 
          </h3>
        </div>
        
      </div>
    );
  }
}

export default Bio;