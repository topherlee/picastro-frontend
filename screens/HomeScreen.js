import React from 'react';
import {
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';
import Header from '../components/home/Header';

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <ScrollView>
                <Text style={styles.text}>
                    Working on android and ios now with app icons woop woop!!! 
                    {"\n"}
                    🥳🎉
                </Text>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    text: {
        fontSize: 25,
        fontWeight: '500',
        color: 'red',
        textAlign: 'center'
    },
});  

export default HomeScreen;