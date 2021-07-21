import React from 'react';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import InfoIcon from '@material-ui/icons/Info';

import './Widgets.css';

const Widgets = () => {
	const newsArticle = (heading, subtitle) => (
		<div className='widgets__article'>
			<div className='widgets__articleLeft'>
				<FiberManualRecordIcon />
			</div>
			<div className='widgets__articleRight'>
				<h4>{heading}</h4>
				<p>{subtitle}</p>
			</div>
		</div>
	);
	return (
		<div className='widgets'>
			<div className='widgets__header'>
				<h2>LinkedIn News</h2>
				<InfoIcon />
			</div>
			{newsArticle('Murtaza Vasi', 'This is an awesome guy!!')}
			{newsArticle('Coronavirus: UK updates', 'Top news - 886 readers')}
			{newsArticle('Bitcoin breaks $22k', 'Crypto - 8080 readers')}
		</div>
	);
};

export default Widgets;
