import React from 'react';
import {
    Image,
    StyleSheet,
} from 'react-native';


const BurgerButtonForEXPL = () => {
    return (
        <Image
            source={require('../../../assets/buttons/burger-button.png')}
            resizeMode="contain"
            style={styles.BurgerButton}
        />
    )
}

const styles = StyleSheet.create({
    BurgerButton: {
        width: 23.59,
        height: 15.71,
        left: 15,

    }
})

export default BurgerButtonForEXPL;