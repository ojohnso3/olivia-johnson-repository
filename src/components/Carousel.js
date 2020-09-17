import React from 'react';
import '../css/Carousel.css';
import { LeftOutlined, RightOutlined} from '@ant-design/icons';

class Carousel extends React.Component {

  render() {
    return (
      <div className='carousel-wrapper'>
        <h1 id='carousel-title'>{this.props.title}</h1>

        <div className='project-container'>
          <LeftOutlined style={{ fontSize: '100px'}} className='arrow'/>
          <div className='project-item' onClick={()=>this.props.chooseModal(this.props.item1['short-title'])}>
            <img src={this.props.item1['image']} alt='item1' className='project-image'></img>
            <h3 className='project-name'>{this.props.item1['short-title']}</h3>
          </div>
          <div className='project-item' onClick={()=>this.props.chooseModal(this.props.item2['short-title'])}>
            <img src={this.props.item2['image']} alt='item2' className='project-image'></img>
            <h3 className='project-name'>{this.props.item2['short-title']}</h3>
          </div>

          { this.props.item3 === 'no_item' ?
              null
              :
              <div className='project-item' onClick={()=>this.props.chooseModal(this.props.item3['short-title'])}>
                <img src={this.props.item3['image']} alt='item3' className='project-image'></img>
                <h3 className='project-name'>{this.props.item3['short-title']}</h3>
              </div>
          }
          <RightOutlined style={{ fontSize: '100px'}} className='arrow'/>
        </div>

      </div>
    );
  }
}

export default Carousel;