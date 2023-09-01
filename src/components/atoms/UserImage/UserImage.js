import React, {useEffect} from 'react';
import {
    Image,
    StyleSheet,
} from 'react-native';


const UserImage = ({userImageURL}) => {

    useEffect(() => {
        console.log("imageURL", userImageURL.profileImage)
    }, [userImageURL])

    const imageURL = userImageURL.profileImage

    console.log("test")

    return (
        <Image
            source={{
                uri: imageURL,
            }}
            // source={userImageURL.profileImage}
            resizeMode="contain"
        />
    )
}

export default UserImage;