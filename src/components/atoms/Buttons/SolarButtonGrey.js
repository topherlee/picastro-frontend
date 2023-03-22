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
import SolarButtonGreySvg from '../../../assets/buttons/solar_button_grey.svg';


const SolarButtonGrey = () => {

    const [modalVisible, setModalVisible] = useState(true);

    return (
        <View style={SortByModalButtonStyling.iconContainer}>
            <SolarButtonGreySvg
                width={53}
                height={53}
            />
            <Text style={SortByModalButtonStyling.SortByModalText}>
                Solar
            </Text>
        </View>
    );
};


export default SolarButtonGrey;