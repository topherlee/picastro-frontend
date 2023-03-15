import React, { useState } from 'react';
import {
    StyleSheet,
    Button,
    View,
    SafeAreaView,
    Text,
    Alert,
    Image,
} from 'react-native';

import SortByModalButtonStyling from './SortByModalButtonStyling';

import CometButtonGreySvg from '../../../assets/buttons/comet_button_yellow.svg';


const CometButtonGrey = () => {

    const [modalVisible, setModalVisible] = useState(true);

    return (
        <View style={SortByModalButtonStyling.iconContainer}>
            <CometButtonGreySvg
                width={53}
                height={53}
            />
            <Text style={SortByModalButtonStyling.SortByModalText}>
                Comets
            </Text>
        </View>
    );
};


export default CometButtonGrey;