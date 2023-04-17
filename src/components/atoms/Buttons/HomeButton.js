import React from "react";
import {
    View,
    Image,
} from 'react-native';

import globalStyling from "../../../../constants/globalStyling";


const HomeButton = () => (
    <View style={{
        alignItems: 'center',
        justifyContent: 'center',
        top: 0
    }}>
        <Image
            source={require('../../../assets/buttons/home-button.png')}
            resizeMode="contain"
            style={globalStyling.NavBarButton}
        />
    </View>
);

export default HomeButton;