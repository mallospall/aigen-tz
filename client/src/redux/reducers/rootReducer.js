import { combineReducers } from 'redux';
import docsReducer from './docsReducer';
import inputReducer from './inputReducer';

const rootReducer = combineReducers({
  docs: docsReducer,
  inputs: inputReducer,
});

export default rootReducer;
