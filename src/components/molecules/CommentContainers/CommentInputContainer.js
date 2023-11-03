import React, { useContext, useEffect, useState } from "react";
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from "react-native";

import { AuthContext } from "../../../context/AuthContext";
import { InCommentUserImage, SendButton } from "../../atoms";
import globalStyling from "../../../../constants/globalStyling";
import { commentPostAPICall } from "../../../utils";


const CommentInputContainer = ({currentUser, props}) => {
    const {
        token,
        fetchInstance
    } = useContext(AuthContext);
    const [comment, setComment] = useState('');

    const commentUrl = '/api/comments/';
    const requestMethod = 'POST';

    const placeholderTextColor = "grey";

    let commentBody = new FormData();
    commentBody.append("post", props.id)
    commentBody.append("commenter", currentUser.id)
    commentBody.append("comment_body", comment)

    // useEffect(() => {
    //     console.log("commentBody", commentBody)
    // }, [commentBody])


    return (
        <View style={globalStyling.commentInputContainer}>
            <InCommentUserImage
                userImageURL={currentUser}
            />
            <TextInput
                style={globalStyling.inputFieldText}
                placeholder="Write a comment"
                placeholderTextColor={placeholderTextColor}
                onChangeText={newComment => setComment(newComment)}
                // defaultValue={currentUser.first_name}
                // value={firstName}
                maxLength={20}
            />
            {/* <Text>Write a comment</Text> */}
            <TouchableOpacity
                onPress={() => {
                    commentPostAPICall(commentUrl, requestMethod, fetchInstance, token, commentBody)
                }} >
                <SendButton />
            </TouchableOpacity>

        </View>
    )
}


export default CommentInputContainer;