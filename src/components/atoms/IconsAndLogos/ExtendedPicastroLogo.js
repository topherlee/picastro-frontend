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
        // marginBottom: "5%",
        // width: 200,
        // height: 75,
        width: "80%",
        height:55,
        marginTop: "5%",
        // marginBottom: "15%",
    }
    
   
})

export default ExtendedPicastroLogo;