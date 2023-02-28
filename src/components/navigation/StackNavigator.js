import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../../screens/HomeScreen";
import ProfileScreen from "../../screens/ProfileScreen";
import PostDetailsScreen from "../../screens/PostDetailsScreen";
import NotificationsScreen from "../../screens/NotificationsScreen";
import Coin from "../../screens/Coin";
import { LoginScreen } from "../../screens/SigninScreen";
import { PicastroLogoHeader, UserNameImageBurgerHeader } from "../molecules";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    //<Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Navigator screenOptions={PicastroLogoHeader}>
      <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
      <Stack.Screen name="PostDetails" component={PostDetailsScreen} />
      <Stack.Screen name="Filter" component={PostDetailsScreen} />
    </Stack.Navigator>
  );
}

const ProfileStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={PicastroLogoHeader}>
            <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
    );
}

const NotificationsStackNavigator = () => {
  return (
      <Stack.Navigator screenOptions={PicastroLogoHeader}>
          <Stack.Screen name="Profile" component={NotificationsScreen} />
      </Stack.Navigator>
  );
}

const FilterStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={UserNameImageBurgerHeader}>
      <Stack.Screen name="Filter" component={Coin} options={{headerShown: false}} />
    </Stack.Navigator>
  )
}

export { 
  MainStackNavigator,
  ProfileStackNavigator,
  FilterStackNavigator,
  NotificationsStackNavigator
};