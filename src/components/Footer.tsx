import Navigation from './Navigation';
import Border from './Border';

const Footer = () => {
	return (
		<footer className="mb-8">
			<Navigation />
			<Border />
			<p className="text-center text-xs lg:text-base">
				&copy; 2025 Patryk Niemczyk. <br className="desktop" />
				Wszelkie prawa zastrzeżone. <br />
				Odwiedź moją drugą stronę: <a href="https://informejtycy.pl" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
					informejtycy.pl
				</a>
			</p>
		</footer>
	);
};

export default Footer;
