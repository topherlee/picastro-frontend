import React from "react";
import {
    View,
    Image,
    Text
} from 'react-native';
import { useIsFocused } from '@react-navigation/native';

import globalStyling from "../../../../constants/globalStyling";
import HomeButtonSvg from '../../../assets/buttons/home-button.svg';

const HomeButton = ({focused}) => {
    return (
    
        <View style={{
            alignItems: 'center',
            justifyContent: 'center',
            top: 0
        }}>

            <HomeButtonSvg style={globalStyling.NavBarButton} />
            {focused ? <Text style={globalStyling.SortByModalTextGrey}>focused</Text> : <Text style={globalStyling.SortByModalTextGrey}>not focused</Text>}
        </View>
    )
};

export default HomeButton;