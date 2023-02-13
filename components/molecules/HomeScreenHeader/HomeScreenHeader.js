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


const HomeScreenHeader = () => {
  return (
    <View style={{
        alignContent: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        top: 0,
        flexDirection: 'row',
        }}>
        <View>
            <Image
                source={require('../../../assets/Sample/sampleuser.png')}
                resizeMode="contain"
                style={{
                    width: 40,
                    height: 40,
                alignContent: 'stretch'
                }}
            />
        </View>
        <View style={{
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            top: 0,
            flexDirection: 'column',
            }}>
            <Text style={styles.textUserName}>
                starboy32285
            </Text>
            <Text style={styles.textGenderIdentifier}>
                he/him
            </Text>
        </View>
        <View>
            <Image
                source={require('../../../assets/logo.png')}
                resizeMode="contain"
                style={{
                    width: 40,
                    height: 40,
                }}
            />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    text: {
        fontSize: 25,
        fontWeight: '500',
        color: 'red',
        textAlign: 'center'
    },
    textUserName: {
        fontSize: 21,
        fontWeight: 'bold',
        fontFamily: 'Inter',
        fontWeight: '700',
        color: 'white',
        textAlign: 'center',
        width: '72%',
        height: 30,
        //align-self: flex-end,
        //margin: 0 0 '5%' 0,
    },
    textGenderIdentifier: {
        fontSize: 12,
        fontFamily: 'Inter',
        fontWeight: '500',
        color: 'white',
        textAlign: 'center'
    },
    image: {
        width: "100%",
        height: 200
    }
});  

export default HomeScreenHeader;
