import { combineReducers } from 'redux';
import { ProfileReducer } from './Profile/ProfileReducer'
import { SavingsReducer } from './Savings/SavingsReducer'

const reducers = combineReducers({
  ProfileReducer,
  SavingsReducer
})

export default reducers;