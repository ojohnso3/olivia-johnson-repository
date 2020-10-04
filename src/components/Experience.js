import React from 'react';
import Header from './Header.js';
import '../css/Experience.css';
import ContentModal from './ContentModal';
import Carousel from './Carousel';
import { StarOutlined} from '@ant-design/icons';

const experiences = {
  "Strongsuit": {
    "title": "Strongsuit",
    'short-title': 'Strongsuit',
    "image": "strongsuit.png",
    "date": "Summer 2020-Present",
    "role": "Fullstack Software Engineer",
    "website": "https://www.strongsuit.co/",
    "bullet1": "TBD",
    "bullet2": "TBD",
    "bullet3": "TBD"
  },
  "CS Teaching Assistant": {
    "title": "Brown Computer Science Department",
    'short-title': 'CS Teaching Assistant',
    "image": "cs15.png",
    "date": "Fall 2019",
    "role": "Undergraduate Teaching Assistant",
    "website": "https://cs.brown.edu/courses/cs015/",
    "bullet1": "Selected as a UTA for 400+ students in an intro CS course with Prof. Andries van Dam (CSCI 0150)",
    "bullet2": "Led two labs/sections & four debugging hours each week to assist students with code and complex concepts",
    "bullet3": "Redesigned 3 labs, updated the Cartoon project, graded 10 assignments each week, and mentored 5 students"
  },
  "Kriegeskorte Lab": {
    "title": "Kriegeskorte Lab at Columbia University",
    'short-title': 'Kriegeskorte Lab',
    "image": "zuckext.jpg",
    "date": "Summer 2019",
    "role": "Machine Learning Research Intern",
    "website": 'https://zuckermaninstitute.columbia.edu/nikolaus-kriegeskorte-phd',
    "bullet1": "Built 3 versions of a Convolutional Recurrent Neural Network to reconstruct and predict Moving MNIST videos",
    "bullet2": "Worked to combine unsupervised and recurrent machine learning models using PyTorch & Tensorflow",
    "bullet3": "Studied deep learning alongside experts in the lab, and learned PyTorch & Tensorflow packages"
  },
  "Shadlen Lab": {
    "title": "Shadlen Lab at Columbia University",
    'short-title': 'Shadlen Lab',
    "image": "zuckint.jpg",
    "date": "Summer 2018",
    "role": "Neuroscience Research Intern",
    "website": 'https://shadlenlab.columbia.edu/',
    "bullet1": "Investigated and assisted with clinical research on the neural basis of decision-making in macaque monkeys",
    "bullet2": "Evaluated 1000+ data measurements from monkey neural activity and human mechanical activity in MATLAB",
    "bullet3": "TBD"
  },
  "Neurosurgery Research": {
    "title": "NYU Langone Department of Pediatric Neurosurgery",
    'short-title': 'Neurosurgery Research',
    "image": "nyulangone.png",
    "date": "Summer 2017",
    "role": "Clinical Intern",
    "website": 'https://nyulangone.org/locations/pediatric-neurosurgery',
    "bullet1": "TBD",
    "bullet2": "TBD",
    "bullet3": "TBD"
  }
}

class Experience extends React.Component {
  constructor(props) {
    super(props); 

    this.state = {
      visible: false,
      experience: {}
    }

    this.chooseModal = this.chooseModal.bind(this)
  }

  chooseModal(expImage) {
    var this_experience = experiences[expImage]

    this.setState({ 
      visible: true,
      experience: this_experience,
    })
  }

  render() {
    return (
      <div className="experience">
        <Header/>

        <div className='experience'>
          <div className='the-title' id='exp-main'>
            <div>
              <img src='experience.jpg' alt='projects' className='page-image'/>
              <div className="overlay">Experience</div>
            </div>
            <div className='line-divider' id='gray-line' />
            <div className='page-summary'>
              <div>
                <h1 className='summary-title' className='non-white'>My Work Experience</h1>
                <p>Summer 2017 - Present</p>
                <div className='star-rating'>
                  <div>
                    <StarOutlined /><StarOutlined /><StarOutlined /><StarOutlined /><StarOutlined />
                  </div>
                  <p>5.0</p>
                </div>
              </div>
              <div>
                <h2 className='summary-body' className='non-white'>
                  I am currently working as a full-time Fullstack Software Engineer at a 
                  young tech-enabled startup. I also have extensive experience in
                  research and teaching, as I have worked both as a Teaching Assistant and a
                  Research Lab intern at Brown and Columbia University, respectively.
                </h2>
                <br/>
                <p>Click on the images below for more details...</p>
              </div>
            </div>
          </div>

          {/* <h2>Click on the images below to learn more about my work experience!</h2> */}

          <ContentModal
            visible={this.state.visible}
            content={this.state.experience}
            type={'experience'}
          />

          <div className='carousels'>
            <Carousel
              chooseModal={this.chooseModal}
              title={'Computer Programming'}
              item1={experiences['Strongsuit']}
              item2={experiences['CS Teaching Assistant']}
              item3={experiences['Kriegeskorte Lab']}
            />

            <Carousel
              chooseModal={this.chooseModal}
              title={'Clinical Neuroscience Research'}
              item1={experiences['Shadlen Lab']}
              item2={experiences['Neurosurgery Research']}
              item3={'no_item'}
            />
          </div>

        </div>
      </div>
    );
  }
}

export default Experience;


{/* <div className='the-title'>
<img src='experience.jpg' alt='experience' className='page-image'/>
<div className="overlay">Experience</div>
</div> */}