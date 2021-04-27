import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './firebase/config';
import {Provider} from 'react-redux';
import 'bulma/css/bulma.min.css';
import  store  from './store';
import { CanvasProvider } from './components/pages/CanvasContext';

ReactDOM.render(
  <React.StrictMode>
    <CanvasProvider>
    <Provider store={store}>
      <App />
    </Provider></CanvasProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

