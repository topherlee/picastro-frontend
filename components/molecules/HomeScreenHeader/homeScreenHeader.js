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


const HomeScreenHeader=() =>{
    <View>
        <View>
            <Image
                source={require('../../../assets/Sample/sampleuser.png')}
                resizeMode="contain"
                style={{
                    width: 40,
                    height: 40,
                }}
            />
        </View>
        <View>
            <Text>
                starboy32285
            </Text>
            <Text>
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
}
export default HomeScreenHeader;
