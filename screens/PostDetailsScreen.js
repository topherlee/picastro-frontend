import { 
    View, 
    Text,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Image
} from 'react-native'

import React from 'react'
import styled from 'styled-components';
import { DetailedFeedContainer } from '../components/organisms';

const props = [
    {
        "imageURL": require('../assets/TestAstroImages/Element241.png'),
        "astroNameShort": "Test2",
        "astroName": "Test 2 Long",
        "userName": "Starman",
        "userImage": require('../assets/Sample/sampleuser2.png'),
        "imageIsSaved": false,
        "award": "gold",
        "exposureTime": "6 hrs",
        "moonPhase": "50%",
        "cloudCoverage": "10%",
        "bortle": "3",
        "imageDescription": "Lorem ipsum Tet 2 long",
        "starCamp": "Glasgow",
        "leadingLight": false
    },
    {
        "imageURL": require('../assets/TestAstroImages/Element3.png'),
        "astroNameShort": "Test2",
        "astroName": "Test 2 Long",
        "userName": "Starman",
        "userImage": require('../assets/Sample/sampleuser2.png'),
        "imageIsSaved": false,
        "award": "gold",
        "exposureTime": "6 hrs",
        "moonPhase": "50%",
        "cloudCoverage": "10%",
        "bortle": "3",
        "imageDescription": "Lorem ipsum Tet 2 long",
        "starCamp": "Glasgow",
        "leadingLight": false
    },
    {
        "imageURL": require('../assets/TestAstroImages/Element261.png'),
        "astroNameShort": "Test2",
        "astroName": "Test 2 Long",
        "userName": "Starman",
        "userImage": require('../assets/Sample/sampleuser2.png'),
        "imageIsSaved": false,
        "award": "gold",
        "exposureTime": "6 hrs",
        "moonPhase": "50%",
        "cloudCoverage": "10%",
        "bortle": "3",
        "imageDescription": "Lorem ipsum Tet 2 long",
        "starCamp": "Glasgow",
        "leadingLight": false
    },
]
var ratio;

const PostDetailsScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={containerstyle}>
                <View style={styles.feedView}>
                    {props.map((props, index) => (
                        <DetailedFeedContainer {...props} key={index} />
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
  )
}

const containerstyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    borderColor: "yellow",
    borderWidth: 0
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    feedView: {
        width: "93%",
        borderColor: "white",
        borderWidth: 1
    },
    text: {
        fontSize: 25,
        fontWeight: '500',
        color: 'red',
        textAlign: 'center'
    },
});  

export default PostDetailsScreen