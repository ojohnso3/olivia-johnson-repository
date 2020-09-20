import React from 'react';
import '../css/ContentModal.css';
import { Modal } from 'antd';
import { GithubOutlined, LaptopOutlined } from '@ant-design/icons';


class ContentModal extends React.Component {
  
  constructor(props) {
    super(props); 

    this.state = {
      visible: false,
      content: {},
      type: null,
    }

    this.handleCancel = this.handleCancel.bind(this)
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({ 
      visible: nextProps.visible,
      content: nextProps.content,
      type: nextProps.type,
    })
  }

  handleCancel() {
    this.setState({ visible: false })
  }
  
  render() {
    return (
      <div className='content-modal-wrapper'>
        <Modal 
          className='content-modal'
          visible={this.state.visible}
          onCancel={this.handleCancel}
          footer={null}
        >
          
          <img src={this.state.content['image']} className="modal-image" alt="logo" />

          <div className='modal-body'>
            <h1 className='content-title'>{this.state.content['title']}</h1>

            <div className='modal-1'>
              <div className='modal-2'>
                { this.state.type === 'project' ? 
                <h3><b>Programming Languages:</b> {this.state.content['languages']}</h3>
                 : <h3><b>Role:</b> {this.state.content['role']}</h3>
                }
                <h3><b>Date:</b> {this.state.content['date']}</h3>
              </div>
              <div className='github-link'>
                { this.state.content['github'] ?
                <a href={this.state.content['github']} target='_blank' rel="noopener noreferrer"><GithubOutlined style={{ fontSize: '50px'}} className='github-project'/> View Code</a>
                :
                null
                }
                { this.state.content['website'] ?
                <a href={this.state.content['website']} target='_blank' rel="noopener noreferrer"><LaptopOutlined style={{ fontSize: '50px'}} className='github-project'/> View Website</a>
                :
                null
                }
              </div>
            </div>
            <ul>
              <li className='bullets'>{this.state.content['bullet1']}</li>
              <li className='bullets'>{this.state.content['bullet2']}</li>
              <li className='bullets'>{this.state.content['bullet3']}</li>
            </ul> 
          </div>
        </Modal>
      </div>
    );
  }
}

export default ContentModal;