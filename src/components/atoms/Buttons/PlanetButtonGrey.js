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
            width: 100,
            height: 107,
            borderColor: 'white',
            borderWidth: 0,
            alignItems: 'center',
            gap: 5,
            top: 30
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