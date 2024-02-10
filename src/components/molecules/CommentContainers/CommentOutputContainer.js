import React from "react";
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
import {TouchableIcon} from '../../common';
dayjs.extend(relativeTime);

const CommentOutputContainer = props => {
    const navigation = useNavigation();

    const renderRightActions = (progress, dragX) => {
        const scale = dragX.interpolate({
            inputRange: [-100, -50, 0],
            outputRange: [1, 1, 0],
            extrapolate: 'clamp',
        });

        return (
            <Animated.View
                style={[
                    // globalStyling.commentOutput,
                    {
                        borderWidth: 0,
                        borderColor: 'red',
                        display: 'flex',
                        alignItems: 'center',
                        alignContent: 'center',
                        alignSelf: 'center',
                        flexDirection: 'row',
                        gap: 10,
                        height: '100%',
                        backgroundColor: '#2e2e2e',
                        transform: [{scale}],
                    },
                ]}>
                <TouchableIcon
                    onPress={() => {
                        alert('YES');
                    }}
                    name="trash-can-outline"
                    color={'red'}
                    size={35}
                />
                <TouchableIcon
                    name="cancel"
                    color={'white'}
                    size={35}
                    onPress={() => {
                        alert('NO');
                    }}
                />
            </Animated.View>
        );
    };

    return (
        <Swipeable
            containerStyle={{overflow: 'auto'}}
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