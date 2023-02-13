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


const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.text}>
                    This is the home screen
                </Text>
                <Button
                    title='Go to Post Details'
                    onPress={() => navigation.navigate('PostDetails')}
                />
                <Image 
                    style={styles.image}
                    resizeMode="contain"
                    source={require('../assets/test3.png')}
                />
                <Image 
                    style={styles.image}
                    resizeMode="contain"
                    source={require('../assets/test.jpg')}
                />
                <Image 
                    style={styles.image}
                    resizeMode="contain"
                    source={require('../assets/test2.jpg')}
                />
                <Image 
                    style={styles.image}
                    resizeMode="contain"
                    source={require('../assets/test2.jpg')}
                />
                <Image 
                    style={styles.image}
                    resizeMode="contain"
                    source={require('../assets/test2.jpg')}
                />
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