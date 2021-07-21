import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import ImageIcon from '@material-ui/icons/Image';
import CreateIcon from '@material-ui/icons/Create';
import EventNoteIcon from '@material-ui/icons/EventNote';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';

import Post from './Post';
import { db } from './firebase';
import InputOptions from './InputOptions';
import { selectUser } from './features/userSlice';
import './Feed.css';

const Feed = () => {
	const [posts, setPosts] = useState([]);
	const [input, setInput] = useState('');

	const user = useSelector(selectUser);

	useEffect(() => {
		db.collection('posts')
			.orderBy('timestamp', 'desc')
			.onSnapshot((snapshot) => {
				setPosts(
					snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
				);
			});
	}, []);

	const sendPost = (e) => {
		e.preventDefault();
		db.collection('posts').add({
			name: user.displayName,
			description: user.email,
			message: input,
			photoUrl: user.photoUrl || '',
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		});
		setInput('');
	};

	return (
		<div className='feed'>
			<div className='feed__inputContainer'>
				<div className='feed__input'>
					<CreateIcon />
					<form>
						<input
							type='text'
							value={input}
							onChange={(e) => setInput(e.target.value)}
						/>
						<button type='submit' onClick={sendPost}>
							Send
						</button>
					</form>
				</div>
				<div className='feed__inputOptions'>
					<InputOptions Icon={ImageIcon} color='#70b5f9' title='Photo' />
					<InputOptions
						Icon={SubscriptionsIcon}
						color='#e7a33e'
						title='Video'
					/>
					<InputOptions Icon={EventNoteIcon} color='#c0cbcd' title='Event' />
					<InputOptions
						Icon={CalendarViewDayIcon}
						color='#7fc15e'
						title='Write Article'
					/>
				</div>
			</div>

			{/* Posts */}
			<FlipMove>
				{posts.map(({ id, data: { name, description, message, photoUrl } }) => (
					<Post
						key={id}
						name={name}
						description={description}
						message={message}
						photoUrl={photoUrl}
					/>
				))}
			</FlipMove>
		</div>
	);
};

export default Feed;
