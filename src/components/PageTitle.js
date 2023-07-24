import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';

const PageTitle = memo(({ title }) => {
	return (
		<Helmet>
			{/*<title>DaCosta's Portfolio{title ? ` — ${title}` : ''}</title>*/}
			<title>DaCosta — Full-Stack Developer & Motion Designer</title>
		</Helmet>
	);
});

export default PageTitle;