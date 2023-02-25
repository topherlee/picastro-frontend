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
import { DetailedFeedAboveImage, DetailedFeedBelowImage, DetailedFeedImage } from '../../molecules';

export const HomeFeedContainer = (props) => {
  console.log("prop",props)
  const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <DetailedFeedAboveImage {...props} />
            <View1>
                <DetailedFeedImage
                {...props}  
                />
            </View1>
            <DetailedFeedBelowImage {...props} />
        </View>
    )
}

const View1 = styled.TouchableOpacity`

`;

const styles = StyleSheet.create({
    container: {
        marginVertical: "2%",
        borderWidth: 0, 
        borderColor: "red",
        flex: 1,
    }
})

export default HomeFeedContainer;