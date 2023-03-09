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
import { BurgerButton, UserImage, HeaderUserName } from '../../atoms';

const UserNameImageWithoutBurger = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
        <View style={styles.userImage}>
            <TouchableOpacity>
                <UserImage />
            </TouchableOpacity>
        </View>
        <HeaderUserName style={styles.textContainer} />
        <View>
            {/* <TouchableOpacity onPress={function() {navigation.openDrawer()}} >
                <BurgerButton />
            </TouchableOpacity> */}
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: '#2F2F2F',
        display: "flex",
        top: 0,
        width: '100%',
        height: 60,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    textContainer: {
        alignContent: 'flex-start',
        justifyContent: 'flex-start',
        top: 0,
        width: '70%',
        flexDirection: 'column',
        marginLeft: 15,
    },
    textGenderIdentifier: {
        fontSize: 12,
        fontFamily: 'Inter',
        fontWeight: '500',
        color: 'white',
        textAlign: 'left'
    },
    image: {
        position: "relative",
        marginTop: "0%",
        marginBottom: "20%",
        // width: "100%",
        // height: 200
    },
    userImage: {
        height: 10,
        paddingLeft: 90,
        marginTop:"20%",
        //flex: 1,
    },
    // BurgerButton: {
    //     width: 40,
    //     height: 40,
    //     right: 5,
    // }
});  

export default UserNameImageWithoutBurger;
