import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import './App.css';
import Granice from './pages/Granice';
import Pochodne from './pages/Pochodne';
import Calki from './pages/Calki';
import Glowna from './pages/Glowna';

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
    <Router basename="/calculus-web-app/">
      <div className='w'>
        <Header />
        <main className='page-content' aria-label='Content'>
          <Routes>
            <Route path="/" element={<Glowna />} />
            <Route path="/granice" element={<Granice />} />
            <Route path="/pochodne" element={<Pochodne />} />
            <Route path="/calki" element={<Calki />} />
          </Routes>
        </main>
        <Navigation />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
