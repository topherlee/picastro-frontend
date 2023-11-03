import React, { useContext, useState } from "react";
import {
    Image,
    Text,
    View
} from "react-native";

import { AuthContext } from "../../../context/AuthContext";
import globalStyling from "../../../../constants/globalStyling";
import { InCommentUserImage } from "../../atoms";


const CommentOutputContainer = (props) => {
    
    console.log("CommentOutputContainer", props)

    return (
        <View style={globalStyling.commentOutputContainer}>
            <InCommentUserImage
                userImageURL={{profileImage:"https://picastroapp.s3.eu-west-2.amazonaws.com/profileImages/sampleuserbig.png"}}
            />
            <View>
                <Text style={globalStyling.commentOutputUserName}>
                    {props.commenter}
                </Text>
                <Text style={globalStyling.commentOutputCommentText}>
                    {props.comment}
                </Text>
            </View>

        </View>
    )
}

export default CommentOutputContainer;