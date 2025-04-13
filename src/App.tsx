import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Renderer from './components/Renderer';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="container">
        <Header />
        <main className="page-content" aria-label="Content">
          <Routes>
            <Route path="/" element={<Renderer defaultPage="glowna" />} />
            <Route path="/:page" element={<Renderer />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
