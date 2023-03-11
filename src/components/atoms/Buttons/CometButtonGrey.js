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

import CometButtonGreySvg from '../../../assets/buttons/comet_button_grey.svg';


const CometButtonGrey = () => {

    const [modalVisible, setModalVisible] = useState(true);

    return (
        <View style={{
            alignItems: 'center',
            justifyContent: 'center',
            top: 0
        }}>
            <CometButtonGreySvg
                width={53}
                height={53}
            />
        </View>
    );
};


export default CometButtonGrey;