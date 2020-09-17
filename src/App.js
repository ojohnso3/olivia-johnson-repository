import React from 'react';
import './App.css';
import Login from './Login.js';
// import Home from './Home.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <link href="http://fonts.googleapis.com/css?family=Roboto|Roboto+Condensed|Alegreya:700" rel="stylesheet" type="text/css" /> */}
        <div>
          <Switch>
            <Route path="/" component={Login} exact />
            {/* <Route path="/" component={Home} exact /> */}
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;


      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}