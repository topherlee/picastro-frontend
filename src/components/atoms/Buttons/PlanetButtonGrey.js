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

import PlanetButtonGreySvg from '../../../assets/buttons/planet_button_grey.svg';


const PlanetButtonGrey = () => {

    const [modalVisible, setModalVisible] = useState(true);

    return (
        <View style={{
            alignItems: 'center',
            justifyContent: 'center',
            top: 0
        }}>
            <PlanetButtonGreySvg
                width={53}
                height={53}
                style={SortByModalButtonStyling.SortByModalSvg}
            />
            <Text style={SortByModalButtonStyling.SortByModalText}>
                Planets
            </Text>
        </View>
    );
};


export default PlanetButtonGrey;