import React from 'react';
import {
    Image,
    StyleSheet,
    View,
} from 'react-native';


const ExtendedPicastroLogo = () => {
    return (
        <View>
            <Image
                style={styles.extendedPicastroLogo}
                source={require('../../../assets/logo-text-gray.png')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    extendedPicastroLogo: {
        position: "relative",
        alignSelf: 'center',
        width: 117.53,
        height: 34.2,
        marginTop: "5%",
    }
})

export default ExtendedPicastroLogo;