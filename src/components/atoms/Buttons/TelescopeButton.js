import React, { useContext } from 'react';
import {
    View,
} from 'react-native';

import TelescopeButtonSvg from '../../../assets/buttons/telescope-button.svg';


const TelescopeButton = () => {
    
    return (
        <View style={{
            alignItems: 'center',
            justifyContent: 'center',
            top: 0
        }}>
            <TelescopeButtonSvg
                width={40}
                height={40}
            />
        </View>
    );
};


export default TelescopeButton;