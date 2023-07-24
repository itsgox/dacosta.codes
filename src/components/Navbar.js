import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = memo(({ page }) => {

	const navigate = useNavigate();

	const pages = [
		{ id: 'home' },
		{ id: 'projects' },
		{ id: 'about' },
		{ id: 'contact', url: 'mailto:goxdacosta@gmail.com' }
	];

	const date = new Date();
	const currentYear = date.getFullYear();

	return (
		<div className='navbar'>
			<div className='section'>
				{pages.map((p, i) => { return(
					<span key={i} onClick={() => p.url ? window.open(p.url, '_blank') : navigate(`/${p.id}`)} className={`item${p.id === page ? ' selected' : ''}`}>{p.id.charAt(0).toUpperCase()}{p.id.slice(1)}</span>
				);})}
			</div>
		</div>
	);
});

export default Navbar;