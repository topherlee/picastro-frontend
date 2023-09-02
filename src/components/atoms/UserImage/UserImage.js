import React, {useEffect} from 'react';
import {
    Image,
    StyleSheet,
} from 'react-native';

import globalStyling from '../../../../constants/globalStyling';


const UserImage = ({userImageURL}) => {

    if (!userImageURL) {
        return <React.Fragment></React.Fragment>;
    } else { 
        return (
            <Image
                source={{
                    uri: userImageURL.profileImage,
                }}
                style={globalStyling.userImage}
                resizeMode="contain"
            />
        )
    }
}

export default UserImage;