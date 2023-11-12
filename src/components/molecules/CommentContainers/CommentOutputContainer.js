import React from "react";
import {
    Text,
    View,
    TouchableOpacity
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import globalStyling from "../../../../constants/globalStyling";
import { InCommentUserImage } from "../../atoms";
import {MoreOrLess} from '@rntext/more-or-less';


const CommentOutputContainer = (props) => {
    const navigation = useNavigation();
    
    return (
        <View style={globalStyling.commentOutput}>
            <TouchableOpacity onPress={() => { navigation.push('UserScreen', {userId: props.commenter.id}) }}>
                <InCommentUserImage
                    userImageURL={props.commenter.profileImage}
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