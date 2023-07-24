import React, { memo, useState } from 'react';
import { MdPublic, MdPublicOff } from 'react-icons/md';
import { RiOpenSourceFill } from 'react-icons/ri';

const Project = memo(({ key, img, title, description, website, github, publicProject, openSource, tags }) => {

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
					{publicProject
						? <MdPublic className='icon' />
						: <MdPublicOff className='icon' />
					}
					{openSource && <RiOpenSourceFill className='icon' />}
				</div>
				<span className='description'>{description}</span>
			</div>
			<div className='buttons'>
				<a href={website ? website : null} target='_blank' className={`btn primary${!website ? ' disabled' : ''}`}>Website</a>
				{github && <a href={github ? github : null} target='_blank' className='btn secondary'>Github</a>}
			</div>
		</div>
	);
});

export default Project;