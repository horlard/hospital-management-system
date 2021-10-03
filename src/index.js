import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Reducers from './Reducers';
import {Provider} from 'react-redux';
import {createStore,compose} from 'redux';
import reportWebVitals from './reportWebVitals';



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(Reducers,composeEnhancers());

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
