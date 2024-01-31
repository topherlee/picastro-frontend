import React from 'react';
import {
    Image,
    StyleSheet,
} from 'react-native';


const DefaultUserImage = ({userImageURL}) => {
    if (!userImageURL) {
        return <React.Fragment></React.Fragment>;
    } else { 
        return (
            <Image
                source={{
                    uri: userImageURL.profileImage,
                    cache: 'reload'
                }}
                style={styles.userImage}
            />
        )
    }
}

const styles = StyleSheet.create({
    defaultUserImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    }
})

export default DefaultUserImage;