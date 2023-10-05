import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../../screens/HomeScreen";
import ProfileScreen from "../../screens/ProfileScreen";
import PostDetailsScreen from "../../screens/PostDetailsScreen";
import NotificationsScreen from "../../screens/NotificationsScreen";
import SortAndFilterScreen from "../../screens/SortAndFilterScreen";
import {LogoutScreen } from "../../screens/SigninScreen";
import { LoginScreen } from "../../screens/SigninScreen";
import { PicastroLogoHeader, UserNameImageBurgerHeader } from "../molecules";
import UserScreen from "../../screens/UserScreen"
import EditProfile from "../../screens/EditProfile";
import YourMainSetup from "../../screens/YourMainSetup";
import ImageUploadScreen from "../../screens/ImageUploadScreen";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
      //<Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Navigator screenOptions={PicastroLogoHeader}>
          <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{headerShown: false}}
          />
          <Stack.Screen
              name="UserScreen"
              component={UserScreen}
              options={{headerShown: false}}
              getId={({params}) => params.userId}
          />
          <Stack.Screen name="PostDetails" component={PostDetailsScreen} />
          <Stack.Screen name="Filter" component={PostDetailsScreen} />
          <Stack.Screen
              name="EditProfile"
              component={EditProfile}
              options={{headerShown: false}}
          />
          <Stack.Screen
              name="YourMainSetup"
              component={YourMainSetup}
              options={{headerShown: false}}
          />
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
          <Stack.Screen name="Coin" component={Coin} />
      </Stack.Navigator>
  );
}

const SortFilterStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={UserNameImageBurgerHeader}>
      <Stack.Screen name="Filter" component={SortAndFilterScreen} options={{headerShown: false}} />
    </Stack.Navigator>
  )
}

const ImageUploadStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={PicastroLogoHeader}>
      <Stack.Screen name="ImageUpload" component={ImageUploadScreen} />
    </Stack.Navigator>
  )
}

export { 
  MainStackNavigator,
  ProfileStackNavigator,
  SortFilterStackNavigator,
  NotificationsStackNavigator,
  ImageUploadStackNavigator
};