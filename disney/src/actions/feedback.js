import axios from 'axios';
import { FEEDBACK_SUCCESS, FEEDBACK_FAIL } from './types';
import setToken from '../utils/setToken';

export const feedback = () => async (dispatch) => {
  /* -------------------------------------------------------------------------- */
  /*                        check if a valid token exists                       */
  if (localStorage.token) {
    setToken(localStorage.token);
  }
  /* -------------------------------------------------------------------------- */

  try {
    const res = await axios.get('/api/feedback');
    dispatch({
      type: FEEDBACK_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: FEEDBACK_FAIL,
    });
  }
};
