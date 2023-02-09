import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MainStackNavigator, ProfileStackNavigator } from "./StackNavigator";

import HeaderBanner from "../home/Header";

const Tab = createBottomTabNavigator();

const headerScreenOptionStyle = { 
    headerShown: false
}

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={headerScreenOptionStyle}>
      <Tab.Screen name="Home" component={MainStackNavigator} />
      <Tab.Screen name="Profile" component={ProfileStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;