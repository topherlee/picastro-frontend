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


const PicastroLogo = () => {
    return(
            <Image
                source={require('../../../assets/logo.png')}
                resizeMode="contain"
                style={styles.PicastroLogo}
            />
    )
}

const styles = StyleSheet.create({
    PicastroLogo: {
        width: 40,
        height: 40,
        right: 10,
    }
})

export default PicastroLogo;