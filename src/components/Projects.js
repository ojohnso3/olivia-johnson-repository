import React from 'react';
import '../css/Projects.css';
import { StarOutlined} from '@ant-design/icons';
import Header from './Header.js';
import ContentModal from './ContentModal';
import Carousel from './Carousel';

const projects = {
  "Portfolio Website": {
    "title": "My Portfolio Website",
    'short-title': 'Portfolio Website',
    "image": "borange-full.png",
    "date": "Summer 2020",
    "languages": "Javascript with React, HTML, CSS",
    "github": 'https://github.com/ojohnso3/olivia-johnson-website',
    "bullet1": "Built a multi-page portfolio website from scratch using React.js",
    "bullet2": "Used tools such as the Ant Design library and Heroku to design and deploy the website",
    "bullet3": "Modeled web design off of the layout of popular TV streaming platforms such as Netflix & Hulu"
  },
  "FoodCOMA": {
    "title": "FoodCOMA: Recipe Recommendation Web Application",
    'short-title': 'FoodCOMA',
    "image": "foodcoma2.png",
    "date": "Spring 2020",
    "languages": "Java, Javascript, HTML, CSS, SQL",
    "github": 'https://github.com/ojohnso3/food-coma-application',
    "bullet1": "Led front-end development and built the website infrastructure with intuitive web design and cookie system",
    "bullet2": "Set up Login & Signup functionality for users by connecting the front-end interface with backend user database",
    "bullet3": "Built the skeleton of the recommendation k-d tree algorithm that curated recipes to a user’s preferences"
  },
  "tIMDb": {
    "title": "tIMDb: Film Database Application​",
    'short-title': 'tIMDb',
    "image": "timdb.jpg",
    "date": "Spring 2020",
    "languages": "Java, HTML, CSS, SQL",
    "github": null,
    "bullet1": "Implemented Dijkstra’s graph search algorithm to find the shortest path that connects two actors",
    "bullet2": "Created a caching system that accessed and stored queried data from SQL film databases via a proxy class",
    "bullet3": "Built a website to search for connections with unique pages for each film/actor using a dynamic URL structure"
  },
  "K-D Tree": {
    "title": "Stars: K-D Tree Algorithmic Application",
    'short-title': 'K-D Tree',
    "image": "kdtree.png",
    "date": "Spring 2020",
    "languages": "Java, HTML, CSS",
    "github": null,
    "bullet1": "Implemented a multi-dimensional nearest neighbors algorithm to search for stars with locations stored in a CSV file",
    "bullet2": "Built a K-D Tree data structure to store the stars' locations as nodes for the k-dimensional search",
    "bullet3": "Designed a graphical user interface for the algorithm as an alternative to the implemented command-line REPL"
  },
  "Neural Network": {
    "title": "Convolutional Recurrent Neural Network Model",
    'short-title': 'Neural Network',
    "image": "example.gif",
    "date": "Summer 2019",
    "languages": "Python with PyTorch",
    "github": 'https://github.com/ojohnso3/Convolutional-Recurrent-Neural-Network',
    "bullet1": "Built a model that takes in Moving MNIST videos and predicts future frames using unsupervised learning",
    "bullet2": "Developed a Variational Autoencoder with Long Short-Term Memory cells in the latent space",
    "bullet3": "Optimized performance via a present reconstruction penalty and predictive prior distribution in the loss function"
  },
  "Decision Tree": {
    "title": "Machine Learning Decision Tree",
    'short-title': 'Decision Tree',
    "image": "decisiontree.png",
    "date": "Spring 2019",
    "languages": "Java",
    "github": null,
    "bullet1": "Implemented the ID3 machine learning algorithm to generate a decision tree based on supervised learning",
    "bullet2": "Built tree by calculating the entropy of each example from the training data to determine its classification",
    "bullet3": "Sparked my passion for machine learning and inspired greater research into neural networks"
  },
  "Database System": {
    "title": "Database: Multi-threading & Concurrency",
    'short-title': 'Database System',
    "image": "database.png",
    "date": "Fall 2019",
    "languages": "C",
    "github": null,
    "bullet1": "Created the server-side of a thread-safe database that allowed for multiple concurrent clients",
    "bullet2": "Serviced each client connection with a thread, and safely handled server/client cancellation & signal-handling",
    "bullet3": "Implemented fine-grain locking within the binary-tree database to ensure thread-safety"
  },
  "Shell": {
    "title": "Shell: Linux Terminal",
    'short-title': 'Shell',
    "image": "shell.png",
    "date": "Fall 2019",
    "languages": "C",
    "github": null,
    "bullet1": "Built a program from scratch that reads & executes user commands, and maintains a job control system",
    "bullet2": "Parsed input text within a REPL-loop and handles child processes & input/output file redirection",
    "bullet3": "Kept track of multiple foreground/background job processes with reaping & signal-handling"
  },
  "PageRank": {
    "title": "PageRank: Graph Search Algorithm",
    'short-title': 'PageRank',
    "image": "pagerank.jpg",
    "date": "Spring 2019",
    "languages": "Java",
    "github": null,
    "bullet1": "Implemented the PageRank algorithm pioneered by Google as the basis of their search engine",
    "bullet2": "Built graphs using an Adjacency Matrix, as well as Minimum Spanning Trees via Prim-Jarnik algorithm",
    "bullet3": "TBD"
  },
}


class Projects extends React.Component {
  constructor(props) {
    super(props); 

    this.state = {
      visible: false,
      project: {}
    }

    this.chooseModal = this.chooseModal.bind(this)
  }

  chooseModal(projectImage) {
    var this_project = projects[projectImage]

    this.setState({ 
      visible: true,
      project: this_project,
    })
  }
  
  render() {
    return (
      <div>
        <Header/>
        <div className='projects'>
          <div className='the-title' id='projects-main'>
            <div>
              <img src='projects.jpg' alt='projects' className='page-image'/>
              <div className="overlay">Projects</div>
            </div>
            <div className='line-divider' id='blue-line' />
            <div className='page-summary'>
              <div>
                <h1 className='summary-title'>My Projects</h1>
                <p>Fall 2018 - Present</p>
                <div className='star-rating'>
                  <div>
                    <StarOutlined /><StarOutlined /><StarOutlined /><StarOutlined /><StarOutlined />
                  </div>
                  <p>5.0</p>
                </div>
              </div>
              <div>
                <h2 className='summary-body'>Ranging from topics such as Machine Learning to Web Development, 
                I have an extensive portfolio of projects both shipped to actual customers and contributing 
                towards university research endeavors.
                </h2>
                <br/>
                <p>Click on the images below for more details...</p>
              </div>
            </div>
          </div>

          {/* <h2>Click on the images below to learn more about my projects!</h2> */}

          <ContentModal
            visible={this.state.visible}
            content={this.state.project}
            type={'project'}
          />

          <div className='carousels'>
            <Carousel
              chooseModal={this.chooseModal}
              title={'Software Engineering'}
              item1={projects['Portfolio Website']}
              item2={projects['FoodCOMA']}
              item3={projects['tIMDb']}
            />

            <Carousel
              chooseModal={this.chooseModal}
              title={'Machine Learning'}
              item1={projects['Neural Network']}
              item2={projects['Decision Tree']}
              item3={'no_item'}
              // image3={'neuralnet.png'}
            />

            <Carousel
              chooseModal={this.chooseModal}
              title={'Systems and Data Structures'}
              item1={projects['Database System']}
              item2={projects['Shell']}
              item3={projects['K-D Tree']}
              // item3={projects['PageRank']}
            />
          </div>

        </div>
      </div>
    );
  }
}

export default Projects;



          {/* <div className='the-title'>
            <img src='projects.jpg' alt='projects' className='page-image'/>
            <div className="overlay">Projects</div>
          </div> */}
