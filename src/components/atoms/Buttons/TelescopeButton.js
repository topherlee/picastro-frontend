import React, { useContext } from 'react';
import {
    View,
} from 'react-native';

import TelescopeButtonSvg from '../../../assets/buttons/telescope-button.svg';
import globalStyling from '../../../../constants/globalStyling';

const TelescopeButton = () => {

    return (
        <View style={{
            alignItems: 'center',
            justifyContent: 'center',
            top: 0
        }}>
            <TelescopeButtonSvg
                style={globalStyling.NavBarButton}
            />
        </View>
    );
};


export default TelescopeButton;