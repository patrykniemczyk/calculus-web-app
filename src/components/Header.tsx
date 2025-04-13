import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import Border from './Border';

const Header = () => {
	return (
		<header className="mb-6">
			<h1 className="text-center text-2xl lg:text-4xl mb-0 underline-offset-4">
				<Link to="/">Rachunek <br className="desktop" /> różniczkowy i całkowy</Link>
			</h1>
			<h2 className="text-center !text-base !lg:text-lg !mt-2 !mb-0 !text-gray-300 !no-underline">
				Patryk Niemczyk kl. 1c
			</h2>
			<Navigation />
			<Border />
		</header>
	);
};

export default Header;
