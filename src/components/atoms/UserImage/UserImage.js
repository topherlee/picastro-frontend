import React, {useEffect} from 'react';
import {
    Image,
    StyleSheet,
} from 'react-native';

const UserImage = ({userImageURL}) => {

    if (!userImageURL) {
        return <React.Fragment></React.Fragment>;
    } else { 
        return (
            <Image
                source={{
                    uri: userImageURL.profileImage,
                }}
                style={{width: 50, height: 40}}
                resizeMode="contain"
            />
        )
    }
}

export default UserImage;