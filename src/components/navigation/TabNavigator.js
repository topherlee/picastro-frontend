import React, { useContext } from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AuthContext } from '../../context/AuthContext';

import {
    MainStackNavigator,
    ImageUploadStackNavigator
} from "./StackNavigator";


import {
    HomeButton,
    TelescopeButton,
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

const BottomTabNavigator = ({ navigation }) => {
    const {
        isModalVisible,
        setModalVisible
    } = useContext(AuthContext);


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
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) => (
                        <TelescopeButton />
                    ),
                }}
                listeners={{
                    tabPress: (e) => {
                        e.preventDefault();
                        //navigation.navigate('Home')
                        setModalVisible(!isModalVisible)
                    },
                }}
            >
                {() => null}
            </Tab.Screen>
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;