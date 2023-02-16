import React from 'react';
import {
    Button,
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';

import styled from 'styled-components';

import SVGImg1 from '../../../assets/Sample/star-icon.svg';

export const HomeFeedImageContainer = () => {
    return (
      <View>
        <View>
          <Image
            source={require('../../../assets/Sample/sampleuser2.png')}
            resizeMode="contain"
            style={styles.userImageFrame}
            />
          <Text style={styles.userName}>Starman 2022</Text>
        </View>
        <View>
          <TextStarNameShort>
            IC 443
          </TextStarNameShort>
          <TextStarName>
            Jellyfish Nebula
          </TextStarName>
          
          <SVGImg1
            style={styles.starIcon}
             />
        </View>
      </View>
    )
}


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


const TextStarName = styled.Text`
  display: flex;
  color: #7a7a7a;
  font-size: 11px;
  font-weight: 400;
  font-family: Inter;
`;

const TextStarNameShort = styled.Text`
  width: 111.85%;
  height: 71.6%;
  margin: 15.3px 0px 0px 0px;
  color: #7a7a7a;
  font-size: 11px;
  font-weight: 700;
  font-family: Inter;
`;


/* 
const ImageMoleculeRootRootRoot = styled.View`
  position: relative;
  gap: 85.5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 116px 0px 0px 0px;
  box-sizing: border-box;
  background-size: cover;
  background-position: 50% 50%;
  background-blend-mode: ;
  background-image: ;
`;
const Element1 = styled.div`
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
  box-sizing: border-box;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/nPzgPvxZ2JSAIkOomoXh.png");
`;
const Ellipse = styled.img`
  min-width: 0px;
  min-height: 0px;
  margin: 0px 0px 84.8px 0px;
  box-sizing: border-box;
`;
const Text1 = styled.div`
  margin: 5.5px 0px 90.9px 0px;
  color: #fcfcfc;
  font-size: 10px;
  font-weight: 700;
  font-family: Inter;
  box-sizing: border-box;
`;
const BlackRectangle = styled.div`
  width: 100.13%;
  position: relative;
  gap: 34.5px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 1.55px 15.4px 1.55px 14.3px;
  border-radius: 0px 0px 5px 5px;
  box-sizing: border-box;
  background-color: #2e2e2e;
`;
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
export default HomeFeedImageContainer;