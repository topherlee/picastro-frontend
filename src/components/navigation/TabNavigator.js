import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { 
    MainStackNavigator,
    ProfileStackNavigator,
    SortFilterStackNavigator,
    NotificationsStackNavigator,
    ImageUploadStackNavigator
} from "./StackNavigator";

import { Image, Text, View } from 'react-native';

import {    HomeButton,
            StarCampsButton,
            TelescopeButton,
            NotificationsButton,
            ImageUploadButton
} from "../atoms";

const Tab = createBottomTabNavigator();

const screenOptionStyle = { 
    headerShown: false,
    tabBarStyle: {
        backgroundColor: "black",
        paddingTop: 10
    },
    tabBarActiveTintColor: "red",
    tabBarInactiveTintColor: "white",
}

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={screenOptionStyle}>
        <Tab.Screen 
            name="HomeTab" 
            component={MainStackNavigator} 
            options={{
                tabBarShowLabel: false,
                tabBarIcon: ({ focused }) => (
                    <HomeButton />
                ),
            }}
        />
        {/* <Tab.Screen 
            name="ProfileTab" 
            component={ProfileStackNavigator} 
            options={{
                tabBarShowLabel: false,
                tabBarIcon: ({ focused }) => (
                    <StarCampsButton />
                ),
            }}
        /> */}
        <Tab.Screen 
            name="ImageUploadTab" 
            component={ImageUploadStackNavigator} 
            options={{
                tabBarShowLabel: false,
                tabBarIcon: ({ focused }) => (
                    <ImageUploadButton />
                ),
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
            component={SortFilterStackNavigator} 
            options={{
                tabBarShowLabel: false,
                tabBarIcon: ({ focused }) => (
                    <TelescopeButton />
                ),
            }}
        />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;