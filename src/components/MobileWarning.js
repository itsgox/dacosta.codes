import React, { memo } from 'react';

const MobileWarning = memo(() => {
	return (
		<div className='mobile-warning'>
            This website is still not ready on mobile :{'('}
		</div>
	);
});

export default MobileWarning;