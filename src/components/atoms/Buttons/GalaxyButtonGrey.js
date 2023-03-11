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

import GalaxyButtonGreySvg from '../../../assets/buttons/galaxy_button_grey.svg';


const GalaxyButtonGrey = () => {

    const [modalVisible, setModalVisible] = useState(true);

    return (
        <View style={{
            alignItems: 'center',
            justifyContent: 'center',
            top: 0
        }}>
            <GalaxyButtonGreySvg
                width={53}
                height={53}
            />
        </View>
    );
};


export default GalaxyButtonGrey;