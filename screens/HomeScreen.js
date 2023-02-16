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

            <ScrollView>
                <Button
                    title='Go to Post Details'
                    onPress={() => navigation.navigate('PostDetails')}
                />
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