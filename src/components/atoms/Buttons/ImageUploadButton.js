import React from 'react';
import {
    View,
} from 'react-native';

import ImageUploadButtonSvg from '../../../assets/buttons/image-upload-button.svg';
import globalStyling from '../../../../constants/globalStyling';

const ImageUploadButton = ({ focused }) => {

    return (
        <View style={{
            alignItems: 'center',
            justifyContent: 'center',
            top: 0
        }}>
            <ImageUploadButtonSvg
                stroke={focused ? "#ffffff" : ""}
                style={globalStyling.NavBarButton}
            />
        </View>
    );
};


export default ImageUploadButton;