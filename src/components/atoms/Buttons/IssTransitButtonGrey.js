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

import IssTransitButtonGreySvg from '../../../assets/buttons/iss_transit_button_grey.svg';


const IssTransitButtonGrey = () => {

    const [modalVisible, setModalVisible] = useState(true);

    return (
        <View style={{
            alignItems: 'center',
            
            top: 0
        }}>
            <IssTransitButtonGreySvg
                width={53}
                height={53}
            />
            <Text style={SortByModalButtonStyling.SortByModalText}>
                ISS Transit
            </Text>
        </View>
    );
};


export default IssTransitButtonGrey;