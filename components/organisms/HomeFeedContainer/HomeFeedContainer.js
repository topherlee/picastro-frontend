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

import { HomeFeedImageContainer, HomeFeedBelowImage } from '../../molecules';

export const HomeFeedContainer = () => {
    return (
      <View1>
        <HomeFeedImageContainer />
        <HomeFeedBelowImage />
      </View1>
    )
}

const View1 = styled.View`
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