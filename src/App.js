import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import {
	trendingMovies,
	nowPlaying,
	topRated,
	upComingMovies,
} from './utils/list';

import './App.css';

import { Banner } from './components/Banner';
import { Overlay } from './components/Overlay';
import { List } from './components/List';
import { DetailsBottom } from './components/Details';
import { toggleOverlay } from './functions';
import { tokenLogin } from './utils';

export function App() {
	const [curUser, setCurUser] = useState('');

	const navSwitch = () => {
		const obj = {};
		if (curUser === '') {
			obj.iconName = 'login-variant';
			obj.path = '/';
		} else {
			obj.iconName = 'account-box-outline';
			obj.path = `/account`;
		}
		return obj;
	};

	const userHandler = () => {
		if (curUser === '') {
			toggleOverlay();
		}
	};

	const logoutHandler = () => {
		setCurUser('');
	};

  useEffect(() => {
    tokenLogin(setCurUser)
  }, [])

	return (
		<Router>
			<div className='App'>
				<Overlay setCurUser={setCurUser} />
				<div className='main'>
					<Switch>
						<Route exact path='/'>
							<Banner
								bgImg='bg-1'
								iconName={navSwitch().iconName}
								linkTo={navSwitch().path}
								userNameTop={curUser}
								navBtn={userHandler}
							/>
						</Route>
						<Route path='/account'>
							<Banner
								bgImg='bg-2'
								iconName='backspace-outline'
								userName={curUser}
								resetUser={() => {
									logoutHandler();
								}}
								linkTo='/'
							/>
						</Route>
						<Route path='/movies'>
							<Banner
								bgImg='banner__backdrop'
								iconName='backspace-outline'
								userName={curUser}
								resetUser={() => {
									logoutHandler();
								}}
								linkTo='/'
							/>
						</Route>
					</Switch>
					<Switch>
						<Route exact path='/'>
							<List fetchFunc={trendingMovies} title='Trending' />
							<List fetchFunc={nowPlaying} title='Now in Cinema' />
							<List fetchFunc={topRated} title="UK's favourite" />
							<List fetchFunc={upComingMovies} title='upcoming' />
						</Route>
						<Route path='/movies'>
							<DetailsBottom curUser={curUser}/>
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
}
