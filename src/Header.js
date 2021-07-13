import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';

import HeaderOption from './HeaderOption';
import './Header.css';

const Header = () => {
	return (
		<header className='header'>
			<div className='header__left'>
				<img
					src='https://www.flaticon.com/svg/static/icons/svg/174/174857.svg'
					alt='linkedIn-icon'
				/>
				<div className='header__search'>
					<SearchIcon />
					<input type='text' placeholder='Search' />
				</div>
			</div>
			<div className='header__right'>
				<HeaderOption title='Home' Icon={HomeIcon} />
				<HeaderOption title='My Network' Icon={SupervisorAccountIcon} />
				<HeaderOption title='Jobs' Icon={BusinessCenterIcon} />
				<HeaderOption title='Messaging' Icon={ChatIcon} />
				<HeaderOption title='Notifications' Icon={NotificationsIcon} />
				<HeaderOption
					avatar='https://t4.ftcdn.net/jpg/03/75/38/73/360_F_375387396_wSJM4Zm0kIRoG7Ej8rmkXot9gN69H4u4.jpg'
					title='Me'
				/>
			</div>
		</header>
	);
};

export default Header;
