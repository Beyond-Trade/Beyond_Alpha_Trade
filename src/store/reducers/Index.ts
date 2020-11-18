import {combineReducers} from 'redux'
import {userReducer} from './UserReducer'

const rootReducer = combineReducers({
    user: userReducer,
    // more reducers
  })
  export {rootReducer}
  export type RootState = ReturnType<typeof rootReducer>