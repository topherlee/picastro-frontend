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
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 10,    
               
    },
    BurgerButton: {
        width: 30,
        height: 2,
        right: 5,
    },
    userImage: {
        position: "relative",
        marginBottom: "5%",   
        // borderWidth: 1,
        // borderColor:"white"  
        width: "60%",
        height:45,
        marginBottom: "5%",  
        
        

    },
    });
    

    

export default ExtendedPicastroBurgerHeader;
