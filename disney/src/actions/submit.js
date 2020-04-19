import axios from 'axios';
import { SUBMIT_SUCCESS, SUBMIT_FAIL } from './types';
import { setAlert } from './alert';

export const submit = ({
  name,
  email,
  age,
  role,
  recommend,
  features,
  comments,
}) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({
    name,
    email,
    age,
    role,
    recommend,
    features,
    comments,
  });

  try {
    const res = await axios.post('/api/submit', body, config);
    dispatch({
      type: SUBMIT_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg)));
    }

    dispatch({
      type: SUBMIT_FAIL,
    });
  }
};
