import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View,
} from 'react-native';

const ExtendedPicastroLogo = () => {
    return(
        // <View style={styles.container}>
        <View>
            <Image 
                style={styles.logo}
                source={require('../../../assets/logo-text-gray.png')}   
            />
        </View>
    )
}

const styles = StyleSheet.create({
    logo: {
        position: "relative",
        marginBottom: "20%",
    }
    
   
})

export default ExtendedPicastroLogo;