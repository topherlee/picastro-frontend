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

import ImageUploadButtonSvg from '../../../assets/buttons/image-upload-button.svg';


const ImageUploadButton = () => {

    const [modalVisible, setModalVisible] = useState(true);

    return (
        <View style={{
            alignItems: 'center',
            justifyContent: 'center',
            top: 0
        }}>
            <ImageUploadButtonSvg
                width={40}
                height={40}
                
            />
        </View>
    );
};


export default ImageUploadButton;