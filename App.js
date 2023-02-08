/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
//import type {PropsWithChildren} from 'react';

import SplashScreen from 'react-native-splash-screen';

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


const YourApp = () => {
  // useEffect(() => {
  //   SplashScreen.hide();
  // }, []); 
  SplashScreen.hide();
  return (
    <HomeScreen />
  );
};

export default YourApp;