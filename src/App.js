import React from 'react';
import './css/App.css';
import Login from './components/Login.js';
import Home from './components/Home.js';
import Projects from './components/Projects.js';
import Experience from './components/Experience.js';
import Profile from './components/Profile.js';
import Bio from './components/Bio.js';
import Education from './components/Education.js';
import Skills from './components/Skills.js';
import NoComponentFound from './components/NoComponentFound.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <link href="http://fonts.googleapis.com/css?family=Roboto|Roboto+Condensed|Alegreya:700" rel="stylesheet" type="text/css" /> */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

        <div>
          <Switch>
            <Route path="/" component={Login} exact />
            <Route path="/login" component={Login} exact />
            <Route path="/home" component={Home} exact />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/experience" component={Experience} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/bio" component={Bio} />
            <Route exact path="/education" component={Education} />
            <Route exact path="/skills" component={Skills} />
            <Route exact path="*" component={NoComponentFound} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
