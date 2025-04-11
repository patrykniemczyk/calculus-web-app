// Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

const Header: React.FC = () => {
	return (
		<header>
			<h1 className='text-center !text-4xl !mb-0'>
				<Link to="/">Rachunek <br className='desktop' /> różniczkowy i całkowy</Link>
			</h1>
			<h2 className='text-center !text-lg !mt-2 !mb-0 !text-gray-300 !no-underline'>
				Patryk Niemczyk kl. 1c
			</h2>
			<Navigation />
		</header>
	);
};

export default Header;
