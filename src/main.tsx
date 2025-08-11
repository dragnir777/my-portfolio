import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/blog" lazy={async () => ({ Component: (await import('./pages/BlogIndex.tsx')).default })} />
          <Route path="/blog/:slug" lazy={async () => ({ Component: (await import('./pages/BlogArticle.tsx')).default })} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);
