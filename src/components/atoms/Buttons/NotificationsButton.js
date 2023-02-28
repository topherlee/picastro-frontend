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

import NotificationsIconSvg from '../../../assets/buttons/notifications-button.svg';

const NotificationsButton = () => (
    <View style={{
        alignItems: 'center',
        justifyContent: 'center',
        top: 0
        }}>
        <NotificationsIconSvg width={40} height={40} /> 
    </View>
);

export default NotificationsButton;