import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import './App.css';
import MarkdownRenderer from './components/MarkdownRenderer';

const App: React.FC = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @media (min-width: 1024px) {
        .desktop {
          display: none !important;
        }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className='w'>
        <Header />
        <main className='page-content' aria-label='Content'>
          <Routes>
            <Route path="/" element={<MarkdownRenderer defaultPage="glowna" />} />
            <Route path="/:page" element={<MarkdownRenderer />} />
          </Routes>
        </main>
        <Navigation />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
