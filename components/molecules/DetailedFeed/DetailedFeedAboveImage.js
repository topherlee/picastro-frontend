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

const DetailedFeedAboveImage = (props) => (
    <NameBanner>
      <View>
        <UsernameText>{props.userName}</UsernameText>
        <LocationText>{props.starCamp}</LocationText>
      </View>

    </NameBanner>
);

const NameBanner = styled.View`
  display: flex;
  flex: 1;
  flex-direction: row;
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: #2e2e2e;
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
//
//border: 1px solid grey;

export default DetailedFeedAboveImage;
