import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Redirect from './components/Redirect';
import MobileWarning from './components/MobileWarning';

// Import Pages

import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';

// Set Routes

function App() {
	
	// Set Pages
	
	const pages = [
		{ url: '', element: <Home /> },
		{ url: 'home', redirect: '' },
		{ url: 'projects', element: <Projects /> },
		{ url: 'about', element: <About /> }
	];
	
	const isMobile = window.innerWidth < 1130 ? true : false;

	// Render

	const helmetContext = {};
	return (
		<HelmetProvider context={helmetContext}>
			<Router>
				<Routes>
					{pages.map((p, i) => { return(
						<Route key={i} path={`/${p.url}`} element={!p.element
							? <Redirect page={p.redirect} />
							: isMobile ? <MobileWarning /> : p.element}
						/>
					);})}
				</Routes>
			</Router>
		</HelmetProvider>
	);
}

export default App;