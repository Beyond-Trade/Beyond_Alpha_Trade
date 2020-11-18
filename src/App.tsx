import React, { Fragment } from 'react';
import Navigation from './Navigation';
import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from './store/reducers/Index';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

export const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
  
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

export default App;
