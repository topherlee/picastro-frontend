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
          <ImageBackground 
            //source={{uri:"https://file.rendit.io/n/nPzgPvxZ2JSAIkOomoXh.png"}}
            >
            <UserImage
              source={require('../../../assets/Sample/sampleuser2.png')}
              resizeMode="contain"
              style={styles.userImageFrame}
            />
            <UserName>Starman 2022</UserName>
          </ImageBackground>
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
  height: 173px;
  gap: 85.5px;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 116px 0px 0px 0px;
  background-size: cover;
  background-position: 50% 50%;
  background-blend-mode: ;
  border: 1px solid white;
`;
//box-sizing: border-box;
//background-color: black;

const View2 = styled.View`
  width: 183px;
  height: 122px;
  left: 0px;
  top: 0px;
  position: absolute;
  gap: 4.47px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 6.6px 8.38px;
  background-size: cover;
  background-image: url("../../../assets/Sample/Rectangle_9.png");
  border: 1px solid yellow;
`;
//box-sizing: border-box;
//background-color: grey;

const UserImage = styled.Image`
  position: relative;
  top: 10px;
  left: 10px;
  min-width: 0px;
  min-height: 0px;
  margin: 0px 0px 84.8px 0px;
`;
//box-sizing: border-box;
//background-color: green;

const UserName = styled.Text`
  position: relative;
  
  left: 60px;
  margin: 5.5px 0px 90.9px 0px;
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
  top: 123px;
  width: 182.76px;
  height: 57px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 1.55px 15.4px 1.55px 14.3px;
  border: 1px solid blue;
`;
//box-sizing: border-box;
//border-radius: 0px 0px 5px 5px;
//background-color: #2e2e2e;

const TextStarName = styled.Text`
position: absolute;
width: 94px;
height: 38.61px;
left: 29.75px;
top: 314.19px;

font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 11px;
line-height: 13px;

color: #7A7A7A;
border: 1px solid red;
`;
//background-color: red;

const TextStarNameShort = styled.Text`
  position: absolute;
  width: 94px;
  height: 38.61px;
  left: 29.75px;
  top: 314.19px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: bold;
  font-size: 11px;
  line-height: 13px;

  color: #7A7A7A;
  border: 1px solid green;
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

const StarIconWrapper = styled.View`
  position: absolute;
  width: 24.55px;
  height: 24.55px;
  left: 158.26px;
  top: 316.23px;
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