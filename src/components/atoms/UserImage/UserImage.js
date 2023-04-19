import React from 'react';
import {
    Image,
    StyleSheet,
} from 'react-native';


const UserImage = () => {
    return (
        <Image
            source={require('../../../assets/Sample/sampleuser.png')}
            resizeMode="contain"
        />
    )
}


export default UserImage;