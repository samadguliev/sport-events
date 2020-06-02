import { combineReducers } from 'redux';
import { Authorization } from './Authorization';
import { Trainings } from './Trainings';
import { Enrollment } from './Enrollment';
import { Gyms } from './Gyms';

const rootReducer = combineReducers({
  Authorization,
  Trainings,
  Enrollment,
  Gyms,
});

export default rootReducer;
