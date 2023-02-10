// TO-DO Figure out how to properly show the burger button on the right side
// currently this works by dragging from the right side of the screen

import React from 'react';
import {
  createDrawerNavigator,
  DrawerToggleButton,
} from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';

const Drawer = createDrawerNavigator();

const screenOptionStyle = {
  drawerPosition: 'right',
  headerShown: false,
  headerLeft: false,
  headerRight: () => <DrawerToggleButton />,
  drawerStyle: {
    backgroundColor: '#2F2F2F',
  },
};

const DrawerNavigator = ({navigation}) => {
  return (
    <Drawer.Navigator screenOptions={screenOptionStyle}>
      <Drawer.Screen name="Main Screen" component={TabNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
