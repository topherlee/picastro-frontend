import React, { useState, useContext, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  FlatList,
} from 'react-native';
import styled from 'styled-components';
import { MoreOrLess } from "@rntext/more-or-less";

import { AuthContext } from '../../../context/AuthContext';
import { InCommentUserImage, SendButton } from "../../atoms"
import globalStyling from '../../../../constants/globalStyling';
import { StarIcon, AwardIcon } from '../../atoms';
import ExposureSvg from '../../../assets/buttons/icon-exposure.svg';
import MoonSvg from '../../../assets/buttons/icon-moonphase.svg';
import CloudSvg from '../../../assets/buttons/icon-cloud.svg';
import { CommentInputContainer, CommentOutputContainer } from '../index'
import { commentGetAPICall, commentPostAPICall } from '../../../utils';

const FullWidthBelowImage = ({ props }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [comments, setComments] = useState({});
  const {
    currentUser,
    fetchInstance,
    token
  } = useContext(AuthContext);

//   console.log("FullWidthBelowImage", props)
  const commentUrl = '/api/comments/' + props.id;
  const requestMethod = 'GET';

    useEffect(() => {
        if (modalVisible) {
            fetchComments();
        }
    }, [modalVisible])

//   let COMMENTS = [{id: 1, comment: "test comment 1v1.", commenter: "ich"}, {id: 2, comment: "test comment 2.", commenter: "du"}]
  const fetchComments = async () => {
    // console.log("COMMENTS", commentUrl, requestMethod)
    let comment = await commentGetAPICall(commentUrl, requestMethod, fetchInstance, token)
    // console.log(comment)
    setComments(comment);
  }

  return (
    <Container>
      <Row1>
        <AwardIconWrapper>
          <AwardIcon {...props} />
        </AwardIconWrapper>
        <StarNameWrapper>
          <TextStarName>{props.astroName}</TextStarName>
          <StarAliasWrapper>
            <TextStarNameShort>{props.astroNameShort}</TextStarNameShort>
            <TextStarNameShort>{props.astroNameShort2}</TextStarNameShort>
            <TextStarNameShort>{props.astroNameShort3}</TextStarNameShort>
          </StarAliasWrapper>
        </StarNameWrapper>
        <IconView>
          <StarIcon {...props} />
        </IconView>
      </Row1>

      <Row2>
        <IconView>
          <ExposureSvg /><LightText> {props.exposureTime}</LightText>
        </IconView>
        <IconView>
          <MoonSvg /><LightText> {props.moonPhase}</LightText>
        </IconView>
        <IconView>
          <CloudSvg /><LightText> {props.cloudCoverage}</LightText>
        </IconView>
        <Text style={{ color: "#7a7a7a", fontWeight: "bold" }}>BORTLE <Text style={{ color: "#FFC700", fontWeight: "bold" }}>{props.bortle}</Text></Text>
      </Row2>

      <MoreOrLess
        numberOfLines={3}
        textStyle={{
          color: "#7a7a7a",
          fontWeight: 500,
        }}
        containerStyle={{
          marginTop: "3%",
          width: "100%",
          paddingBottom: "4%",
          borderWidth: 0,
          borderColor: "yellow"
        }}
        textButtonStyle={{
          color: "#FFC700"
        }}
      >
        {props.imageDescription}
      </MoreOrLess>

          <TouchableOpacity onPress={() => { console.log('touch'); setModalVisible(true) }}>
            <View style={globalStyling.commentInputContainer} pointerEvents='none'>
                <InCommentUserImage
                    userImageURL={currentUser}
                />
                <TextInput
                    style={[globalStyling.inputFieldText, { height: 'auto', textAlign: 'left', marginHorizontal: 10 }]}
                    placeholder="Write a comment"
                    placeholderTextColor='grey'
                    />
                <SendButton />
            </View>
      </TouchableOpacity>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        presentationStyle="overFullScreen"
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <TouchableWithoutFeedback onPress={() => { ; setModalVisible(false) }}>
          <View style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'rgba(0,0,0,0.5)'
          }} />
        </TouchableWithoutFeedback>

        <View behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{
            backgroundColor: "black",
            position: "absolute",
            width: "100%",
            bottom: 1,
          }}
        >
            <FlatList
                style={{flex:1, height: 300}}
                contentContainerStyle={{ flexGrow: 1 }}
                data={comments}
                renderItem={({item}) => <CommentOutputContainer {...item} />}
                keyExtractor={item => item.id}
            />
          <View style={{
            backgroundColor: "black",
            width: "100%",
            paddingVertical: "4%",
            paddingHorizontal: "5%"
          }}>
            <CommentInputContainer
                currentUser={currentUser}
                onSendComment={fetchComments}
                props={props}/>
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
        </View>
      </Modal>
    </Container>
  )
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
  flex-direction: row;
  padding-vertical: 2%;
  border: 0px solid red;
`

const Row2 = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  padding-vertical: 2%;
  border: 0px solid red;
`

const CommentInputView = styled.View`
  background-color: white;
  margin-vertical: 3%;
  padding: 4%;
  border-radius: 10px;
`

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
`

const StarAliasWrapper = styled.View`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  border: 0px solid white;
`

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
  color: #FFC700;
`;

const IconView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border:0px solid yellow;
`;

const LightText = styled.Text`
  color: #7a7a7a;  
`


export default FullWidthBelowImage;
