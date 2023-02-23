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
    Alert,
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

import { ForgotPasswordScreen, LoginScreen, SignUpScreen, UserNameScreen, } from './screens/SigninScreen';
import { AuthProvider } from './src/context/AuthContext';


const Stack = createStackNavigator();

const YourApp = () => {
  const [isSignedIn, setIsSignedIn] = React.useState(false);
  const contextValue = React.useMemo(() => (
    {isSignedIn, setIsSignedIn}
  ), [isSignedIn])

  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <AuthProvider contextValue={contextValue}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {/* if isSignedIn, then use the drawer navigator, otherwise render the login screen */}
          {isSignedIn ? (
            <Stack.Screen name="MainStack" component={DrawerNavigator} />
          ) : (
            <Stack.Group>
              <Stack.Screen name="Login" component={LoginScreen}  />
              <Stack.Screen name="SignUp" component={SignUpScreen}  /> 
              <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen}  /> 
              <Stack.Screen name="UserName" component={UserNameScreen} />
              
            </Stack.Group>
          )}
        </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
};

export default YourApp;
