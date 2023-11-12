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


const CommentInputContainer = ({currentUser, onSendComment, setCommentsPage, scrollToTop, props}) => {
    const {
        token,
        fetchInstance
    } = useContext(AuthContext);
    const [comment, setComment] = useState('');

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
                style={[globalStyling.inputFieldText, { height: 'auto', textAlign: 'left', marginHorizontal: 10 }]}
                placeholder="Write a comment"
                placeholderTextColor={placeholderTextColor}
                defaultValue={comment}
                onChangeText={newComment => setComment(newComment)}
                multiline={true}
            />
            {/* <Text>Write a comment</Text> */}
            <TouchableOpacity
                onPress={() => {
                    commentPostAPICall(fetchInstance, token, commentBody, onSendComment, props.id)
                    setComment("")
                    scrollToTop()
                    setCommentsPage(2)      //reset comments page for query string url
                }} >
                <SendButton />
            </TouchableOpacity>

        </View>
    )
}


export default CommentInputContainer;