import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MainStackNavigator, ProfileStackNavigator } from "./StackNavigator";

import HeaderBanner from "../home/Header";
import { Image, Text, View } from 'react-native';

import { HomeButton, StarCampsButton } from "../atoms";

const Tab = createBottomTabNavigator();

const screenOptionStyle = { 
    headerShown: false,
    tabBarStyle: {
        backgroundColor: "black",
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
        <Tab.Screen 
            name="ProfileTab" 
            component={ProfileStackNavigator} 
            options={{
                tabBarShowLabel: false,
                tabBarIcon: ({ focused }) => (
                    <StarCampsButton />
                ),
            }}
        />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;