import React from 'react';
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
} from 'react-native';

import styled from 'styled-components';


export const HomeFeedImageContainer = () => {
    return (
      <View2>
        <AstroImage
          source={require('../../../assets/Sample/rectangle_9.png')}
        />
        <UserImage
          source={require('../../../assets/Sample/sampleuser2.png')}
          resizeMode="contain"
        />
        <UserName>Starman 2022</UserName>
      </View2>
    )
}

const View2 = styled.View`
  position: relative;
  `;
//box-sizing: border-box;
//background-color: grey;
//border: 1px solid yellow;


const AstroImage = styled.Image`
  position: absolute;
  top: 0px;
  min-width: 0px;
  min-height: 0px;
  `;
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

const styles = StyleSheet.create({
  userImageFrame: {
      //position: absolute,
      width: 24,
      height: 24,
      left: 23,
      top: 188,
      //background: url(image.png);
      //border: 3px solid #FDD015;

      //min-width: 0px;
      //min-height: 0px;
      //margin: 0px 0px 84.8px 0px;
      //box-sizing: border-box;
  },
  userName: {
      //"position": "absolute",
      left: '12%',
      right: '52%',
      top: '22%',
      bottom: '76%',
      fontFamily: 'Inter',
      fontSize: 10,
      fontWeight: 'normal',
      fontWeight: '700',
      color: '#FDFDFD',
      //line-height: '12px',
  },
})

export default HomeFeedImageContainer;