import { combineReducers } from 'redux';
import { Authorization } from './Authorization';
import { Trainings } from './Trainings';

const rootReducer = combineReducers({
  Authorization,
  Trainings,
});

export default rootReducer;
