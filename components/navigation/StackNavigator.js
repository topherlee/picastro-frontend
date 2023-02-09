import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../../screens/HomeScreen"
import ProfileScreen from "../../screens/ProfileScreen";
import HeaderBanner from '../home/Header';
import PostDetailsScreen from "../../screens/PostDetailsScreen";

const Stack = createStackNavigator();

const headerScreenOptionStyle = { 
    headerTitle: (props) => <HeaderBanner {...props} />,
    headerStyle: {
      backgroundColor: 'black',
    },
    headerTintColor: '#fff',
    headerTitleAlign: 'center',
    headerBackTitleVisible: false,
}

const headerScreenOptionStyle2 = { 
    headerTitle: (props) => <HeaderBanner {...props} />,
    headerStyle: {
      backgroundColor: 'white',
    },
    headerTintColor: '#fff',
    headerTitleAlign: 'center',
    headerBackTitleVisible: false,
}

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={headerScreenOptionStyle}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="PostDetails" component={PostDetailsScreen} />
    </Stack.Navigator>
  );
}

const ProfileStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={headerScreenOptionStyle2}>
            <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
    );
}

export { MainStackNavigator, ProfileStackNavigator };