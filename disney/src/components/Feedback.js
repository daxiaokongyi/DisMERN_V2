import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { feedback } from '../actions/feedback';
import { Redirect } from 'react-router-dom';
import setToken from '../utils/setToken';

const Feedback = ({ feedback, loading, name }) => {
  /* -------------------------------------------------------------------------- */
  /*                            get the state of name                           */
  if (localStorage.token) {
    setToken(localStorage.token);
  }

  useEffect(() => {
    feedback();
  }, [feedback]);
  /* -------------------------------------------------------------------------- */

  return loading === true ? (
    <Redirect to='/' />
  ) : (
    <div className='container'>
      <div className='main-feedback'>
        <div className='feedback'>
          <i className='fas fa-check-circle'></i>
          <h1>Great {name}!</h1>
          <p>Your survey form was submitted succesfully! Thank you!</p>
        </div>
      </div>
    </div>
  );
};

Feedback.propTypes = {
  feedback: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  name: state.feedback.name,
  loading: state.submit.loading,
});

export default connect(mapStateToProps, { feedback })(Feedback);
