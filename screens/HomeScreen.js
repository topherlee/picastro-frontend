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

import { HomeScreenHeader } from '../components/molecules';
import { HomeFeedContainer } from '../components/organisms';

const props = [
    {
        "userName": "testperson",
        "imageURL": require('../assets/Sample/rectangle_9.png'),
    },
    {
        "userName": "starboy",
        "imageURL": require('../assets/Sample/test2.jpg'),
    },
    {
        "userName": "admin",
        "imageURL": require('../assets/TestAstroImages/Element1.png'),
    },
    {
        "userName": "stargirl",
        "imageURL": require('../assets/TestAstroImages/Element4.png'),
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
]

const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <HomeScreenHeader />

            <ScrollView
                style={styles.scrollViewContainer}
                contentContainerStyle={contentContainerStyles}
            >
                {props.map((props, index) => (
                    <HomeFeedContainer {...props} key={index} />
                ))}
                {/* <HomeFeedContainer {...props}/> */}
                {/* <HomeFeedContainer />
                <HomeFeedContainer />
                <HomeFeedContainer />
                <HomeFeedContainer /> */}
            </ScrollView>
        </SafeAreaView>
    )
}

const contentContainerStyles = {    //flex row for the homescreen layout
    display: "flex",
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    columnGap: 6,
    rowGap: 4,
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    scrollViewContainer: {
        flex: 2, // the number of columns you want to devide the screen into
        //marginHorizontal: "auto",
        width: '96%',
        left: '2%',
        right: '2%',
        paddingTop: '10%',
    },
    text: {
        fontSize: 25,
        fontWeight: '500',
        color: 'red',
        textAlign: 'center'
    },
    image: {
        width: "100%",
        height: 200
    }
});

export default HomeScreen;