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
    TouchableOpacity
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import styled from 'styled-components';

import { HomeFeedImageContainer, HomeFeedBelowImage } from '../../molecules';

export const HomeFeedContainer = () => {
  const navigation = useNavigation();  
    return (
      <View1 onPress={() => navigation.navigate('PostDetails')}>
        <HomeFeedImageContainer />
        <HomeFeedBelowImage />
      </View1>
    )
}

const View1 = styled.TouchableOpacity`
  position: relative;
  height: 185px;
  
  display: flex;
  flex-direction: column;
  
  justify-content: flex-start;
  align-items: flex-start;
  
`;
//box-sizing: border-box;
//background-color: black;
//border: 1px solid white;


export default HomeFeedContainer;