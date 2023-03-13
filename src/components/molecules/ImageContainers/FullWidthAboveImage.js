import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  Image,
} from 'react-native';

import styled from 'styled-components';

import {StarIcon} from '../../atoms';

const FullWidthAboveImage = ({props}) => {
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
    </Banner>
)};

const Banner = styled.View`
  display: flex;
  flex: 1;
  flex-direction: row;
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
//
//border: 1px solid grey;

export default FullWidthAboveImage;
