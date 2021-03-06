import { combineReducers } from 'redux';
import UsersReducer from './reducer_users';
import ActiveUser from './reducer_active_user';

const rootReducer = combineReducers({
    users: UsersReducer,
    activeUser: ActiveUser
});

export default rootReducer;
