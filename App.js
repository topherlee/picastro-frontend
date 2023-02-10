/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';

import {
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import SplashScreen from 'react-native-splash-screen';

import { NavigationContainer } from '@react-navigation/native';
// import MainStackNavigator from './components/navigation/StackNavigator';
// import BottomTabNavigator from './components/navigation/TabNavigator';
import DrawerNavigator from './components/navigation/DrawerNavigator';

// import HomeScreen from './screens/HomeScreen';

const YourApp = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <DrawerNavigator />
      {/* <HomeScreen /> */}
    </NavigationContainer>
  );
};

export default YourApp;
