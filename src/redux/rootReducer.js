import { combineReducers } from 'redux';

import UserReducer from './user/user.reducer';

const RootReducer = combineReducers({
    user:UserReducer
});

export default RootReducer