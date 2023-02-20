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

const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <HomeScreenHeader />

            <ScrollView 
                style={styles.scrollViewContainer}
                contentContainerStyle={contentContainerStyles}    
            >
                <HomeFeedContainer />
                <HomeFeedContainer />
                <HomeFeedContainer />
                <HomeFeedContainer />
                <HomeFeedContainer />
            </ScrollView>
        </SafeAreaView>
    )
}

const contentContainerStyles = {    //flex row for the homescreen layout
    display: "flex", 
    width: "100%", 
    flexDirection: "row", 
    flexWrap: "wrap",
    columnGap: 8,
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