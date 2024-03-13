// reducers.js
import { combineReducers } from 'redux';
import loginReducer from '../features/reducers/loginReducer';

const rootReducer = combineReducers({
  login: loginReducer,
});

export default rootReducer;
