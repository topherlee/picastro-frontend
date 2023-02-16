import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View,
} from 'react-native';

const DetailedFeedLogo = () => {
    return(
        // <View style={styles.container}>
        <View>
            <Image 
                style={styles.logo}
                source={require('../../../assets/logo.png')}   
            />
        </View>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: 75,
        height: 35,
        resizeMode: 'contain',
    }
})

export default DetailedFeedLogo;