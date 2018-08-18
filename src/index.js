import React from 'react';
import ReactDOM from 'react-dom';
import './styles/css/index.css'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store/store.js';

ReactDOM.render(
  <Provider store={store}>
      <span>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
          integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
          crossOrigin="anonymous"/>
        <App />
      </span>
  </Provider>,
  document.getElementById('root'));
