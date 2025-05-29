import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Renderer from './components/Renderer';
import LandingPageImage from './components/LandingPageImage';
import './App.css';

const App = () => {
	return (
		<Router basename={import.meta.env.BASE_URL}>
			<div className="container">
				<Header />
				<main className="page-content" aria-label="Content">
					<Routes>
						<Route path="/" element={<Renderer defaultPage="glowna" />} />
						<Route path="/:page" element={<Renderer />} />
					</Routes>
				</main>
				<Routes>
					<Route path="/" element={<LandingPageImage />} />
				</Routes>
				<Footer />
			</div>
		</Router>
	);
};

export default App;
