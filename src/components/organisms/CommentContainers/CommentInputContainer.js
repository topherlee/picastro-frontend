import React, { useContext, useState } from "react";
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from "react-native";

import { AuthContext } from "../../../context/AuthContext";
import { InCommentUserImage, SendButton } from "../../atoms";
import globalStyling from "../../../../constants/globalStyling";
import { commentPostAPICall } from "../../../utils";


const CommentInputContainer = (currentUser) => {
    const {
        token,
        fetchInstance
    } = useContext(AuthContext);
    const [comment, setComment] = useState('');

    const commentUrl = '/api/comments/';
    const requestMethod = 'POST';

    let commentBody = new FormData();
    commentBody.append("post", "2")
    commentBody.append("commenter", "4")
    commentBody.append("comment_body", "Test comment")


    return (
        <View style={globalStyling.commentInputContainer}>
            <InCommentUserImage
                userImageURL={currentUser}
            />
            <TextInput
                style={globalStyling.inputFieldText}
                placeholder="Write a comment"
                placeholderTextColor={placeholderTextColor}
                onChangeText={newFirstName => setFirstName(newFirstName)}
                // defaultValue={currentUser.first_name}
                value={firstName}
                maxLength={20}
            />
            {/* <Text>Write a comment</Text> */}
            <TouchableOpacity
                onPress={() => {
                    commentPostAPICall(commentUrl, requestMethod, fetchInstance, token, commentBody)
                    // setSearchAndFilterUrl('imageCategory=iss_transit');
                    // console.log(
                    //     'searchAndFilterUrl iss',
                    //     searchAndFilterUrl,
                    // );
                    // setModalVisible(!isModalVisible);
                    // setCurrentPage(1);
                }} >
                <SendButton />
            </TouchableOpacity>

        </View>
    )
}


export default CommentInputContainer;