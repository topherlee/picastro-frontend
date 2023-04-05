import React from 'react';
import {
    Image,
    StyleSheet,
    View,
} from 'react-native';


const PicastroLogo = () => {
    return(
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

export default PicastroLogo;