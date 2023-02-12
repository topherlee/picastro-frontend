import React from "react";
import {
    StyleSheet,
    Button,
    View,
    SafeAreaView,
    Text,
    Alert,
    Image,
  } from 'react-native';


const HomeButton = () => (
    <View style={{
        alignItems: 'center',
        justifyContent: 'center',
        top: 0
        }}>
        <Image
            source={require('./home-button.png')}
            resizeMode="contain"
            style={{
                width: 25,
                height:25,
                //min-width: 0px,
                //min-height: 0px,
                //margin: 0px 4.78vw 1.35vw 0px,
                //tintColor: focused ? '#FFC700' : '#000000',
            }}
        />
    </View>
);
{/*
const HomeButton = () => (
    <SafeAreaView style={styles.container}>
        <View>
            <Button1
                title="Home-Button"
                onPress={() => Alert.alert('Simple Button pressed')}
            />
                <Image1
                    style={styles.tinyLogo}
                    source={require('./HomeButton.png')}
                />
        </View>
    </SafeAreaView>
); */}


export default HomeButton;