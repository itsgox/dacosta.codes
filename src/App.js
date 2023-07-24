import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Redirect from './components/Redirect';

// Import Pages

import Home from './pages/Home';
import Projects from './pages/Projects';

// Set Routes

function App() {

	// Set Pages

	const pages = [
		{ url: '', element: <Home /> },
		{ url: 'projects', element: <Projects /> },
		{ url: 'home', redirect: '' }
	];

	// Render

	const helmetContext = {};
	return (
		<HelmetProvider context={helmetContext}>
			<Router>
				<Routes>
					{pages.map((p, i) => { return(
						<Route key={i} path={`/${p.url}`} element={!p.element
							? <Redirect page={p.redirect} />
							: p.element}
						/>
					);})}
				</Routes>
			</Router>
		</HelmetProvider>
	);
}

export default App;