import React from 'react';
import {
    Image,
    StyleSheet,
} from 'react-native';
import globalStyling from '../../../../constants/globalStyling';


const InCommentUserImage = ({userImageURL}) => {
    console.log("InCommentUserImage", userImageURL)
    // console.log("InCommentUserImage", userImageURL.profileImage)

    if (!userImageURL) {
        return <React.Fragment></React.Fragment>;
    } else { 
        return (
            <Image
                source={{
                    uri: userImageURL.profileImage,
                }}
                style={globalStyling.InCommentUserImage}
            />
        )
    }
}


export default InCommentUserImage;