import { combineReducers } from 'redux';
import { ProfileReducer } from './Profile/ProfileReducer'
import { PhotoReducer } from './Profile/PhotoReducer'
import { SavingsReducer } from './Savings/SavingsReducer'

const reducers = combineReducers({
  ProfileReducer,
  PhotoReducer,
  SavingsReducer
})

export default reducers;