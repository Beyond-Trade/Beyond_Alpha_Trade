import React, { Fragment } from 'react';
import Navigation from './Navigation';
import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from './store/reducers/Index';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import AlertTemplate from "./components/atomic/AlertTemplate";
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

export const store = createStore(rootReducer, applyMiddleware(thunk));
const options = {
  position: positions.TOP_RIGHT,
  timeout: 5000,
  offset: '30px',
  transition: transitions.SCALE
}

function App() {
  
  return (
    <Provider store={store}>
      <AlertProvider template={AlertTemplate} {...options}>
      <Navigation />
      </AlertProvider>
    </Provider>
  );
}

export default App;
