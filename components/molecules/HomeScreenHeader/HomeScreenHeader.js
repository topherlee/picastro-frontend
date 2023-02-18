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
import { PicastroLogo, UserImage, HeaderUserName } from '../../atoms';

const HomeScreenHeader = () => {
  return (
    <View style={styles.headerContainer}>
        <View>
            <UserImage />
        </View>
        <HeaderUserName />
        <View>
            <PicastroLogo />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: '#2F2F2F',
        left: '1%',
        top: 0,
        width: '96%',
        height: 60,
        alignContent: 'space-around',
        alignItems: 'center',
        //justifyContent: 'center',
        flexDirection: 'row',
        //flex: 1,
    },
    container: {
        //flex: 1,
        backgroundColor: 'black',
    },
    text: {
        fontSize: 25,
        fontWeight: '500',
        color: 'red',
        textAlign: 'center'
    },
    textContainer: {
        alignContent: 'flex-start',
        alignItems: 'center',
        justifyContent: 'flex-start',
        top: 0,
        width: '80%',
        flexDirection: 'column',
        //flex: 2,
    },
    textUserName: {
        fontSize: 21,
        fontWeight: 'bold',
        fontFamily: 'Inter',
        fontWeight: '700',
        color: 'white',
        textAlign: 'left',
        width: '72%',
        height: 30,
        //align-self: flex-end,
        //margin: 0 0 '5%' 0,
        position: 'absolute',
        left: '22%',
        right: '36%',
        top: '4.67%',
        bottom: '92%',
    },
    textGenderIdentifier: {
        fontSize: 12,
        fontFamily: 'Inter',
        fontWeight: '500',
        color: 'white',
        textAlign: 'left'
    },
    image: {
        width: "100%",
        height: 200
    },
    userImage: {
        width: 40,
        height: 40,
        left: 5,
        //flex: 1,
    },
    PicastroLogo: {
        width: 40,
        height: 40,
        right: 5,
    }
});  

export default HomeScreenHeader;
