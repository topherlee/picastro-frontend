import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigator from './DrawerNavigator';
import { ForgotPasswordScreen, LoginScreen, SignUpScreen, VerificationScreen, UserNameScreen, LogoutScreen} from '../../screens/SigninScreen';
import { AuthContext } from '../../context/AuthContext';


const Stack = createStackNavigator();

const OnboardingNavigator = () => {
    const {
      isSignedIn,
      validSubscription
    } = useContext(AuthContext);
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
          {/* if isSignedIn, then use the drawer navigator, otherwise render the login screen */}
          {isSignedIn && validSubscription ? (
            <Stack.Screen name="MainStack" component={DrawerNavigator} />
          
          ) : (
            <Stack.Group>
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="SignUp" component={SignUpScreen} /> 
              <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} /> 
              <Stack.Screen name="UserName" component={UserNameScreen} />
              <Stack.Screen name="Verify" component={VerificationScreen} />
              
            </Stack.Group>
          )}
        </Stack.Navigator>
  )
}

export default OnboardingNavigator