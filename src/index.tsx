import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/app';
import reportWebVitals from './reportWebVitals';

import { rootReducer } from './services/reducers';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

/* 
 * В соответствии с документацией configureStore подключает по умолчанию thunk и Redux Devtools
 * https://redux-toolkit.js.org/api/configureStore#basic-example
*/
const store = configureStore({ reducer: rootReducer});


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
