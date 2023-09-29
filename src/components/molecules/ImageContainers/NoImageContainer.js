import React, { useContext, useState } from 'react';
import {
  View,
  Alert,
  Image,
  ActionSheetIOS,
  Platform,
  Text,
  TouchableOpacity
} from 'react-native';

import KatherineJohnson from '../../../assets/images/Group_34828.png';
import globalStyling from '../../../../constants/globalStyling';


const NoImage = ({ props }) => {
  
  return (
    <View style={globalStyling.container}>
        <Text>
            Oops!
        </Text>
        <KatherineJohnson resizeMode="contain" />
    </View>
  )
};


export default NoImage;
