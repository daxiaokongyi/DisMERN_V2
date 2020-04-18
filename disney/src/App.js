import React, { Fragment } from 'react';
import './App.css';
import Survey from './components/Survey';
import Feedback from './components/Feedback';

const App = () => {
  return (
    <Fragment>
      <Survey />
      <Feedback />
    </Fragment>
  );
};

export default App;
