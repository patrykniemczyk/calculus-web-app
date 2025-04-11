import React from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  return (
    <nav className='border-b-2 border-gray-300 mb-10 p-6'>
      <Link to="/granice">Granice</Link>
      <Link to="/pochodne">Pochodne</Link>
      <Link to="/calki">Całki</Link>
    </nav>
  );
};

export default Navigation;