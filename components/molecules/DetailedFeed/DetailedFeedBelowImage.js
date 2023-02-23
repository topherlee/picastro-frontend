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

const DetailedFeedBelowImage = props => (
    <View3>
        <TextStarNameShort>{props.astroNameShort}</TextStarNameShort>
        <TextStarName>{props.astroName}</TextStarName>
        <Text>This is a long paragraph about something something</Text>
        <StarIconView>
            <StarIcon />
        </StarIconView>
    </View3>
);

const View3 = styled.View`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  height: 100px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  background-color: #2e2e2e;
  border: 1px solid yellow;
`;
//
//border: 1px solid grey;

const TextStarNameShort = styled.Text`
  left: 15px;
  top: 10px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: bold;
  font-size: 11px;
  line-height: 13px;

  color: #7a7a7a;
`;

const TextStarName = styled.Text`
  width: 94px;
  top: 30px;
  left: 15px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 11px;
  line-height: 13px;

  color: #7a7a7a;
`;

const StarIconView = styled.View`
  display: flex;
  height: 100%;
  align-items: flex-end;
  justify-content: center;
  padding-right: 5%;
  border: 0px solid yellow;
`;

export default DetailedFeedBelowImage;
