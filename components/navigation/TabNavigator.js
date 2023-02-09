import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MainStackNavigator, ProfileStackNavigator } from "./StackNavigator";

import HeaderBanner from "../home/Header";

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
            options={{tabBarLabel: "Home"}}
        />
        <Tab.Screen 
            name="ProfileTab" 
            component={ProfileStackNavigator} 
            options={{tabBarLabel: "Profile"}}
        />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;