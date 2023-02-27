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
  console.log("HFC", props)
  const navigation = useNavigation();
    return (
      <View1 onPress={() => navigation.navigate('PostDetails', props)}>
        <HomeFeedImageContainer 
          {...props}
        />
        <HomeFeedBelowImage 
          {...props}
          style={{
          }}
        />
      </View1>
    )
}

const View1 = styled.TouchableOpacity`
  position: relative;
  max-width: 200px;
  margin-bottom: 8%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: 0px solid white;
`;


export default HomeFeedContainer;