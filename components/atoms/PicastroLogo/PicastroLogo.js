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
                source={require('../../../assets/buttons/burger-button.png')}
                resizeMode="contain"
                style={styles.PicastroLogo}
            />
    )
}

const styles = StyleSheet.create({
    PicastroLogo: {
        width: 30,
        height: 30,
        right: 10,
    }
})

export default PicastroLogo;