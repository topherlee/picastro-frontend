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

import { ImageResolvedAssetSource } from 'react-native';

import styled from 'styled-components';

var ratio;

export const HomeFeedImageContainer = (props) => {
  var source = Image.resolveAssetSource(props.imageURL);
  ratio = (source.width / source.height);
    return (
      <View2>
        <AstroImage
          source={props.imageURL}
          style={{
            aspectRatio: ratio,
            maxWidth: "100%",
            height: "auto",
          }}
          resizeMode="contain"
        />
        {console.log(source.width,source.height)}
        <UserImage
          source={require('../../../assets/Sample/sampleuser2.png')}
          resizeMode="contain"
        />
        <UserName>{props.userName}</UserName>
      </View2>
    )
}

const View2 = styled.View`
  position: relative;
  width: 184px;
  `;
//box-sizing: border-box;
//background-color: grey;
//border: 1px solid yellow;


const AstroImage = styled.Image`
  width: 100%;
  max-height: 100%;
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