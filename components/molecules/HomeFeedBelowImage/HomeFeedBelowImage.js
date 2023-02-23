import React from "react";
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

import { StarIcon } from "../../atoms";


const HomeFeedBelowImage = () => (
    <View3>
      <TextStarNameShort>
        IC 443
      </TextStarNameShort>
      <TextStarName>
        Jellyfish Nebula
      </TextStarName>
      <StarIconView>
        <StarIcon />
      </StarIconView>
    </View3>
);

const View3 = styled.View`
  width: 182.76px;
  height: 57px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  background-color: #2e2e2e;
`;
//
//border: 1px solid grey;

const TextStarNameShort = styled.Text`
  position: absolute;
  left: 15px;
  top: 10px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: bold;
  font-size: 11px;
  line-height: 13px;

  color: #7A7A7A;
  
`;
//box-sizing: border-box;
//background-color: white;
// width: 111.85%;
// height: 71.6%;
// margin: 15.3px 0px 0px 0px;
// color: #7a7a7a;
// font-size: 11px;
// font-weight: 700;
// font-family: Inter;
// border: 1px solid green;

const TextStarName = styled.Text`
position: absolute;
width: 94px;
top: 30px;
left: 15px;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 11px;
line-height: 13px;

color: #7A7A7A;
`;
//background-color: red;
//border: 1px solid red;

const StarIconView = styled.View`
  display: flex;
  height: 100%;
  align-items: flex-end;
  justify-content: center;
  padding-right: 5%;
  border: 0px solid yellow;
`;

export default HomeFeedBelowImage;