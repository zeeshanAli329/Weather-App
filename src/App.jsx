import React from 'react';
import "./index.css";
import { Provider } from 'react-redux';
import store from './redux/Store';
import Api_call from './UseEffect/Api_call';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Api_call />
      </div>
    </Provider>
  );
}

export default App;