import React, { useState } from 'react';
import {
    StyleSheet,
    Button,
    View,
    SafeAreaView,
    Text,
    Alert,
    Image,
    TouchableOpacity
} from 'react-native';

import SortByModalButtonStyling from './SortByModalButtonStyling';

import AsterismsButtonGreySvg from '../../../assets/buttons/asterisms_button_grey.svg';


const AsterismsButtonGrey = () => {

    const [modalVisible, setModalVisible] = useState(true);

    return (
        <TouchableOpacity style={SortByModalButtonStyling.iconContainer}>
            <AsterismsButtonGreySvg
                width={53}
                height={53}
            />
            <Text style={SortByModalButtonStyling.SortByModalText}>
                Asterisms/ Constellations
            </Text>
        </TouchableOpacity>
    );
};


export default AsterismsButtonGrey;