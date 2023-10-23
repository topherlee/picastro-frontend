import React from 'react';
import {
    Image,
    StyleSheet,
} from 'react-native';


const InCommentUserImage = ({userImageURL}) => {

    console.log("DefaultUserImage", userImageURL)

    if (!userImageURL) {
        return <React.Fragment></React.Fragment>;
    } else { 
        return (
            <Image
                source={{
                    uri: userImageURL.profileImage,
                }}
                style={styles.InCommentUserImage}
            />
        )
    }
}

const styles = StyleSheet.create({
    InCommentUserImage: {
        width: 33,
        height: 33,
        borderRadius: 7,
        resizeMode: 'contain',
    }
})

export default InCommentUserImage;