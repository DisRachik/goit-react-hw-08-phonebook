import React from 'react';
import ReactDOM from 'react-dom/client';
import { Global, ThemeProvider } from '@emotion/react';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from 'redux/store';

import { GlobalStyles, theme } from 'styles';
import { App } from 'components';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyles} />
        <BrowserRouter basename="/goit-react-hw-08-phonebook">
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
