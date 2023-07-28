import React, { memo } from 'react';
import Navbar from '../components/Navbar';
import PageTitle from '../components/PageTitle';

const About = memo(() => {
	return (
		<>
			<PageTitle title='About' />
			<Navbar page='about' />
			<div className='page-title'>About</div>
		</>
	);
});

export default About;