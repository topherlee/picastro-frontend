import React, {useContext, useState} from 'react';
import {
  View,
  Alert,
  Image,
  ActionSheetIOS,
  Platform,
  Text,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styled from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../../context/AuthContext';
import { BottomModal } from '../../common';
import { ImageOptionsView } from '../../atoms';


const FullWidthAboveImage = ({props}) => {
  const navigation = useNavigation();
  const { fetchInstance, token, setModalVisible, isModalVisible } = useContext(AuthContext);
  
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
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Icon name="dots-horizontal" size={40} color="lightgray" />
      </TouchableOpacity>
      
      {isModalVisible ? <BottomModal childrenText={"Image Options"} children={<ImageOptionsView props={props}/>} /> : <></>}
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
