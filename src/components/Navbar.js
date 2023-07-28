import React, { memo, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';
import { MdClose } from 'react-icons/md';

const Navbar = memo(({ page }) => {

	const navigate = useNavigate();

	const pages = [
		{ id: 'home' },
		{ id: 'projects' },
		{ id: 'about' },
		{ id: 'contact', url: 'mailto:goxdacosta@gmail.com' }
	];

	const [menuVisibility, setMenuVisibility] = useState(false);

	return (
		<>
			{!menuVisibility && <RxHamburgerMenu className='nav-menu' onClick={() => setMenuVisibility(!menuVisibility)} />}
			<div className={`navbar${menuVisibility ? ' show-nav' : ''}`}>
				<MdClose className='nav-menu close' onClick={() => setMenuVisibility(!menuVisibility)} />
				<div className='section'>
					{pages.map((p, i) => { return(
						<span key={i} onClick={() => { p.url ? window.open(p.url, '_blank') : navigate(`/${p.id}`); setMenuVisibility(false); }} className={`item${p.id === page ? ' selected' : ''}`}>{p.id.charAt(0).toUpperCase()}{p.id.slice(1)}</span>
					);})}
				</div>
			</div>
		</>
	);
});

export default Navbar;