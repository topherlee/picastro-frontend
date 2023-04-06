import React from "react";
import {
    View,
    Image,
} from 'react-native';


const HomeButton = () => (
    <View style={{
        alignItems: 'center',
        justifyContent: 'center',
        top: 0
    }}>
        <Image
            source={require('../../../assets/buttons/home-button.png')}
            resizeMode="contain"
            style={{
                width: 40,
                height: 40,
            }}
        />
    </View>
);

export default HomeButton;