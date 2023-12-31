import React, { memo } from 'react';
import Navbar from '../components/Navbar';
import PageTitle from '../components/PageTitle';
import Project from '../components/Project';
import config from '../config/config.json';

const Projects = memo(() => {
	return (
		<>
			<PageTitle title='Projects' />
			<Navbar page='projects' />
			<div className='page-title'>Projects</div>
			<div className='hero'>
				<div className='projects'>
					{config.projects.filter(pr => pr.status).map((pr, i) => { return(
						<Project key={i} publicProject={pr.publicProject} openSource={pr.openSource} img={pr.img} title={pr.title} description={pr.description} website={pr.website} github={pr.github} tags={pr.tags} verified={pr.verified} verifiedText={pr.verifiedText} people={pr.people} peopleText={pr.peopleText} />
					);})}
				</div>
			</div>
		</>
	);
});

export default Projects;