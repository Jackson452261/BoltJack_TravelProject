import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import BlogDetail from './components/BlogDetail';
import Blog from './components/Blog';
import Contact from './components/Contact';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id" element={<BlogDetail />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default App;