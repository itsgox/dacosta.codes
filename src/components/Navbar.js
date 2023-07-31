import React, { memo, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';
import { MdClose } from 'react-icons/md';

const Navbar = memo(({ page }) => {

	const navigate = useNavigate();

	const pages = [
		{ name: 'Home', id: 'home' },
		{ name: 'Projects', id: 'projects' },
		{ name: 'About', id: 'about' },
		{ name: 'Email Me', id: 'email', url: 'mailto:goxdacosta@gmail.com' }
	];

	const [menuVisibility, setMenuVisibility] = useState(false);

	return (
		<>
			{!menuVisibility && <RxHamburgerMenu className='nav-menu' onClick={() => setMenuVisibility(!menuVisibility)} />}
			<div className={`navbar${menuVisibility ? ' show-nav' : ''}`}>
				<MdClose className='nav-menu close' onClick={() => setMenuVisibility(!menuVisibility)} />
				<div className='section'>
					{pages.map((p, i) => { return(
						<span key={i} onClick={() => { p.url ? window.open(p.url, '_blank') : navigate(`/${p.id}`); setMenuVisibility(false); }} className={`item${p.id === page ? ' selected' : ''}`}>{p.name}</span>
					);})}
				</div>
			</div>
		</>
	);
});

export default Navbar;