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


const HomeButton = () => (
    <View style={{
        alignItems: 'center',
        justifyContent: 'center',
        top: 0
        }}>
        <Image
            source={require('./home-button.png')}
            resizeMode="contain"
            style={{
                width: 40,
                height:40,
                //min-width: 0px,
                //min-height: 0px,
                //margin: 0px 4.78vw 1.35vw 0px,
                //tintColor: focused ? '#FFC700' : '#000000',
            }}
        />
    </View>
);

export default HomeButton;