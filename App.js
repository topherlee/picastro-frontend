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

import { LoginScreen } from './screens/SigninScreen';

const Stack = createStackNavigator();

export const AppContext = React.createContext({});

const YourApp = () => {
  const [isSignedIn, setIsSignedIn] = React.useState(false);
  const contextValue = React.useMemo(() => ({
    isSignedIn,
    setIsSignedIn
  }), [isSignedIn])

  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <AppContext.Provider value={contextValue}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {/* if isSignedIn, then use the drawer navigator, otherwise render the login screen */}
          {isSignedIn ? (
            <Stack.Screen name="MainStack" component={DrawerNavigator} />
          ) : (
            <Stack.Screen name="LoginStack" component={LoginScreen}  />
          )}
        </Stack.Navigator>
      </AppContext.Provider>
    </NavigationContainer>
  );
};

export default YourApp;
