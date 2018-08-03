import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import CheeseList from './components/cheese-list';

//create store
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {cheeseReducer} from './reducers/cheese';
const store = createStore(cheeseReducer, applyMiddleware(thunk));


ReactDOM.render(
  <Provider store={store}>
    <CheeseList /> 
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
