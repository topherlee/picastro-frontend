import React, { useContext, useState } from "react";
import {
    Image,
    Text,
    View,
    TouchableOpacity
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from "../../../context/AuthContext";
import globalStyling from "../../../../constants/globalStyling";
import { InCommentUserImage } from "../../atoms";


const CommentOutputContainer = (props) => {
    const navigation = useNavigation();
    // console.log("CommentOutputContainer", props)

    return (
        <View style={globalStyling.commentOutput}>
            <TouchableOpacity onPress={() => { navigation.push('UserScreen', {userId: props.commenter.id}) }}>
                <InCommentUserImage
                    userImageURL={{profileImage:"https://picastroapp.s3.eu-west-2.amazonaws.com/profileImages/sampleuserbig.png"}}
                />
            </TouchableOpacity>
            <View style={globalStyling.commentOutputContainer}> 
                <TouchableOpacity onPress={() => { navigation.push('UserScreen', {userId: props.commenter.id}) }}>
                        <Text style={globalStyling.commentOutputUserName}>
                            {props.commenter.username}
                        </Text>
                    </TouchableOpacity>
                <Text style={globalStyling.commentOutputCommentText}>
                    {props.comment_body}
                </Text>
            </View>

        </View>
    )
}

export default CommentOutputContainer;