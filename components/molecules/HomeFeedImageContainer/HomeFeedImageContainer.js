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

import StarIcon from '../../../assets/Sample/star-icon.svg';

export const HomeFeedImageContainer = () => {
    return (
      <View1>
        <View2>
          <AstroImage
            source={require('../../../assets/Sample/rectangle_9.png')}
            />
            <UserImage
              source={require('../../../assets/Sample/sampleuser2.png')}
              resizeMode="contain"
              style={styles.userImageFrame}
            />
            <UserName>Starman 2022</UserName>
        </View2>
        <View3>
          <TextStarNameShort>
            IC 443
          </TextStarNameShort>
          <TextStarName>
            Jellyfish Nebula
          </TextStarName>
          <StarIconWrapper>
            <StarIcon />
          </StarIconWrapper>
        </View3>
      </View1>
    )
}




const View1 = styled.View`
  grid-column: 2 / span 1;
  position: relative;
  height: 185px;
  
  display: flex;
  flex-direction: column;
  
  justify-content: flex-start;
  align-items: flex-start;
  border: 1px solid white;
`;
//box-sizing: border-box;
//background-color: black;

const View2 = styled.View`
  position: relative;
  
  border: 1px solid yellow;
`;
//box-sizing: border-box;
//background-color: grey;


const AstroImage = styled.Image`
  position: absolute;
  top: 0px;
  min-width: 0px;
  min-height: 0px;
  `;
const UserImage = styled.Image`
  position: absolute;
  
  left: 10px;
  min-width: 0px;
  min-height: 0px;
  
`;
//box-sizing: border-box;
//background-color: green;

const UserName = styled.Text`
  position: absolute;
  left: 60px;
  color: #fcfcfc;
  font-size: 10px;
  font-weight: 700;
  font-family: Inter;
  
`;
//box-sizing: border-box;
//background-color: green;
//border: 1px solid white;

const View3 = styled.View`
  position: relative;
  top: 120px;
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

const StarIconWrapper = styled.View`
  position: absolute;
  width: 24.55px;
  height: 24.55px;
  left: 150px;
  top: 18px;
`;
//box-sizing: border-box;


/* 





const ICJellyfishNebula1 = styled.div`
  width: 111.85%;
  height: 71.6%;
  margin: 15.3px 0px 0px 0px;
  color: #7a7a7a;
  font-size: 11px;
  font-weight: 700;
  font-family: Inter;
  box-sizing: border-box;
`;
const ICJellyfishNebula = styled.div`
  display: flex;
  color: #7a7a7a;
  font-size: 11px;
  font-weight: 400;
  font-family: Inter;
`;
const Star = styled.img`
  min-width: 0px;
  min-height: 0px;
  margin: 17.3px 0px 12px 0px;
  box-sizing: border-box;
`;
 */


const styles = StyleSheet.create({
  logo: {
      width: 75,
      height: 35,
      resizeMode: 'contain',
  },
  HomeFeedImageContainer: {
      //position: absolute,
      width: '182px',
      height: '172px',
      left: '15px',
      top: '181px',
      //position: relative,
      //gap: '85.5px',
      //display: flex,
      //flex-direction: column,
      //justify-content: flex-end,
      // align-items: flex-start,
      // padding: 116px 0px 0px 0px,
      // box-sizing: border-box,
      // background-size: cover,
      // background-position: 50% 50%,
      // background-blend-mode: ,
      // background-image: ,
  },
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
  starIcon: {
      //box-sizing: border-box,
      //position: absolute,
      width: 24,
      height: 24,
      left: 158,
      top: 316,
      //border: 1px solid #777474,
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