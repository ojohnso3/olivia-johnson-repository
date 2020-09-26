import React from 'react';
import '../css/Header.css';
import '../css/NewHeader.css';
import { Row, Col, Menu, Icon, Dropdown, Button} from 'antd';
import { PlusCircleOutlined, MenuOutlined} from '@ant-design/icons'
import { Link } from 'react-router-dom';
import Responsive from 'react-responsive';
const { SubMenu } = Menu;

// const Desktop = props => <Responsive {...props} maxWidth={992} />;
const Mobile = props => <Responsive {...props} maxWidth={991} />;


class Header extends React.Component {

  constructor(props) {
    super(props)

  }

  render() {
    const menu = (
    <Menu className='header-wrapper'>
      <Menu.Item key='1'>
          <Link to={{pathname:`/home`}} className='link'>HOME</Link>
      </Menu.Item>
      <Menu.Item key='2'>
        <Link to={{pathname:`/projects`}} className='link'>PROJECTS</Link>
      </Menu.Item>
      <Menu.Item key='3'>
        <Link to={{pathname:`/experience`}} className='link'>EXPERIENCE</Link>
      </Menu.Item>
      <Menu.Item key='4'>
        <Link to={{pathname:`/profile`}} className='link'>PROFILE</Link>
      </Menu.Item>
      <Menu.Item key='5'>
        <Link to={{pathname:`/login`}} className='link'>LOG OUT</Link>
        {/* <Button href='/login' className='logout-button' id='logout-menu' size='large' style={{fontSize: '25px'}}>Log Out</Button>   */}
      </Menu.Item>
    </Menu>)

    return (
      <div className='nav-wrapper'>
        <nav className='desktop-nav'>
          <div id='header-content'>
            <div id="logo">
              <img src='black-orange.png' className="header-logo" alt="logo" />
            </div>
            <Link to={`/home`} className='link'>HOME</Link>
            <Link to={`/projects`} className='link'>PROJECTS</Link>
            <Link to={`/experience`} className='link'>EXPERIENCE</Link>
            <Link to={`/profile`} className='link'>PROFILE</Link>
            <Button href='/login' className='logout-button' size='large' style={{fontSize: '25px'}}>Log Out</Button>  
          </div>
        </nav>
        <Mobile>
          <nav>
            <div id='header-content2'>
              <div id="logo">
                <img src='black-orange.png' className="header-logo" alt="logo" />
              </div>
              <Dropdown overlay={menu} trigger={['click']}>
                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                <MenuOutlined/>
                </a>
              </Dropdown>
            </div>
          </nav>
        </Mobile>
      </div>
    );
  }
}

{// <Desktop> }

// {  // </Desktop>{}
}

export default Header;

