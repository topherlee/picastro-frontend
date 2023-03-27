import { 
    View, 
    KeyboardAvoidingView,
    Text,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Image,
    Alert
} from 'react-native'
import { disallowScreenshot } from 'react-native-screen-capture';
import { useFocusEffect } from '@react-navigation/native';
import React, { useEffect } from 'react'
import styled from 'styled-components';
import { useHeaderHeight } from '@react-navigation/elements';
import { FullWidthPostsContainer } from '../components/organisms';

// const props = [
//     {
//         "imageURL": require('../assets/TestAstroImages/Element241.png'),
//         "astroNameShort": "IC441",
//         "astroNameShort2": "NGC 1234",
//         "astroNameShort3": "Omega",
//         "astroName": "Star #1",
//         "poster": "Starman",
//         "userImage": require('../assets/Sample/sampleuser2.png'),
//         "imageIsSaved": false,
//         "award": "gold",
//         "exposureTime": "6 hrs",
//         "moonPhase": "50%",
//         "cloudCoverage": "10%",
//         "bortle": "3",
//         "imageDescription": "The Omega Nebula, also known as the Swan Nebula, Checkmark Nebula, Lobster Nebula, and the Horseshoe Nebula is an H II region in the constellation Sagittarius. It was discovered by Philippe Loys de Chéseaux in 1745. Charles Messier catalogued it in 1764. ",
//         "starCamp": "Glasgow",
//         "leadingLight": false
//     },
//     {
//         "imageURL": require('../assets/TestAstroImages/Element3.png'),
//         "astroNameShort": "SS234",
//         "astroNameShort2": "NGC 5678",
//         "astroNameShort3": "Omega Nebula",
//         "astroName": "Star #2",
//         "poster": "Moonboy",
//         "userImage": require('../assets/Sample/sampleuser2.png'),
//         "imageIsSaved": false,
//         "award": "none",
//         "exposureTime": "6 hrs",
//         "moonPhase": "50%",
//         "cloudCoverage": "10%",
//         "bortle": "3",
//         "imageDescription": "A dark nebula or absorption nebula is a type of interstellar cloud, particularly molecular clouds, that is so dense that it obscures the visible wavelengths of light from objects behind it, such as background stars and emission or reflection nebulae. The extinction of the light is caused by interstellar dust grains located in the coldest, densest parts of molecular clouds. Clusters and large complexes of dark nebulae are associated with Giant Molecular Clouds. Isolated small dark nebulae are called Bok globules. Like other interstellar dust or material, things it obscures are only visible using radio waves in radio astronomy or infrared in infrared astronomy. ",
//         "starCamp": "Edinburgh",
//         "leadingLight": false
//     },
//     {
//         "imageURL": require('../assets/TestAstroImages/Element261.png'),
//         "astroNameShort": "DC420",
//         "astroName": "Star #3",
//         "poster": "Moongirl",
//         "userImage": require('../assets/Sample/sampleuser2.png'),
//         "imageIsSaved": false,
//         "award": "silver",
//         "exposureTime": "6 hrs",
//         "moonPhase": "50%",
//         "cloudCoverage": "10%",
//         "bortle": "3",
//         "imageDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//         "starCamp": "Aberdeen",
//         "leadingLight": false
//     },
// ]
var ratio;

const PostDetailsScreen = ({ route, navigation }) => {
    useFocusEffect(React.useCallback(()=>{
        disallowScreenshot(true);
        return () => {
            // reenable screenshots upon leaving screen
            disallowScreenshot(false);
        }
    }))
    const props = route.params;
    const headerHeight = useHeaderHeight();
  return (
    <SafeAreaView style={styles.container} >
        <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"} 
            style={{
                borderColor: "yellow",
                borderWidth: 0,
            }}
            keyboardVerticalOffset={headerHeight}
        >
            <ScrollView contentContainerStyle={containerstyle}>
                <View style={styles.feedView}>
                    <FullWidthPostsContainer props={props}  />
                    {/* {props.map((props, index) => (
                        <DetailedFeedContainer {...props} key={index} />
                    ))} */}
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
        </SafeAreaView>
  )
}

const containerstyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
    borderColor: "yellow",
    borderWidth: 0,
    paddingVertical: "3%",
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    feedView: {
        width: "93%",
        borderColor: "white",
        borderWidth: 0
    },
    text: {
        fontSize: 25,
        fontWeight: '500',
        color: 'red',
        textAlign: 'center'
    },
});  

export default PostDetailsScreen