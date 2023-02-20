import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../../screens/HomeScreen"
import ProfileScreen from "../../screens/ProfileScreen";
import PostDetailsScreen from "../../screens/PostDetailsScreen";
import { LoginScreen } from "../../screens/SigninScreen";
import { DetailedFeedHeader } from "../molecules";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    //<Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Navigator screenOptions={DetailedFeedHeader}>
      <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
      <Stack.Screen name="PostDetails" component={PostDetailsScreen} />
    </Stack.Navigator>
  );
}

const ProfileStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={DetailedFeedHeader}>
            <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
    );
}

export { MainStackNavigator, ProfileStackNavigator };