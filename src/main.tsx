/* v8 ignore next 15 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import ThemeProvider from './infrastructure/themeContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
