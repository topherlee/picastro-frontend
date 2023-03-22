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
import { ExtendedPicastroLogo } from '../../atoms';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const ExtendedPicastroBurgerHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
        <View style={styles.picastroLogo}>
            <ExtendedPicastroLogo />
        </View>
        <TouchableOpacity onPress={function() {navigation.openDrawer()}} >
            <Icon name={"menu"} size={40} color="lightgray" />
        </TouchableOpacity>
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
        justifyContent: 'flex-end',
        paddingRight: 10,
        flexDirection: 'row',
        gap: 10,    
        borderWidth: 0,
        borderColor:"white" 
               
    },
    BurgerButton: {
        width: 30,
        height: 2,
        right: 5,
    },
    picastroLogo: {
        position: "relative",
        marginBottom: "5%",   
        borderWidth: 0,
        borderColor:"white",
        width: "60%",
        height: 45,
        right: 20,
        marginBottom: "5%",  
    },
    });
    

    

export default ExtendedPicastroBurgerHeader;
