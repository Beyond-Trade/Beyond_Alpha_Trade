import React, { Fragment } from 'react';
import Navigation from './Navigation';
import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from './store/reducers/Index';
import thunk from 'redux-thunk'
import ReactNotification from 'react-notifications-component'
import { Provider } from 'react-redux'
import 'react-notifications-component/dist/theme.css'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

export const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
  
  return (
    <Provider store={store}>
      <ReactNotification />
      <Navigation />
    </Provider>
  );
}

export default App;
