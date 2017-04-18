import React from 'react';
import ReactDOM from 'react-dom';
import AppLayout from './containers/Layout';
import ReactTapPlugin from 'react-tap-event-plugin';
import ThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css';

ReactTapPlugin();

ReactDOM.render(
  <ThemeProvider>
    <AppLayout />
  </ThemeProvider>,
  document.getElementById('root')
);
