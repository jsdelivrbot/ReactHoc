import { combineReducers } from 'redux';
import AuthenticationReducer from './reducer_authentication';

const rootReducer = combineReducers({
  authenticated: AuthenticationReducer
});

export default rootReducer;
