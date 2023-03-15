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

import TelescopeButtonSvg from '../../../assets/buttons/telescope-button.svg';


const TelescopeButton = () => {

    const [modalVisible, setModalVisible] = useState(true);

    return (
        <View style={{
            alignItems: 'center',
            justifyContent: 'center',
            top: 0
        }}>
            <TelescopeButtonSvg
                width={40}
                height={40}
                
            />
        </View>
    );
};


export default TelescopeButton;