import { rootReducer } from '../services/reducers';
import { configureStore } from '@reduxjs/toolkit';

/* 
 * В соответствии с документацией configureStore подключает по умолчанию thunk и Redux Devtools
 * https://redux-toolkit.js.org/api/configureStore#basic-example
*/
export const store = configureStore({ reducer: rootReducer});
