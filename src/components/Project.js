import React, { memo, useState } from 'react';
import { MdPublic, MdPublicOff, MdVerified } from 'react-icons/md';
import { RiOpenSourceFill } from 'react-icons/ri';
import { BsFillPeopleFill } from 'react-icons/bs';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/material.css';

const Project = memo(({ key, img, title, description, website, github, publicProject, openSource, tags, verified, verifiedText, people, peopleText }) => {

	const [tagsState, setTagsState] = useState(false);

	return (
		<div key={key} className='project'>
			<div className='img' onMouseEnter={() => setTagsState(true)} onMouseLeave={() => setTagsState(false)}>
				{img && <img src={img} />}
				<div className={`shadow-solid${tagsState ? ' show-shadow-solid' : ''}`} />
				{tags && <div className={`tags${tagsState ? ' show-tags' : ''}`}>{tags.map((tag, i) => { return(
					<span key={i} className='tag'>{tag}</span>
				);})}</div>}
			</div>
			<div className='texts'>
				<div className='title-container'>
					<span className='title'>{title}</span>
					<Tippy offset={[0,12]} theme='material' placement='top' content={`${publicProject ? 'Public' : 'Private'} Project`}><span>{publicProject
						? <MdPublic className='icon' />
						: <MdPublicOff className='icon' />
					}</span></Tippy>
					{verified && <Tippy offset={[0,12]} theme='material' placement='top' content={verifiedText}><span><MdVerified className='icon' /></span></Tippy>}
					{people && <Tippy offset={[0,12]} theme='material' placement='top' content={peopleText}><span><BsFillPeopleFill className='icon' /></span></Tippy>}
					{openSource && <Tippy offset={[0,12]} theme='material' placement='top' content='Open Source'><span><RiOpenSourceFill className='icon' /></span></Tippy>}
				</div>
				<span className='description'>{description}</span>
			</div>
			<div className='buttons'>
				<a href={website ? website : null} target='_blank' className={`btn primary${!website ? ' disabled' : ''}`}>Website</a>
				<a href={github ? github : null} target='_blank' className={`btn secondary${!github ? ' disabled' : ''}`}>Github</a>
			</div>
		</div>
	);
});

export default Project;