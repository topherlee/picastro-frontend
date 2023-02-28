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
import { FullWidthAboveImage, FullWidthImage, FullWidthBelowImage } from '../../molecules';

export const FullWidthPostsContainer = ({props}) => {
  console.log("DFC",props)
  const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <FullWidthAboveImage props={props} />
            <View1>
                <FullWidthImage
                props={props}  
                />
            </View1>
            <FullWidthBelowImage props={props} />
        </View>
    )
}

const View1 = styled.TouchableOpacity`
    width: 100%;
`;

const styles = StyleSheet.create({
    container: {
        marginVertical: "2%",
        borderWidth: 0, 
        borderColor: "red",
        flex: 1,
    }
})

export default FullWidthPostsContainer;