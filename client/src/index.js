import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import "rsuite/dist/styles/rsuite-default.css";

import App from './App';
import { st } from './store/index'

ReactDOM.render(
  <React.StrictMode>
      <Provider store={st}>
        <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
