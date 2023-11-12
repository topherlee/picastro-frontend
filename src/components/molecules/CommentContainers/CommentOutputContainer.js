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
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime"; 
dayjs.extend(relativeTime); 


const CommentOutputContainer = (props) => {
    const navigation = useNavigation();
    
    return (
        <View style={globalStyling.commentOutput}>
            <TouchableOpacity
                onPress={() => {
                    navigation.push('UserScreen', {userId: props.commenter.id});
                }}>
                <InCommentUserImage
                    userImageURL={props.commenter.profileImage}
                />
            </TouchableOpacity>
            <View style={globalStyling.commentOutputContainer}>
                <View style={globalStyling.commentUsernameRow}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.push('UserScreen', {
                                userId: props.commenter.id,
                            });
                        }}>
                        <Text style={globalStyling.commentOutputUserName}>
                            {props.commenter.username}
                        </Text>
                    </TouchableOpacity>
                    <Text style={globalStyling.commentTimeStamp}>
                        {dayjs(props.date_added).fromNow()}
                    </Text>
                </View>
                <MoreOrLess
                    numberOfLines={4}
                    textStyle={{
                        color: '#7a7a7a',
                        fontWeight: 500,
                    }}
                    moreText="show more"
                    lessText="">
                    {props.comment_body}
                </MoreOrLess>
                {/* <Text style={globalStyling.commentOutputCommentText}>
                    {props.comment_body}
                </Text> */}
            </View>
        </View>
    );
}

export default CommentOutputContainer;