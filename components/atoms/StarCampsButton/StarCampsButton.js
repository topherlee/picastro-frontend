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


const StarCampsButton = () => (
    <View style={{
        alignItems: 'center',
        justifyContent: 'center',
        top: 0
        }}>
        <Image
            source={require('./home-button.png')}
            resizeMode="contain"
            style={{
                width: 25,
                height:25,
                //tintColor: focused ? '#FFC700' : '#000000',
            }}
        />
    </View>
);


export default StarCampsButton;