import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import './fonts/Lora/Lora-Italic-VariableFont_wght.ttf';
import './fonts/Lora/Lora-VariableFont_wght.ttf';
import 'modern-normalize';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/svitlana-ripka">
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
