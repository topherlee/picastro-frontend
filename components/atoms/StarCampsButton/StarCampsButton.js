import React from "react";
import {
    StyleSheet,
    Button,
    View,
    SafeAreaView,
    Text,
    Alert,
    Image,
  } from 'react-native';

import SVGImg from './star-camps-button.svg';


const StarCampsButton = () => (
    <View style={{
        alignItems: 'center',
        justifyContent: 'center',
        top: 0
        }}>
        <SVGImg width={25} height={25} /> 
    </View>
);


export default StarCampsButton;