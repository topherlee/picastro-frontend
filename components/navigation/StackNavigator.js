import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../../screens/HomeScreen";
import ProfileScreen from "../../screens/ProfileScreen";
import PostDetailsScreen from "../../screens/PostDetailsScreen";
import Coin from "../../screens/Coin";
import { LoginScreen } from "../../screens/SigninScreen";
import { PicastroLogoHeader } from "../molecules";

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

const FilterStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={DetailedFeedHeader}>
      <Stack.Screen name="Filter" component={Coin} options={{headerShown: false}} />
    </Stack.Navigator>
  )
}

export { MainStackNavigator, ProfileStackNavigator, FilterStackNavigator };