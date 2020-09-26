import React from 'react';
import Header from './Header.js';
import '../css/Home.css';
import { Tooltip } from 'antd';
import { GithubOutlined, LinkedinOutlined, MailOutlined, FormOutlined, InfoCircleOutlined, StarOutlined} from '@ant-design/icons';

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <Header/> 

        <div className='home-content'>
          <div className='the-title' id='home-main'>
            <img src='borange-full.png' alt='my-name' className='page-image'/>
            <div className='line-divider' id='orange-line' />
            <div className='page-summary'>
              <div>
                <h1 className='summary-title'>Olivia Johnson</h1>
                <p>Summer 2021</p>
                <StarOutlined /><StarOutlined /><StarOutlined /><StarOutlined /><StarOutlined />
                <br/><br/>
              </div>
              <div>
                <h2 className='summary-body'>A Fullstack Software Engineer with a breadth of 
                  tech industry experience and programming research. Also a Computer 
                  Science major at Brown University with courses such as 
                  Software Engineering and Data Structures & Algorithms under her belt.
                </h2>
                <br/>
                <p>Click on the icons below for more details...</p>
              </div>
            </div>
          </div>
          
          {/* change to two purple colors */}
          <div className='resources-container'>
            <div className='resource-item'>
              <a href='https://github.com/ojohnso3' target='_blank' rel="noopener noreferrer" className='resource-link'><GithubOutlined style={{ fontSize: '200px', color: '#b587ee'}} className='resource'/></a>
              <Tooltip title="GitHub">
                <InfoCircleOutlined style={{ fontSize: '20px', color: 'white'}} className='resource-info'/>
              </Tooltip>
            </div>
            <div className='resource-item'>
              <a href='https://www.linkedin.com/in/olivia-johnson-2022/' target='_blank' rel="noopener noreferrer" className='resource-link'><LinkedinOutlined style={{ fontSize: '200px', color: '#b587ee'}} className='resource'/></a>
              <Tooltip title="LinkedIn">
                <InfoCircleOutlined style={{ fontSize: '20px', color: 'white'}} className='resource-info'/>
              </Tooltip>
            </div>
            <div className='resource-item'>
              <a href='mailto:olivia_johnson@brown.edu' target='_blank' rel="noopener noreferrer" className='resource-link'><MailOutlined style={{ fontSize: '200px', color: '#b587ee'}} className='resource'/></a>
              <Tooltip title="Email">
                <InfoCircleOutlined style={{ fontSize: '20px', color: 'white'}} className='resource-info'/>
              </Tooltip>
            </div>
            <div className='resource-item'>
              <a href='resume.pdf' target='_blank' rel="noopener noreferrer" className='resource-link'><FormOutlined style={{ fontSize: '200px', color: '#b587ee'}} className='resource'/></a>
              <Tooltip title="Resume">
                <InfoCircleOutlined style={{ fontSize: '20px', color: 'white'}} className='resource-info'/>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
