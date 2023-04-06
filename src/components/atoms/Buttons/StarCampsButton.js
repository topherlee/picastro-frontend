import React from "react";
import {
    View,
} from 'react-native';

import StarCampsIcon from '../../../assets/buttons/star-camps-button.svg';
import StarCampsIcon2 from '../../../assets/buttons/star-camps-button2.svg';


const StarCampsButton = () => (
    <View style={{
        alignItems: 'center',
        justifyContent: 'center',
        top: 0
    }}>
        <StarCampsIcon2 width={40} height={40} />
    </View>
);


export default StarCampsButton;