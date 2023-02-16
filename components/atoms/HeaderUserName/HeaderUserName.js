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


const HeaderUserName = () => {
    return(
        <View style={styles.textContainer}>
            <Text style={styles.textUserName}>
                starboy32285
            </Text>
            <Text style={styles.textGenderIdentifier}>
                he/him
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
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
}); 

export default HeaderUserName;