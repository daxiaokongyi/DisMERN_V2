import { combineReducers } from 'redux';
import alert from './alert';
import submit from './submit';
import feedback from './feedback';

export default combineReducers({
  alert,
  submit,
  feedback,
});
