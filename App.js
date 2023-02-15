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
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigator from './components/navigation/DrawerNavigator';

import { LoginScreen } from './screens/SigninScreen';2

const Stack = createStackNavigator();
const isLoggedIn = false;

const YourApp = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* if isLoggedIn, then directly render the drawer navigator as the main stack, otherwise render the login stack first */}
        {isLoggedIn ? (
          <Stack.Screen name="MainStack" component={DrawerNavigator}  />
        ) : (
          <Stack.Screen name="LoginStack" component={LoginScreen}  />
        )}
      </Stack.Navigator>
      
      {/* <LoginScreen>
        <DrawerNavigator />
      </LoginScreen> */}
    </NavigationContainer>
  );
};

export default YourApp;
