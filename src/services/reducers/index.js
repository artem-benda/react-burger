import { burgerReducer as burger } from './burger';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
    burger
});