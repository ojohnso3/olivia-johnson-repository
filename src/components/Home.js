import React from 'react';
import Header from './Header.js';
import '../css/Home.css';
import { Tooltip } from 'antd';
import { GithubOutlined, LinkedinOutlined, MailOutlined, FormOutlined, InfoCircleOutlined} from '@ant-design/icons';

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <Header/> 
        {/* className='header' */}

        <div className='home-content'>
          <div className='the-title'>
            <img src='orange-full.png' alt='my-name' className='page-image'/>
          </div>

          <div className='resources-container'>
            <div className='resource-item'>
              <a href='https://github.com/ojohnso3' target='_blank' rel="noopener noreferrer" className='resource-link'><GithubOutlined style={{ fontSize: '200px'}} className='resource'/></a>
              <Tooltip title="GitHub">
                <InfoCircleOutlined style={{ fontSize: '20px'}} className='resource-info'/>
              </Tooltip>
            </div>
            <div className='resource-item'>
              <a href='https://www.linkedin.com/in/olivia-johnson-2022/' target='_blank' rel="noopener noreferrer"><LinkedinOutlined style={{ fontSize: '200px'}} className='resource'/></a>
              <Tooltip title="LinkedIn">
                <InfoCircleOutlined style={{ fontSize: '20px'}} className='resource-info'/>
              </Tooltip>
            </div>
            <div className='resource-item'>
              <a href='mailto:olivia_johnson@brown.edu' target='_blank' rel="noopener noreferrer"><MailOutlined style={{ fontSize: '200px'}} className='resource'/></a>
              <Tooltip title="Email">
                <InfoCircleOutlined style={{ fontSize: '20px'}} className='resource-info'/>
              </Tooltip>
            </div>
            <div className='resource-item'>
              <a href='resume.pdf' target='_blank' rel="noopener noreferrer"><FormOutlined style={{ fontSize: '200px'}} className='resource'/></a>
              <Tooltip title="Resume">
                <InfoCircleOutlined style={{ fontSize: '20px'}} className='resource-info'/>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
