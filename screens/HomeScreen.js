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
        "award": "bronze",
    },
    {
        "userName": "stargirl",
        "imageURL": require('../assets/TestAstroImages/Element4.png'),
        "award": "silver",
    },
    {
        userName: "starboy",
        imageURL: require('../assets/Sample/test2.jpg'),
        "award": "gold",
    },
    {
        userName: "Steffen",
        imageURL: require('../assets/TestAstroImages/Element1.png'),
    },
    {
        userName: "stargirl",
        imageURL: require('../assets/TestAstroImages/Element4.png'),
    },
    {
        userName: "testperson",
        imageURL: require('../assets/Sample/rectangle_9.png'),
    },
    {
        userName: "starboy",
        imageURL: require('../assets/Sample/test2.jpg'),
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
        "imageCategory":"Nebula",
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
            <ScrollView>
                <View style={contentContainerStyles}>
                    {props.map((props, index) => (
                        <HomeFeedContainer {...props} key={index} />
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const contentContainerStyles = {    //flex row for the homescreen
    flex: 2,    //how many columns
    display: "flex", 
    width: "100%", 
    flexDirection: "row", 
    flexWrap: "wrap",
    rowGap: 10,
    columnGap: 7,
    paddingTop: "10%",
    paddingBottom: "10%",
    justifyContent: "center"
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        display: 'flex',
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