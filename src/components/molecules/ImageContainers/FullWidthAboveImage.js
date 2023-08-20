import React, {useContext} from 'react';
import {
  View,
  Alert,
  Image,
  ActionSheetIOS
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styled from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../../context/AuthContext';


const FullWidthAboveImage = ({props}) => {
  const navigation = useNavigation();
  const { fetchInstance, token, currentUser } = useContext(AuthContext);
  
  const deletePost = async (id)=> {
    try {
      var {response, data} = await fetchInstance(`/api/feed/${props.id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Token ${token.access}`,
          'Content-Type': 'application/json'
        }
      })
      return {response, data}
    } catch (err) {
      console.log(err)
    }
  }

  const onPress = ()=> {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: currentUser.username === props.poster.username ? ['Cancel', 'Edit Post', 'Delete Post'] : ['Cancel', 'Placeholder'],
        destructiveButtonIndex: 2,
        cancelButtonIndex: 0,
        userInterfaceStyle: 'dark',
      },
      buttonIndex => {
        if (buttonIndex === 0) {
          // cancel action
        } else if (buttonIndex === 1) {
          Alert.alert('Oops not working yet! Check back later...')
        } else if (buttonIndex === 2) {   //delete post button
          Alert.alert('Delete Post?', 'This post will be permanently deleted.', [
            {
              text: 'Cancel',
              onPress: () => console.log('Delete Cancelled'),
              style: 'cancel',
            },
            {
              text: 'Delete', 
              onPress: () => {
                deletePost(props.id).then(({response,data}) => {
                  if (response.ok) {
                    Alert.alert("Delete Successful", "This post has been successfully deleted.", 
                    [{text: 'OK', onPress: () => navigation.goBack()}])
                  } else {
                    Alert.alert("Delete Failed", "Please try again later.",)
                  }
                })
                console.log('OK Pressed')
              }
            },
          ]);
        }
      },
    );
  }

  var source = Image.resolveAssetSource(require('../../../assets/Sample/sampleuserbig.png'))//props.imageURL);
  ratio = (source.width / source.height);
  return (
    <Banner>
      <UserImage
        source={source}
        resizeMode="contain"
        style={{
          aspectRatio: ratio,
          width: "15%",
          height: 'auto',
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
      />
      <NameBanner>
        <View>
          <UsernameText>{props.poster.username}</UsernameText>
          <LocationText>{props.starCamp}</LocationText>
        </View>
      </NameBanner>
      <TouchableOpacity onPress={onPress}>
        <Icon name="dots-horizontal" size={40} color="lightgray" />
      </TouchableOpacity>
    </Banner>
)};

const Banner = styled.View`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 60px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: #2e2e2e;
`;

const NameBanner = styled.View`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
  width: 85%;
  height: 100%;
  padding: 3%;
`;

const UsernameText = styled.Text`
  color: #7a7a7a;
  font-weight: bold;
  font-size: 18px;
`

const LocationText = styled.Text`
  color: #7a7a7a;
`

const UserImage = styled.Image`
  width: 100%;
  max-height: 100%;
`;

export default FullWidthAboveImage;
