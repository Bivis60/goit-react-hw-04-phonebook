import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    text: '#212121',
    accent: 'red',
    background: '#f3e5e5',
    green: 'green',
    orange: 'orange',
    backgroundBody: 'lightgoldenrodyellow',
    buttonColor: 'lightblue',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
