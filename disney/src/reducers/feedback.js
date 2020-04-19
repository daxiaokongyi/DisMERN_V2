import { FEEDBACK_SUCCESS, FEEDBACK_FAIL } from '../actions/types';

const initialState = {
  name: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case FEEDBACK_SUCCESS:
      return {
        ...state,
        name: payload,
      };
    case FEEDBACK_FAIL:
      return {
        ...state,
        name: null,
      };
    default:
      return state;
  }
}
