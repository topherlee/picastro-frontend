import React, {useRef, useContext} from 'react';
import {Animated, Text, View, TouchableOpacity} from 'react-native';
import {
    Swipeable,
    RectButton,
    BorderlessButton,
} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import globalStyling from '../../../../constants/globalStyling';
import {InCommentUserImage} from '../../atoms';
import {MoreOrLess} from '@rntext/more-or-less';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import {commentDeleteAPICall} from '../../../utils';
import {TouchableIcon} from '../../common';
import {AuthContext} from '../../../context/AuthContext';
dayjs.extend(relativeTime);

const CommentOutputContainer = ({onRemoveComment, ...props}) => {
    const {currentUser, fetchInstance, token} = useContext(AuthContext);
    const navigation = useNavigation();

    const ref = useRef();

    const renderRightActions = (progress, dragX) => {
        const scale = dragX.interpolate({
            inputRange: [-100, -50, 0],
            outputRange: [1, 1, 0],
            extrapolate: 'clamp',
        });

        return (
            <Animated.View
                style={{
                    borderWidth: 0,
                    borderColor: 'red',
                    display: 'flex',
                    alignItems: 'center',
                    alignContent: 'center',
                    alignSelf: 'center',
                    flexDirection: 'row',
                    gap: 10,
                    marginVertical: '2%',
                    height: '89%',
                    backgroundColor: '#2e2e2e',
                    transform: [{scale}],
                }}>
                <TouchableIcon
                    onPress={async () => {
                        var deleted = await commentDeleteAPICall(
                            fetchInstance,
                            token,
                            props.id,
                        );
                        if (deleted) {
                            onRemoveComment(props.id);
                        }
                    }}
                    name="trash-can-outline"
                    color={'red'}
                    size={30}
                />
                <TouchableIcon
                    name="cancel"
                    color={'white'}
                    size={30}
                    onPress={() => {
                        ref.current?.close();
                    }}
                />
            </Animated.View>
        );
    };

    return (
        <Swipeable
            containerStyle={{
                overflow: 'auto',
                borderWidth: 0,
                borderColor: 'green',
            }}
            onSwipeableOpen={(_, swipeable) => (ref.current = swipeable)}
            renderRightActions={renderRightActions}>
            <View style={globalStyling.commentOutput}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.push('UserScreen', {
                            userId: props.commenter.id,
                        });
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
        </Swipeable>
    );
};

export default CommentOutputContainer;
