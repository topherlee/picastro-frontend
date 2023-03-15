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

import GalaxyButtonGreySvg from '../../../assets/buttons/galaxy_button_grey.svg';


const GalaxyButtonGrey = () => {

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
            <GalaxyButtonGreySvg
                width={53}
                height={53}
            />
            <Text style={SortByModalButtonStyling.SortByModalText}>
                Galaxies
            </Text>
        </View>
    );
};


export default GalaxyButtonGrey;