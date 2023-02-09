import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View,
} from 'react-native';

const Header = () => {
    return(
        // <View style={styles.container}>
        <View>
            <Image 
                style={styles.logo}
                source={require('../../assets/logo.png')} 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'lightgray',
        padding: 10,
        marginBottom: 20
    },
    logo: {
        width: 75,
        height: 35,
        resizeMode: 'contain',
    }
})

export default Header;