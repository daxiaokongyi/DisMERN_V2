import { SUBMIT_SUCCESS, SUBMIT_FAIL } from '../actions/types';

const initialState = {
  // token: localStorage.getItem('token'),
  token: null,
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SUBMIT_SUCCESS:
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        loading: false,
        token: localStorage.getItem('token'),
      };
    case SUBMIT_FAIL:
      localStorage.removeItem('token');
      return {
        ...state,
        loading: false,
        token: null,
      };
    default:
      return state;
  }
}
