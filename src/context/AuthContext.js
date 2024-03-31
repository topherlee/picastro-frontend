import dayjs from 'dayjs';
import {jwtDecode} from 'jwt-decode';
import {decode} from 'base-64';
global.atob = decode;
import React, {useState, useEffect, useMemo} from 'react';
import {Platform} from 'react-native';
import * as Burnt from 'burnt';

import * as Keychain from 'react-native-keychain';
export const AuthContext = React.createContext({});

//set dayjs
var duration = require('dayjs/plugin/duration');
dayjs.extend(duration);

export const AuthProvider = ({children, contextValue}) => {
	const [isSignedIn, setIsSignedIn] = useState(false);
	//IMPORTANT: PAY ATTENTION NOT TO ADD A TRAILING / FOR DOMAIN ON IOS OTHERWISE ALL API CALLS WILL NOT WORK
	// const [domain, setDomain] = useState(Platform.OS === 'ios' ? 'https://mainapp.picastroapp.com' : 'https://mainapp.picastroapp.com');
	const [domain, setDomain] = useState(
		Platform.OS === 'ios' ?
			'http://127.0.0.1:8000'
		:	'http://10.0.2.2:8000',
	);
	const [token, setToken] = useState(null);
	const [currentUser, setCurrentUser] = useState();
	const [currentUserProfile, setCurrentUserProfile] = useState();
	const [otherUser, setOtherUser] = useState();
	const [currentPostsPage, setCurrentPostsPage] = useState(1);
	const [validSubscription, setValidSubscription] = useState(false);

	//gets access and refresh token from keychain in JSON object format
	async function getSavedTokens() {
		//console.log('GETTING SAVED TOKENS')
		var credentials = await Keychain.getGenericPassword();
		if (credentials) {
			credentials = JSON.parse(credentials.password);
			return credentials;
		} else {
			console.log('saved credentials null');
			return null;
		}
	}

	//save tokens in keychain
	//tokenPair: a JSON object containing access and refresh tokens
	async function setSavedTokens(tokenPair) {
		console.log('SAVING NEW TOKENS', tokenPair);
		await Keychain.setGenericPassword('token', JSON.stringify(tokenPair));
	}

	async function refreshAllTokens() {
		try {
			var credentials = await getSavedTokens();

			var response = await fetch(`${domain}/api/auth/login/refresh/`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({refresh: credentials?.refresh}),
			});

			newToken = await response.json();
			console.log('REFRESH STATUS', response.status);

			if (response.ok) {
				console.log('REFRESH OK', newToken);
				await setSavedTokens(newToken);
				setToken(newToken);
				return newToken;
			} else {
				console.log('REFRESH TOKEN EXPIRED');
				setToken(null);
				setIsSignedIn(false);

				Burnt.alert({
					title: 'Session Expired',
					message: 'Please log in again to continue.',
					preset: 'error',
					duration: 2, // duration in seconds
					shouldDismissByTap: true,
				});
				return Promise.reject(new Error('Token expired please login again'));
			}
		} catch (err) {
			console.log('REFRESH TOKEN ERROR', err);
			setIsSignedIn(false);
		}
	}

	let fetchInstance = async (url, config = {}) => {
		var response;
		console.log(url);
		var credentials = await getSavedTokens();
		const user = jwtDecode(credentials.access);
		const remainingTokenTime = dayjs.unix(user.exp).diff(dayjs(), 'second');
		if (remainingTokenTime < 15) {
			console.log('REFERSHING EXPIRED TOKEN FROM FETCH INSTANCE');
			credentials = await refreshAllTokens();
			setToken(credentials);
		}

		//proceed with request
		config['headers'] = {
			Authorization: `Token ${credentials?.access}`,
		};

		try {
			response = await fetch(domain + url, config);
		} catch (err) {
			console.log('FETCH ERROR', err);
			// Burnt.alert({
			// 	title: 'Network Error',
			// 	message: 'Please check your network connection and try again.',
			// 	preset: 'error',
			// 	duration: 2, // duration in seconds
			// 	shouldDismissByTap: true,
			// });

			Burnt.toast({
				title: 'Network Error',
				message: 'Please try again',
				preset: 'error',
				haptic: 'error',
				duration: 4, // duration in seconds
				shouldDismissByDrag: true,
			});
			setTimeout(() => Burnt.dismissAllAlerts(), 2000);
			throw err;
		}

		return response;
	};

	//put those in separate context file, since it's not AuthContext,
	//but more related to Screens
	const [loading, setLoading] = useState(false);
	const [retry, setRetry] = useState(0);
	const [searchAndFilterUrl, setSearchAndFilterUrl] = useState('');
	const [userSearchAndFilterUrl, setUserSearchAndFilterUrl] = useState('');
	const [userScreenUrl, setUserScreenUrl] = useState('');
	const [isSortModalVisible, setSortModalVisible] = useState(false);
	const [isModalVisible, setModalVisible] = useState(false);
	const [user, setUser] = useState('');
	const [userUrl, setUserUrl] = useState('');
	const [userFilterUrl, setUserFilterUrl] = useState('');
	const [userActiveSelector, setUserActiveSelector] = useState('most_recent');
	const [userActiveObjectSelector, setUserActiveObjectSelector] = useState('');
	const [activeSelector, setActiveSelector] = useState('most_recent');
	const [activeObjectSelector, setActiveObjectSelector] = useState('');
	const [userCurrentPage, setUserCurrentPage] = useState(1);
	const [listOfLikes, setListOfLikes] = useState([]);

	const globalContext = {
		fetchInstance,
		getSavedTokens,
		setSavedTokens,
		resetStates,
		domain,
		setDomain,
		isSignedIn,
		setIsSignedIn,
		token,
		setToken,
		user,
		setUser,
		currentUser,
		setCurrentUser,
		currentUserProfile,
		setCurrentUserProfile,
		otherUser,
		setOtherUser,
		userScreenUrl,
		setUserScreenUrl,
		searchAndFilterUrl,
		setSearchAndFilterUrl,
		userSearchAndFilterUrl,
		setUserSearchAndFilterUrl,
		userUrl,
		setUserUrl,
		userFilterUrl,
		setUserFilterUrl,
		isSortModalVisible,
		setSortModalVisible,
		activeSelector,
		setActiveSelector,
		activeObjectSelector,
		setActiveObjectSelector,
		userActiveSelector,
		setUserActiveSelector,
		userActiveObjectSelector,
		setUserActiveObjectSelector,
		currentPostsPage,
		setCurrentPostsPage,
		userCurrentPage,
		setUserCurrentPage,
		isModalVisible,
		setModalVisible,
		listOfLikes,
		setListOfLikes,
		retry,
		setRetry,
		validSubscription,
		setValidSubscription,
	};

	//HACK: function to reset all states manually on logout
	function resetStates() {
		setUser('');
		setCurrentUser({
			id: '',
			username: '',
			first_name: '',
			last_name: '',
			email: '',
		});
		setCurrentUserProfile();
		setOtherUser();
		setUserScreenUrl('');
		setSearchAndFilterUrl('');
		setUserSearchAndFilterUrl('');
		setUserUrl('');
		setUserFilterUrl('');
		setSortModalVisible(false);
		setActiveSelector('most_recent');
		setActiveObjectSelector('');
		setUserActiveSelector('most_recent');
		setUserActiveObjectSelector('');
		setCurrentPostsPage(1);
		setUserCurrentPage(1);
		setToken(null);
		setIsSignedIn(false);
		setListOfLikes([]);
		setModalVisible(false);
		setValidSubscription(false);
	}

	useEffect(() => {
		//     let interval = setInterval(() => {
		//         if (token) {
		//             refreshAllTokens();
		//         }
		//     }, 240000);
		//     return () => clearInterval(interval)

		setLoading(false);
	}, [token, loading, isSignedIn]);

	return <AuthContext.Provider value={globalContext}>{children}</AuthContext.Provider>;
};
