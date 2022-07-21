import { Action, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { store } from '../store';
import { TAuthActionTypes } from './auth';
import { TBurgerActionTypes } from './burger';

export type RootState = ReturnType<typeof store.getState>; 

type TApplicationActions = TAuthActionTypes | TBurgerActionTypes;

export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, Action, RootState, TApplicationActions>
>;

export type AppDispatch = typeof store.dispatch;
