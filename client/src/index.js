import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import CheeseList from './components/cheese-list';

//create store
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {cheeseReducer} from './reducers/cheese';
const store = createStore(cheeseReducer);


ReactDOM.render(
  <Provider store={store}>
    <CheeseList /> 
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
