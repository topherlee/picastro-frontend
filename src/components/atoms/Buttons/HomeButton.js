import React from "react";
import {
    View,
    Image,
} from 'react-native';

import globalStyling from "../../../../constants/globalStyling";
import HomeButtonSvg from '../../../assets/buttons/home-button.svg';

const HomeButton = () => (
    <View style={{
        alignItems: 'center',
        justifyContent: 'center',
        top: 0
    }}>
        <HomeButtonSvg style={globalStyling.NavBarButton}/>
        {/* <Image
            source={require('../../../assets/buttons/home-button.png')}
            resizeMode="contain"
            style={globalStyling.NavBarButton}
        /> */}
    </View>
);

export default HomeButton;