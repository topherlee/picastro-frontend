import React from 'react';
import {
    Image,
    StyleSheet,
    View,
} from 'react-native';


const ExtendedPicastroLogo = () => {
    return(
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
        alignSelf: 'center',
        width: 117.53,
        height:34.2,
        marginTop: "5%",
    }
    
   
})

export default ExtendedPicastroLogo;