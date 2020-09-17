import React from 'react';
import Header from './Header.js';
import '../css/Home.css';
import { GithubOutlined, LinkedinOutlined, MailOutlined, FormOutlined} from '@ant-design/icons';

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <Header className='header'/>

        <div className='home-content'>
          <div className='the-title'>
            <img src='orange-full.png' className='page-image'/>
          </div>

          <div className='resources-container'>
            <div className='resource-item'>
              <a href='https://github.com/ojohnso3' target='_blank' className='resource-link'><GithubOutlined style={{ fontSize: '200px'}} className='resource'/></a>
              <h3 className='resource-name'>GitHub</h3>
            </div>
            <div className='resource-item'>
              <a href='https://www.linkedin.com/in/olivia-johnson-2022/' target='_blank'><LinkedinOutlined style={{ fontSize: '200px'}} className='resource'/></a>
              <h3 className='resource-name'>LinkedIn</h3>
            </div>
            <div className='resource-item'>
              <a href='mailto:olivia_johnson@brown.edu' target='_blank'><MailOutlined style={{ fontSize: '200px'}} className='resource'/></a>
              <h3 className='resource-name'>Email</h3>
            </div>
            <div className='resource-item'>
              <a href='resume.pdf' target='_blank'><FormOutlined style={{ fontSize: '200px'}} className='resource'/></a>
              <h3 className='resource-name'>Resume</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
