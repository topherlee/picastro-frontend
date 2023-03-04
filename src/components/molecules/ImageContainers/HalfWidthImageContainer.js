import React, {useState} from 'react';
import {
    Button,
    Image,
    ImageBackground,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    ImageResolvedAssetSource
} from 'react-native';

import { AstroImageWrapper, AwardIcon } from '../../atoms';

import styled from 'styled-components';


export const HalfWidthImageContainer = (props) => {
  
    // const [contWidth, setContWidth] = useState(0);
    // const [contHeight, setContHeight] = useState(0);

    return (
      <View2>
        <AstroImageWrapper 
          {...props}
        />
        <UserImage
          source={require('../../../assets/Sample/sampleuser2.png')}
          resizeMode="contain"
        />
        <UserName>{props.userName}</UserName>
        <AwardIconWrapper>
          <AwardIcon {...props} />
        </AwardIconWrapper>
      </View2>
    )
}

const View2 = styled.View`
  position: relative;
  width: 98%;
  `;
//box-sizing: border-box;
//background-color: grey;
//border: 1px solid yellow;


const UserImage = styled.Image`
  position: absolute;
  top: 7px;
  left: 10px;
  min-width: 0px;
  width: 27px;
  min-height: 0px;
`;
//box-sizing: border-box;
//background-color: green;

const UserName = styled.Text`
  position: absolute;
  top: 11px;
  left: 40px;
  color: #fcfcfc;
  font-size: 10px;
  font-weight: 700;
  font-family: Inter;  
`;
//box-sizing: border-box;
//background-color: green;
//border: 1px solid white;

const AwardIconWrapper = styled.View`
  position: absolute;
  width: 10%;
  height: 25px;
  top: 9px;
  right: 10px;
  color: #fcfcfc;
  font-size: 10px;
  font-weight: 700;
  font-family: Inter;
`;


export default HalfWidthImageContainer;