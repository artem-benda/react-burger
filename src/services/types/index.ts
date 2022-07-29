import { Action, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { store } from '../store';
import { TAuthActionTypes } from './auth';
import { TBurgerActionTypes } from './burger';
import { TAllOrdersActionTypes, TMyOrdersActionTypes } from './order';
import { rootReducer } from '../reducers/index';

export type RootState = ReturnType<typeof rootReducer>; 

type TApplicationActions = TAuthActionTypes | TBurgerActionTypes | TAllOrdersActionTypes | TMyOrdersActionTypes;

export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, Action, RootState, TApplicationActions>
>;

export type AppDispatch = typeof store.dispatch;
