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

export const HomeFeedContainer = (props) => {
  const navigation = useNavigation();
    return (
      <View1 onPress={() => navigation.navigate('PostDetails', props)}>
        <HomeFeedImageContainer 
          {...props}
        />
        <HomeFeedBelowImage 
          style={{
          }}
        />
      </View1>
    )
}

const View1 = styled.TouchableOpacity`
  position: relative;
  height: auto;
  max-height: 300px;
  max-width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: stretch;
`;
//box-sizing: border-box;
//background-color: black;
//border: 1px solid white;


export default HomeFeedContainer;