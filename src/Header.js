import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';

import { logout, selectUser } from './features/userSlice';
import HeaderOption from './HeaderOption';
import './Header.css';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase';

const Header = () => {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();

	const logoutOfApp = () => {
		dispatch(logout());
		auth.signOut();
	};

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
				<HeaderOption avatar={true} title='Me' onClick={logoutOfApp} />
			</div>
		</header>
	);
};

export default Header;
