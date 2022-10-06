import React from 'react';
import { Provider } from 'react-redux';

import store from '../../store';
import { StartScreen } from '../Complex/StartScreen';

function App() {
  return (
    <Provider store={store}>
      <StartScreen />  
    </Provider>
  );
}

export default App;
