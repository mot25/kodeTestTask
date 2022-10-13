import '../../styles/_reset.scss';
import './App.scss';

import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import store from '../../store';
import { StartScreen } from '../Complex/StartScreen';
import { WrapperMain } from '../Complex/WrapperMain';


function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <StartScreen />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
