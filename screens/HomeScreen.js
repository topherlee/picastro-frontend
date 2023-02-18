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

import { HomeScreenHeader, HomeFeedImageContainer } from '../components/molecules';


const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <HomeScreenHeader />

            <ScrollView style={styles.scrollViewContainer}>
                <Button
                    title='Go to Post Details'
                    onPress={() => navigation.navigate('PostDetails')}
                />
                <HomeFeedImageContainer />
                <HomeFeedImageContainer />
                <HomeFeedImageContainer />
                <HomeFeedImageContainer />
                <HomeFeedImageContainer />
                <HomeFeedImageContainer />
                <HomeFeedImageContainer />
                <HomeFeedImageContainer />
                <HomeFeedImageContainer />
                <HomeFeedImageContainer />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    scrollViewContainer: {
        flex: 2, // the number of columns you want to devide the screen into
        marginHorizontal: "auto",
        width: '96%',
        left: '2%',
        //backgroundColor: "red"
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