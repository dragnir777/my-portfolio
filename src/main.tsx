import React, { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import BlogArticle from './pages/BlogArticle.tsx';
import ProjectDetail from './pages/ProjectDetail.tsx';
import './index.css';

const HomeScrollBlog: React.FC = () => {
  useEffect(() => {
    const scroll = () => {
      const el = document.getElementById('blog');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    };
    // Delay to ensure layout is ready
    const id = setTimeout(scroll, 50);
    return () => clearTimeout(id);
  }, []);
  return <App />;
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/blog" element={<HomeScrollBlog />} />
          <Route path="/blog/:slug" element={<BlogArticle />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);
