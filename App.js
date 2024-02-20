/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';

import {StatusBar} from 'react-native';

import {StripeProvider} from '@stripe/stripe-react-native';

import SplashScreen from 'react-native-splash-screen';

import {NavigationContainer} from '@react-navigation/native';

import {AuthProvider} from './src/context/AuthContext';
import OnboardingNavigator from './src/components/navigation/OnboardingNavigator';

const YourApp = () => {
	useEffect(() => {
		SplashScreen.hide();
	}, []);

	return (
		<StripeProvider
			publishableKey="pk_test_51OIcveKVqvas7Ujj32rhiFIjDmwTHrB1cRnEdXvk2PPZ1aZ0geW1YWhn0QBu4jGsuFpCF7pAtZXnFoAtpxYdxEbC00U9I3gGkh"
			urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
			merchantIdentifier="com.picastroglobal.picastro" // required for Apple Pay
		>
			<NavigationContainer>
				<StatusBar barStyle="light-content" backgroundColor="black" />
				<AuthProvider>
					<OnboardingNavigator />
				</AuthProvider>
			</NavigationContainer>
		</StripeProvider>
	);
};

export default YourApp;
