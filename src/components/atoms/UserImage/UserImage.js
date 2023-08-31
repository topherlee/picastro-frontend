import React, {useEffect} from 'react';
import {
    Image,
    StyleSheet,
} from 'react-native';


const UserImage = (userImageURL) => {

    useEffect(() => {
        console.log("imageURL", userImageURL.genderIdentifier)
    }, [userImageURL])

    return (
        <Image
            uri={userImageURL.userImageURL}
            resizeMode="contain"
        />
    )
}


export default UserImage;