import React from 'react';
import {
    Image,
    StyleSheet,
} from 'react-native';


const UserImage = () => {
    return(
        <Image
                source={require('../../../assets/Sample/sampleuser.png')}
                resizeMode="contain"
        />
    )
}

const styles = StyleSheet.create({
    userImage: {
        width: 40,
        height: 40,
        left: 5,
        //flex: 1,
    },
}); 

export default UserImage;