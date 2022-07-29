import { burgerReducer as burger } from './burger';
import { authReducer as auth } from './auth';
import { combineReducers } from 'redux';
import { allOrdersReducer as allOrders, myOrdersReducer as myOrders } from './order';

export const rootReducer = combineReducers({
    burger,
    auth,
    allOrders,
    myOrders
});
