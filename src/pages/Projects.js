import React, { memo } from 'react';
import Navbar from '../components/Navbar';

const Projects = memo(() => {
	return (
		<Navbar page='projects' />
	);
});

export default Projects;