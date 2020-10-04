import React from 'react';
import '../css/Skills.css';

class Skills extends React.Component {

  render() {
    return (
      <div className='skills'>
        <a id='skills-top'><h1 className='section-title'>My Skills</h1></a>
        <div className='skills-content'>
          <div className='skills-cat'>
            <h2 className='skills-head'>Programming Languages</h2>
            <div className='lang'>
              <div>
                <img src='python.png' className="lang-img" alt="logo" />
                <h3>Python</h3>
              </div>
              <div>
                <img src='java.jpg' className="lang-img" alt="logo" />
                <h3>Java</h3>
              </div>
              <div>
                <img src='javascript.png' className="lang-img" alt="logo" />
                <h3>Javascript</h3>
              </div>
              <div>
                <img src='c.png' className="lang-img" alt="logo" />
                <h3>C</h3>
              </div>
            </div>
            <div className='lang'>
              <div>
                <img src='html.png' className="lang-img" alt="logo" />
                <h3>HTML</h3>
              </div>
              <div>
                <img src='css.png' className="lang-img" alt="logo" />
                <h3>CSS</h3>
              </div>
              <div>
                <img src='matlab.png' className="lang-img" alt="logo" />
                <h3>MATLAB</h3>
              </div>
              <div>
                <img src='swift.png' className="lang-img" alt="logo" />
                <h3>Swift</h3>
              </div>
            </div>
          </div>

          <div className='skills-cat' id='tools'>
            <h2 className='skills-head'>Technical Tools</h2>
            <div className='lang'>
              <div>
                <img src='react.png' className="lang-img" alt="logo" />
                <h3>ReactJS</h3>
              </div>
              <div>
                <img src='node.png' className="lang-img" alt="logo" />
                <h3>NodeJS</h3>
              </div>
              <div>
                <img src='mongdb.png' className="lang-img" alt="logo" />
                <h3>MongoDB</h3>
              </div>
              <div>
                <img src='sql.png' className="lang-img" alt="logo" />
                <h3>SQL</h3>
              </div>
            </div>
            <div className='lang'>
              <div>
                <img src='pytorch.png' className="lang-img" alt="logo" />
                <h3>PyTorch</h3>
              </div>
              <div>
                <img src='tensorflow.png' className="lang-img" alt="logo" />
                <h3>TensorFlow</h3>
              </div>
              <div>
                <img src='redux.png' className="lang-img" alt="logo" />
                <h3>Redux</h3>
              </div>
              <div>
                <img src='jquery.png' className="lang-img" alt="logo" />
                <h3>JQuery</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;