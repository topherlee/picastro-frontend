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
        justifyContent: 'flex-start',
        top: 0,
        width: '72%',
        flexDirection: 'column',
        marginLeft: 25,
        paddingRight: 10,
    },
    textUserName: {
        fontSize: 21,
        fontWeight: 'bold',
        fontFamily: 'Inter',
        fontWeight: '700',
        color: 'white',
        textAlign: 'left',
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