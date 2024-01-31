import React from 'react';
import {
    View,
    Image,
    StyleSheet,
} from 'react-native';

import globalStyling from '../../../../constants/globalStyling';
import SendButtonSvg from '../../../assets/buttons/send_button.svg';


const SendButton = () => {
    return (
        <View>
            <SendButtonSvg style={globalStyling.sendBtn} />
        </View>
    )
}

export default SendButton;