import React, { Fragment } from 'react';
import './App.css';
import Survey from './components/Survey';
import Feedback from './components/Feedback';
import Alert from './components/layout/Alert';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Alert />
          <Route exact path='/' component={Survey} />
          <Route exact path='/feedback' component={Feedback} />
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
