/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';

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

import HomeScreen from './screens/HomeScreen';

import SplashScreen from 'react-native-splash-screen';


const YourApp = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []); 
  return (
    <HomeScreen />
  );
};

export default YourApp;