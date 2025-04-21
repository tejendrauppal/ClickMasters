import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/main/Home';
import About from '../pages/main/About';
import Blog from '../pages/main/Blog';
import Careers from '../pages/main/Careers';
import Contact from '../pages/main/Contact';
import Services from '../pages/main/Services';
import NotFound from '../pages/not-found/NotFound';

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default PublicRoutes;