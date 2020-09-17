import React from 'react';
import '../css/Education.css';

class Education extends React.Component {

  render() {
    return (
      <div className='education'>
        <a id='education-top'/>
        <h1 className='section-title'>My Education</h1>

        <div className='schools'>
          <div className='school'>
            <img src='brown-logo.png' className="school-logo" id='brown-img' alt="logo" />
            <h2>Brown University</h2>
            <h3><b>Location:</b> Providence, RI</h3>
            <h3><b>Graduation Year:</b> 2022</h3>
            <h3><b>Major:</b> Computer Science, B.S.</h3>
            <h3><b>Clubs:</b> Women in Computer Science, Women in Science and Engineering, 
              STEM Tutoring, Club Soccer</h3>
          </div>
          <div className='school'>
            <img src='trinity-logo.jpg' className="school-logo" alt="logo" />
            <h2>Trinity High School</h2>
            <h3><b>Location:</b> New York City, NY</h3>
            <h3><b>Graduation Year:</b> 2018</h3>
            <h3><b>Honors:</b> Cum Laude, Hawley Award (High Academic Achievement), Olympic Soccer Development Program</h3>
          </div>
        </div>
        
      </div>
    );
  }
}

export default Education;