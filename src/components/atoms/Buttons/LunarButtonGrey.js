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

import LunarButtonGreySvg from '../../../assets/buttons/lunar_button_grey.svg';


const LunarButtonGrey = () => {

    const [modalVisible, setModalVisible] = useState(true);

    return (
        <View style={SortByModalButtonStyling.iconContainer}>
            <LunarButtonGreySvg
                width={53}
                height={53}
            />
            <Text style={SortByModalButtonStyling.SortByModalText}>
                Lunar
            </Text>
        </View>
    );
};


export default LunarButtonGrey;