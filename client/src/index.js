import React from 'react';
import ReactDOM from 'react-dom';
/* import firebase from 'firebase'; */
import { Provider } from 'react-redux'


import App from './App';
import { st } from './store/index'

/* firebase.initializeApp({
  apiKey: "AIzaSyCKqMcOZlxoDAQe1IxBq3x98oWW53DlZ0c",
  authDomain: "e-commerce-f61c7.firebaseapp.com",
  projectId: "e-commerce-f61c7",
  storageBucket: "e-commerce-f61c7.appspot.com",
  messagingSenderId: "898178569880",
  appId: "1:898178569880:web:a82a594a657784f3d8a2ed",
  measurementId: "G-X24BS7KT37"
}) */

ReactDOM.render(
  <React.StrictMode>
      <Provider store={st}>
        <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);