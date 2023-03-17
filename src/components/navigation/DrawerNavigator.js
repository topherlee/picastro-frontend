// TO-DO Figure out how to properly show the burger button on the right side
// currently this works by dragging from the right side of the screen

import React from 'react';
import {
  createDrawerNavigator,
  DrawerToggleButton,
} from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import LogoutScreen from '../../screens/SigninScreen/LogoutScreen';


const Drawer = createDrawerNavigator();

const screenOptionStyle = {
  drawerPosition: 'right',
  headerShown: false,
  headerLeft: false,
  headerRight: () => <DrawerToggleButton />,
  drawerStyle: {
    backgroundColor:  '#ffffe0',
    width: '90%'
  },
  drawerType: "front",
  
};



const DrawerNavigator = ({navigation}) => {
  return (
      
      <Drawer.Navigator screenOptions={screenOptionStyle}>
        <Drawer.Screen name="Main Screen" component={TabNavigator} />
        <Drawer.Screen name="Log Out" component={LogoutScreen} />
      </Drawer.Navigator>
    
  );
};

export default DrawerNavigator;
