import React from "react";
import {
    View,
} from 'react-native';

import StarCampsIcon from '../../../assets/buttons/star-camps-button.svg';
import StarCampsIcon2 from '../../../assets/buttons/star-camps-button2.svg';
import globalStyling from "../../../../constants/globalStyling";

const StarCampsButton = () => (
    <View style={{
        alignItems: 'center',
        justifyContent: 'center',
        top: 0
    }}>
        <StarCampsIcon2 style={globalStyling.NavBarButton} />
    </View>
);


export default StarCampsButton;