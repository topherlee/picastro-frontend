import React, { useEffect } from 'react';
import {
    View,
} from 'react-native';

import globalStyling from '../../../../constants/globalStyling';
import DefaultUserImage from '../../atoms/UserImages/DefaultUserImage';

const HeaderUserImageContainer = ({ userImageURL }) => {
    
    return (
        <View style={globalStyling.headerUserImage}>
            <DefaultUserImage userImageURL={userImageURL} />
        </View>
    )
}

export default HeaderUserImageContainer;