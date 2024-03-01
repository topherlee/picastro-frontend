import React, {useContext, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AuthContext} from '../../context/AuthContext';
import {useNavigationState, getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {MainStackNavigator, ImageUploadStackNavigator} from './StackNavigator';

import {HomeButton, TelescopeButton, ImageUploadButton} from '../atoms';

const Tab = createBottomTabNavigator();

const screenOptionStyle = {
	headerShown: false,
	tabBarStyle: {
		backgroundColor: 'black',
		paddingTop: 10,
		borderTopWidth: 0,
	},
	tabBarActiveTintColor: 'red',
	tabBarInactiveTintColor: 'white',
};

const BottomTabNavigator = ({navigation}) => {
	const {isModalVisible, setModalVisible} = useContext(AuthContext);
	const [subRoute, setSubRoute] = useState(null);

	return (
		<Tab.Navigator screenOptions={screenOptionStyle}>
			<Tab.Screen
				name="HomeTab"
				//check for focused screen name
				listeners={({route}) => ({
					state: () => {
						setSubRoute(getFocusedRouteNameFromRoute(route));
					},
				})}
				component={MainStackNavigator}
				options={{
					tabBarShowLabel: false,
					tabBarIcon: ({focused}) => {
						return <HomeButton focused={focused} />;
					},
				}}
			/>
			<Tab.Screen
				name="ImageUploadTab"
				listeners={({route}) => ({
					state: () => {
						setSubRoute('ImageUpload');
					},
				})}
				component={ImageUploadStackNavigator}
				options={{
					tabBarShowLabel: false,
					tabBarIcon: ({focused}) => <ImageUploadButton focused={focused} />,
				}}
			/>
			{/* <Tab.Screen 
            name="NotificationsTab" 
            component={NotificationsStackNavigator} 
            options={{
                tabBarShowLabel: false,
                tabBarIcon: ({ focused }) => (
                    <NotificationsButton />
                ),
            }}
        /> */}
			<Tab.Screen
				name="SortAndFilterTab"
				options={{
					tabBarShowLabel: false,
					tabBarIcon: ({focused}) => <TelescopeButton />,
				}}
				listeners={{
					tabPress: (e) => {
						e.preventDefault();
						// console.log(subRoute);
						if (
							subRoute !== undefined &&
							subRoute !== 'PostDetails' &&
							subRoute !== 'ImageUpload'
						) {
							setModalVisible(!isModalVisible);
						}
					},
				}}>
				{() => null}
			</Tab.Screen>
		</Tab.Navigator>
	);
};

export default BottomTabNavigator;
