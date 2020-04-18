import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { submit } from '../../actions/submit';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Survey = ({ submit, loading }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    role: '',
    recommend: 'Definitely',
    features: [],
    comments: '',
  });

  const { name, email, age, role, recommend, features, comments } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    // console.log({ name, email, age, role, recommend, features, comments });
    submit({ name, email, age, role, recommend, features, comments });
  };

  // Redirect if submit passed
  if (loading === false) {
    return <Redirect to='/feedback' />;
  }

  const onRadioChange = (e) => {
    setFormData({ ...formData, recommend: e.target.value });
  };

  const onCheckBoxChange = (e) => {
    if (e.target.checked) {
      features.push(e.target.value);
    }
    setFormData({ ...formData, features: features });
  };

  return (
    <div className='container'>
      <div className='main'>
        <div className='main-form'>
          <h1 id='title'>Disney Plus Survey Form</h1>
          <p id='description'>
            Thank you for taking time to help us improve our streaming service{' '}
          </p>
          <form id='survey-form' onSubmit={(e) => onSubmit(e)}>
            <div className='form-group'>
              <small>* = required fields</small>
              <label>
                Name<span>*</span>
              </label>
              <input
                type='text'
                placeholder='Enter your name'
                className='form-control'
                id='name-label'
                name='name'
                value={name}
                onChange={(e) => onChange(e)}
                required
              />
            </div>
            <div className='form-group'>
              <label>
                Email<span>*</span>
              </label>
              <input
                type='email'
                placeholder='Enter your Email'
                className='form-control'
                id='email-label'
                name='email'
                value={email}
                onChange={(e) => onChange(e)}
                required
              />
            </div>
            <div className='form-group'>
              <label>Age (optional)</label>
              <input
                type='number'
                min='0'
                max='200'
                placeholder='Age'
                id='number-label'
                className='form-control'
                name='age'
                value={age}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <p className='question'>
                Which option can best describes your current role?<span>*</span>
              </p>
              <select
                name='role'
                id='dropdown'
                className='form-control'
                value={role}
                onChange={(e) => onChange(e)}
                required
              >
                <option value='' disabled>
                  -- Select current role --
                </option>
                <option value='student'>Student</option>
                <option value='engineer'>Engineer</option>
                <option value='artist'>Artist</option>
                <option value='athlete'>Athlete</option>
                <option value='other'>Other</option>
              </select>
            </div>
            <div className='form-group recommend'>
              <p className='question'>
                Would you recommend Disney Plus to a friend?<span>*</span>
              </p>
              <label>
                <input
                  type='radio'
                  name='recommend'
                  className='input-radio'
                  value='Definitely'
                  checked={recommend === 'Definitely'}
                  onChange={(e) => onRadioChange(e)}
                  required
                />
                Definitely
              </label>
              <label>
                <input
                  type='radio'
                  name='recommend'
                  className='input-radio'
                  value='Maybe'
                  checked={recommend === 'Maybe'}
                  onChange={(e) => onRadioChange(e)}
                />
                Maybe
              </label>
              <label>
                <input
                  type='radio'
                  name='recommend'
                  className='input-radio'
                  value='Not Sure'
                  checked={recommend === 'Not Sure'}
                  onChange={(e) => onRadioChange(e)}
                />
                Not Sure
              </label>
            </div>
            <div className='favorite-features'>
              <p className='question'>
                What are your favorite features of Disney Plus? (Check all that
                apply)<span>*</span>
              </p>
              <label>
                <input
                  type='checkbox'
                  className='input-checkbox'
                  name='Disney'
                  id='features'
                  value='Disney'
                  // checked={features === 'Disney'}
                  onChange={(e) => onCheckBoxChange(e)}
                />
                Disney
              </label>
              <label>
                <input
                  type='checkbox'
                  className='input-checkbox'
                  name='Pixar'
                  id='Pixar'
                  value='Pixar'
                  // checked={features === 'Pixar'}
                  onChange={(e) => onCheckBoxChange(e)}
                />
                Pixar
              </label>
              <label>
                <input
                  type='checkbox'
                  className='input-checkbox'
                  name='Marvel'
                  id='Marvel'
                  value='Marvel'
                  // checked={features === 'Marvel'}
                  onChange={(e) => onCheckBoxChange(e)}
                />
                Marvel
              </label>
              <label>
                <input
                  type='checkbox'
                  className='input-checkbox'
                  name='Star Wars'
                  id='Star Wars'
                  value='Star Wars'
                  // checked={features === 'Star Wars'}
                  onChange={(e) => onCheckBoxChange(e)}
                />
                Star Wars
              </label>
              <label>
                <input
                  type='checkbox'
                  className='input-checkbox'
                  name='features'
                  value='National Geographic'
                  // checked={features === 'National Geographic'}
                  onChange={(e) => onCheckBoxChange(e)}
                />
                National Geographic
              </label>
            </div>
            <div>
              <p className='question'>
                Any comments or suggestions? (optional)
              </p>
              <textarea
                name='comments'
                id=''
                cols='30'
                rows='5'
                placeholder='Enter your comments here ...'
                value={comments}
                onChange={(e) => onChange(e)}
              ></textarea>
            </div>
            <div>
              <button type='submit' id='submit'>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

Survey.propTypes = {
  submit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.submit.loading,
});

export default connect(mapStateToProps, { submit })(Survey);
