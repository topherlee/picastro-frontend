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
import Header from '../components/home/Header';

const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            {/* <Header /> */}
            <ScrollView>
                <Text style={styles.text}>
                    This is the home screen
                    {"\n"}
                    🥳🎉
                    {"\n"}
                    🥳🎉{"\n"}
                    🥳🎉{"\n"}
                    🥳🎉{"\n"}
                    🥳🎉{"\n"}
                    🥳🎉{"\n"}
                    🥳🎉{"\n"}
                    🥳🎉{"\n"}
                    🥳🎉{"\n"}
                    🥳🎉{"\n"}
                    🥳🎉{"\n"}
                    🥳🎉{"\n"}
                    🥳🎉{"\n"}
                    🥳🎉{"\n"}
                    🥳🎉{"\n"}
                    🥳🎉{"\n"}
                    🥳🎉{"\n"}
                    🥳🎉{"\n"}
                    🥳🎉{"\n"}
                    🥳🎉{"\n"}
                    🥳🎉{"\n"}
                    🥳🎉{"\n"}
                    🥳🎉{"\n"}
                    🥳🎉{"\n"}
                    🥳🎉{"\n"}
                    🥳🎉{"\n"}
                    🥳🎉{"\n"}
                    🥳🎉
                </Text>
                <Button
                    title='Go to Post Details'
                    onPress={() => navigation.navigate('PostDetails')}
                />
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