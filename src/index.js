import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import ReactTapPlugin from 'react-tap-event-plugin';
import './index.css';

ReactTapPlugin();

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
