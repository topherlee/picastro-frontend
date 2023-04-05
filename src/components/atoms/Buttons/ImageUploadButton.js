import React from 'react';
import {
    View,
} from 'react-native';

import ImageUploadButtonSvg from '../../../assets/buttons/image-upload-button.svg';


const ImageUploadButton = () => {

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