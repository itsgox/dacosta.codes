import React, { memo } from 'react';
import Navbar from '../components/Navbar';
import PageTitle from '../components/PageTitle';
import Project from '../components/Project';

const About = memo(() => {
	return (
		<>
			<PageTitle title='About' />
			<Navbar page='about' />
			<div className='hero'>
				<div className='content'>
					<span className='title'>In <span className='colored'>development...</span></span>
				</div>
			</div>
		</>
	);
});

export default About;