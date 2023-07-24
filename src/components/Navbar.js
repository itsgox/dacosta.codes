import React, { memo } from 'react';
import { BsDiscord, BsGithub } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { FaTwitter } from 'react-icons/fa';

const Navbar = memo(({ page }) => {

	const pages = [
		{ id: 'projects', button: false },
		{ id: 'about', button: false },
		{ id: 'contact', url: 'mailto:goxinthebox@gmail.com', button: true }
	];

	function openLink(url) {
		window.open(`https://${url}`, '_blank');
	}

	return (
		<>
			<div className='socials-container'>
				<div className='socials'>
					<div className='icons'>
						<BsGithub className='icon' onClick={() => openLink('github.com/itsgox')} />
						<BsDiscord className='icon' onClick={() => openLink('discord.gg/MCP84Af8Cm')} />
						<AiFillInstagram className='icon' onClick={() => openLink('instagram.com/goxdacosta')} />
						<FaTwitter className='icon' onClick={() => openLink('twitter.com/goxdacosta')} />
					</div>
					<hr className='line' />
				</div>
			</div>
			<div className='navbar'>
				<div className='section logo'>
					<a href={page === 'home' ? null : '/'} className='main'>dacosta.</a>
				</div>
				<div className='section'>
					{pages.map((p, i) => { return(
						<a key={i} href={p.url ? p.url : `/${p.id}`} className={`item${p.id === page ? ' selected' : ''}${p.button ? ' btn' : ''}`}>{p.id}.</a>
					);})}
				</div>
			</div>
		</>
	);
});

export default Navbar;