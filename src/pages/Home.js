import React, { memo } from 'react';
import Navbar from '../components/Navbar';
import PageTitle from '../components/PageTitle';
import { BsDiscord, BsGithub } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { RiTwitterXFill } from 'react-icons/ri';
import { FiArrowRight } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const Home = memo(() => {

	const navigate = useNavigate();

	function openLink(url) {
		window.open(`https://${url}`, '_blank');
	}

	return (
		<div className='container'>
			<PageTitle />
			<Navbar page='home' />
			<div className='hero'>
				<div className='content'>
					<span className='role'>Next.js & Node.js Developer</span>
					<span className='title'>I build <span className='colored'>websites</span>{'\n'}and <span className='colored'>design</span> things</span>
					<div className='buttons'>
						<div href='/projects' className='btn primary' onClick={() => navigate('/projects')}>
							<span>Projects</span>
							<FiArrowRight />
						</div>
						<a href='mailto:goxdacosta@gmail.com' className='btn secondary'>Email Me</a>
					</div>
					<div className='icons'>
						<div className='icon' onClick={() => openLink('github.com/itsgox')}><BsGithub /></div>
						<div className='icon' onClick={() => openLink('discord.gg/MCP84Af8Cm')}><BsDiscord /></div>
						<div className='icon' onClick={() => openLink('instagram.com/goxdacosta')}><AiFillInstagram /></div>
						<div className='icon' onClick={() => openLink('twitter.com/goxdacosta')}><RiTwitterXFill /></div>
					</div>
				</div>
			</div>
		</div>
	);
});

export default Home;