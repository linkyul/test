import {combineReducers} from 'redux';
import loginIn from './FirstRe';

const rootReducer = combineReducers({
  loginIn: loginIn
});

export default rootReducer;