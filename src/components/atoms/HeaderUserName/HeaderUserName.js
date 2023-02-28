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


const HeaderUserName = ({style}) => {
    return(
        <View style={style}>
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