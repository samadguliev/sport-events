import { combineReducers } from 'redux';
import { Authorization } from './Authorization';
import { Trainings } from './Trainings';
import { Enrollment } from './Enrollment';

const rootReducer = combineReducers({
  Authorization,
  Trainings,
  Enrollment,
});

export default rootReducer;
