import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { ThemeProvider } from '@emotion/react';
import { themeOptions } from './themes/Themes.ts';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={themeOptions}>
      <Router>
        <Routes>
          <Route path="*" element={<App />} />
        </Routes>
      </Router>
    </ThemeProvider>
  </StrictMode>
);
