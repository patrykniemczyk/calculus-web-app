import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  const isActiveLink = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/granice', label: 'Granice' },
    { path: '/pochodne', label: 'Pochodne' },
    { path: '/calki', label: 'Całki' },
  ];

  return (
    <nav className="p-6">
      {navLinks.map(({ path, label }) => (
        <Link
          key={path}
          to={path}
          className={`${isActiveLink(path) ? '!underline decoration-2 !decoration-blue-400 underline-offset-6' : ''} 
                      hover:underline focus:underline`}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
