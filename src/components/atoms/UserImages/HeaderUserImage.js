import React, {useEffect} from 'react';
import {
    Image,
    StyleSheet,
} from 'react-native';

import globalStyling from '../../../../constants/globalStyling';


const HeaderUserImage = ({userImageURL}) => {

    if (!userImageURL) {
        return <React.Fragment></React.Fragment>;
    } else { 
        return (
            <Image
                source={{
                    uri: userImageURL.profileImage, // + `?date=${new Date()}`,
                    cache: 'reload',
                }}
                style={globalStyling.headerUserImage}
                resizeMode="contain"
            />
        );
    }
}

export default HeaderUserImage;