import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './components/App';
import Setup from './components/Setup';
import Standup from './components/Standup';

const routing = (
  <Router>
    <div>
      <Route exact path='/' component={App} />
      <Route path='/standup' component={Standup} />
      <Route path='/setup' component={Setup} />
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'));
