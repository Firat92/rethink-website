import React from 'react';
import rethinkmov from '../movies/rethinkmov.mp4';

const Video = () => {
	return (
		<div className='video'>
			<h2>EXPLAINER VIDEO</h2>
			<video controls className='videoin'>
				<source src={rethinkmov} type='video/mp4' />
			</video>
		</div>
	);
};

export default Video;
