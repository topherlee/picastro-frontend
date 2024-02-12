import React, {useState, useContext, useEffect, useRef} from 'react';
import {
    View,
    Text,
    TextInput,
    Modal,
    TouchableOpacity,
    TouchableWithoutFeedback,
    FlatList,
    KeyboardAvoidingView,
} from 'react-native';
import styled from 'styled-components';
import {MoreOrLess} from '@rntext/more-or-less';

import {AuthContext} from '../../../context/AuthContext';
import {InCommentUserImage, SendButton} from '../../atoms';
import globalStyling from '../../../../constants/globalStyling';
import {StarIcon, AwardIcon} from '../../atoms';
import ExposureSvg from '../../../assets/buttons/icon-exposure.svg';
import MoonSvg from '../../../assets/buttons/icon-moonphase.svg';
import CloudSvg from '../../../assets/buttons/icon-cloud.svg';
import {
    CommentInputContainer,
    CommentOutputContainer,
    CommentContainer,
} from '../index';
import {commentGetAPICall, commentPostAPICall, fetchMore} from '../../../utils';
import {useNavigation} from '@react-navigation/native';

const FullWidthBelowImage = ({props}) => {
    const navigation = useNavigation();
    const commentList = useRef(null);
    const [commentsRefreshing, setCommentsRefreshing] = useState(false);
    const [isCommentsLoading, setIsCommentsLoading] = useState(false);
    const [nextComments, setNextComments] = useState(null);
    const [retry, setRetry] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);
    const [comments, setComments] = useState([]);
    const [commentsPage, setCommentsPage] = useState(2);
    const {currentUser, fetchInstance, token} = useContext(AuthContext);

    const toggleModal = show => {
        setModalVisible(show);
        setCommentsPage(2);
    };

    const removeCommentRow = id => {
        const newComments = comments.filter(comment => comment.id !== id);
        setComments(newComments);
    };

    const addCommentRow = comment => {
        setComments(oldComments => [comment, ...oldComments]);
    };

    const scrollToTop = () => {
        if (comments.length > 0)
            commentList.current.scrollToIndex({index: 0, animated: true});
    };

    const refreshComments = async () => {
        await fetchComments(props.id);
        setCommentsPage(2);
    };

    const fetchComments = async postId => {
        // console.log("COMMENTS", commentUrl, requestMethod)
        let comments = await commentGetAPICall(
            fetchInstance,
            token,
            postId,
            setNextComments,
        );
        // console.log(comments)
        setComments(comments);
        setCommentsRefreshing(false);
    };

    const fetchMoreComments = async () => {
        fetchMore(
            fetchInstance,
            token,
            props.id,
            commentsPage,
            setComments,
            nextComments,
            setNextComments,
            isCommentsLoading,
            setIsCommentsLoading,
            setCommentsPage,
        );
    };

    useEffect(() => {
        fetchComments(props.id);
        navigation.addListener('blur', () => {
            if (modalVisible) toggleModal(false);
        });
    }, [modalVisible, props.id]);

    return (
        <View>
            {/* Post Details Section */}
            <Container>
                <Row1>
                    {props.award != 'None' ? (
                        <AwardIconWrapper>
                            <AwardIcon {...props} />
                        </AwardIconWrapper>
                    ) : (
                        <></>
                    )}
                    <StarNameWrapper>
                        <TextStarName>{props.astroName}</TextStarName>
                        <StarAliasWrapper>
                            <TextStarNameShort>
                                {props.astroNameShort}
                            </TextStarNameShort>
                            <TextStarNameShort>
                                {props.astroNameShort2}
                            </TextStarNameShort>
                            <TextStarNameShort>
                                {props.astroNameShort3}
                            </TextStarNameShort>
                        </StarAliasWrapper>
                    </StarNameWrapper>
                    <IconView>
                        <StarIcon {...props} />
                    </IconView>
                </Row1>

                <Row2>
                    <IconView>
                        <ExposureSvg />
                        <LightText> {props.exposureTime}</LightText>
                    </IconView>
                    <IconView>
                        <MoonSvg />
                        <LightText> {props.moonPhase}</LightText>
                    </IconView>
                    <IconView>
                        <CloudSvg />
                        <LightText> {props.cloudCoverage}</LightText>
                    </IconView>
                    <Text style={{color: '#7a7a7a', fontWeight: 'bold'}}>
                        BORTLE{' '}
                        <Text style={{color: '#FFC700', fontWeight: 'bold'}}>
                            {props.bortle}
                        </Text>
                    </Text>
                </Row2>

                <MoreOrLess
                    numberOfLines={3}
                    textStyle={{
                        color: '#7a7a7a',
                        fontWeight: 500,
                    }}
                    containerStyle={{
                        marginTop: '3%',
                        width: '100%',
                        paddingBottom: '4%',
                        borderWidth: 0,
                        borderColor: 'yellow',
                    }}
                    textButtonStyle={{
                        color: '#FFC700',
                    }}>
                    {props.imageDescription}
                </MoreOrLess>

                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                    presentationStyle="overFullScreen"
                    onRequestClose={() => {
                        setModalVisible(false);
                    }}>
                    <TouchableWithoutFeedback
                        onPress={() => {
                            toggleModal(false);
                        }}>
                        <View
                            style={{
                                position: 'absolute',
                                top: 0,
                                bottom: 0,
                                left: 0,
                                right: 0,
                                backgroundColor: 'rgba(0,0,0,0.5)',
                            }}
                        />
                    </TouchableWithoutFeedback>

                    <KeyboardAvoidingView
                        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                        style={{
                            backgroundColor: 'black',
                            position: 'absolute',
                            width: '100%',
                            bottom: 1,
                        }}>
                        <CommentContainer
                            ref={commentList}
                            comments={comments}
                            nextComments={nextComments}
                            fetchMoreComments={fetchMoreComments}
                            onRemoveComment={removeCommentRow}
                            refreshComments={refreshComments}
                            refreshing={commentsRefreshing}
                            postOwner={props.poster.id} //to notify that the post owner can delete any comments
                        />
                        <View
                            style={{
                                backgroundColor: 'black',
                                width: '100%',
                                paddingVertical: '4%',
                                paddingHorizontal: '5%',
                            }}>
                            <CommentInputContainer
                                currentUser={currentUser}
                                onSendComment={addCommentRow}
                                setCommentsPage={setCommentsPage}
                                scrollToTop={scrollToTop}
                                props={props}
                            />
                            {/* <TextInput
                    multiline={true}
                    textAlignVertical="top"
                    placeholder="Write a comment"
                    placeholderTextColor="black"
                    autoFocus={true}
                    style={{
                        backgroundColor: "white",
                        width: "100%",
                        minHeight: 50,
                        maxHeight: 150,
                        paddingHorizontal: "3%",
                        paddingVertical: "4%",
                        borderRadius: 10,
                    }}
                    /> */}
                        </View>
                    </KeyboardAvoidingView>
                </Modal>
            </Container>
            {/* Comments Section */}
            <View style={{marginVertical: 10}}>
                {comments.slice(0, 3).map(comment => {
                    return (
                        <CommentOutputContainer
                            key={comment.id}
                            {...comment}
                            onRemoveComment={removeCommentRow}
                            postOwner={props.poster.id} //to notify that the post owner can delete any comments
                        />
                    );
                })}
                <TouchableOpacity
                    onPress={() => {
                        toggleModal(true);
                    }}>
                    {comments.length > 3 ? (
                        <View style={{margin: '2%', padding: '3%'}}>
                            <Text
                                style={{color: '#FFC700', fontWeight: 'bold'}}>
                                Load more comments
                            </Text>
                        </View>
                    ) : (
                        <></>
                    )}
                    <View
                        style={globalStyling.commentInputContainer}
                        pointerEvents="none">
                        <InCommentUserImage
                            userImageURL={currentUser?.profileImage}
                        />
                        <TextInput
                            style={[
                                globalStyling.inputFieldText,
                                {
                                    height: 'auto',
                                    textAlign: 'left',
                                    marginHorizontal: 10,
                                },
                            ]}
                            placeholder="Write a comment"
                            placeholderTextColor="grey"
                        />
                        <SendButton />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const Container = styled.View`
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 100%;
    padding: 4%;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    background-color: #2e2e2e;
    border: 0px solid yellow;
`;
//
//border: 1px solid grey;

const Row1 = styled.View`
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    padding-vertical: 2%;
    border: 0px solid red;
`;

const Row2 = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 95%;
    padding-vertical: 2%;
    border: 0px solid red;
`;

const CommentInputView = styled.View`
    background-color: white;
    margin-vertical: 3%;
    padding: 4%;
    border-radius: 10px;
`;

const AwardIconWrapper = styled.View`
  width: 10%;
  height: 50px;
  margin: 0 5% 2% 0
  color: #fcfcfc;
  font-size: 10px;
  font-weight: 700;
  font-family: Inter;
  border: 0px solid white;
`;

const StarNameWrapper = styled.View`
    width: 75%;
    border: 0px solid yellow;
`;

const StarAliasWrapper = styled.View`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: flex-start;
    border: 0px solid white;
`;

const TextStarName = styled.Text`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 29px;
    color: #ffffff;
`;

const TextStarNameShort = styled.Text`
    padding-right: 20px;
    font-family: 'Inter';
    font-weight: bold;
    font-size: 13px;
    color: #ffc700;
`;

const IconView = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: 0px solid yellow;
`;

const LightText = styled.Text`
    color: #7a7a7a;
`;

export default FullWidthBelowImage;
