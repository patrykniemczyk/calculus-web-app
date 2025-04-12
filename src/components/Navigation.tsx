import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
  const location = useLocation();

  const getLinkClass = (path: string) =>
    location.pathname === path ? '!underline !decoration-2 !decoration-blue-400 !underline-offset-6' : '';

  return (
    <nav className='border-b-2 border-gray-300 mb-10 p-6'>
      <Link to="/granice" className={getLinkClass('/granice')}>Granice</Link>
      <Link to="/pochodne" className={getLinkClass('/pochodne')}>Pochodne</Link>
      <Link to="/calki" className={getLinkClass('/calki')}>Całki</Link>
    </nav>
  );
};

export default Navigation;