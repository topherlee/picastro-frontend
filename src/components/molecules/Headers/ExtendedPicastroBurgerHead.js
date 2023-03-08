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
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { BurgerButtonForEXPL, ExtendedPicastroLogo } from '../../atoms';

const ExtendedPicastroBurgerHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
        <View style={styles.userImage}>
            <ExtendedPicastroLogo />
        </View>
        <View>
            <TouchableOpacity onPress={function() {navigation.openDrawer()}} >
                <BurgerButtonForEXPL />
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: '#2F2F2F',
        display: "flex",
        width: '100%',
        // height: 60,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        // marginBottom: "10%",
        // marginTop: "20%"
       
        
        
    },
    BurgerButton: {
        width: 40,
        height: 2,
        right: 5,
    },
    userImage: {
        position: "relative",
        // marginBottom: "5%",   
        borderWidth: 1,
        borderColor:"white"    
        

    },
    });
    

    

export default ExtendedPicastroBurgerHeader;
