import { burgerReducer as burger } from './burger';
import { authReducer as auth } from './auth';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
    burger,
    auth
});