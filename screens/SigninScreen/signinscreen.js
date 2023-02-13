import React from 'react';
import {  View, Text, ImageComponent, StyleSheet} from 'react-native';
import Logo from '../../assets/logo.png'

const signinscreen = ({navigation}) => {
    const {height} = useWindowDimensions(n);
    return (
        <View>
          <image source={logo} style={StyleSheet.logo, {height: height * 0.3}} resizeMode='contain' />
        </View>
    )
}
  
const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    logo:{
        width: '70%',
        maxWidth: 300,
        maxheight: 200,
    }
})
export default signinscreen;