// TO-DO Figure out how to properly show the burger button on the right side
// currently this works by dragging from the right side of the screen

import React from 'react';
import {createDrawerNavigator, DrawerToggleButton} from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import LogoutScreen from '../../screens/SigninScreen/LogoutScreen';
import SharePicastroScreen from '../../screens/SharePicastroScreen';

const Drawer = createDrawerNavigator();

const screenOptionStyle = {
	drawerPosition: 'right',
	headerShown: false,
	headerLeft: false,
	headerRight: () => <DrawerToggleButton />,
	drawerStyle: {
		backgroundColor: '#0d0d0d',
		width: '90%',
	},
	drawerLabelStyle: {color: 'white'},
	drawerType: 'front',
	drawerActiveBackgroundColor: '#ffc700',
};

const DrawerNavigator = ({navigation}) => {
	return (
		<Drawer.Navigator screenOptions={screenOptionStyle}>
			<Drawer.Screen name="Main Screen" component={TabNavigator} />
			<Drawer.Screen name="Share Picastro" component={SharePicastroScreen} />
			<Drawer.Screen name="Log Out" component={LogoutScreen} />
		</Drawer.Navigator>
	);
};

export default DrawerNavigator;
