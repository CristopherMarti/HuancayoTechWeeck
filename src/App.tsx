/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BottomCTA } from './components/BottomCTA';
import { Home } from './pages/Home';
import { Newsletter } from './pages/Newsletter';
import { Sponsors } from './pages/Sponsors';
import { Hosts } from './pages/Hosts';
import { Investors } from './pages/Investors';
import React, { useEffect } from 'react';

import { ScrollBall } from './components/ScrollBall';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Layout({ children }: { children: React.ReactNode }) {

  return (
    <div 
      className="min-h-screen flex flex-col font-sans text-black bg-white scroll-smooth relative overflow-x-hidden"
      style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cpath d='M 118,0 Q 122,60 118,120' stroke='rgba(0,0,0,0.5)' stroke-width='2' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M 0,118 Q 60,122 120,118' stroke='rgba(0,0,0,0.5)' stroke-width='2' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\")" }}
    >
      {/* Background layer */}
      <div className="pointer-events-none fixed inset-0 z-0 opacity-50" />
      
      {/* Scroll-driven Bouncing Ball */}
      <ScrollBall />

      <Navbar />
      
      {children}
      
      <div className="w-full relative z-10">
         <Footer />
      </div>
      <BottomCTA />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/hosts" element={<Hosts />} />
          <Route path="/investors" element={<Investors />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
