import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';

const PageTitle = memo(() => {
	return (
		<Helmet>
			<title>DaCosta's Portfolio</title>
		</Helmet>
	);
});

export default PageTitle;