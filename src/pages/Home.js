import React, { memo } from 'react';
import Navbar from '../components/Navbar';
import emoji from 'react-easy-emoji';

const Home = memo(() => {
	return (
		<div className='container'>
			<Navbar page='home' />
			<div className='hero'>
				<div className='content'>
					<div className='subtitle small'>{emoji('hey i\'m dacosta! 👋')}</div>
					<div className='subtitle'>{'i love programming random things!'}</div>
				</div>
				<div className='content'>
					<span className='title'>full-stack</span>
					<span className='title'>developer.</span>
				</div>
			</div>
		</div>
	);
});

export default Home;