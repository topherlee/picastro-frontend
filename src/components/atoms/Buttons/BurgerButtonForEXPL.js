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


const BurgerButtonForEXPL = () => {
    return(
            <Image
                source={require('../../../assets/buttons/burger-button.png')}
                resizeMode="contain"
                style={styles.BurgerButton}
            />
    )
}

const styles = StyleSheet.create({
    BurgerButton: {
        width: 40,
        height: 40,
        right: 10,
    }
})

export default BurgerButtonForEXPL;