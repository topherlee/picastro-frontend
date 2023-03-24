import React, { useState, useContext } from 'react';
import {
    StyleSheet,
    Button,
    View,
    SafeAreaView,
    Text,
    Alert,
    Image,
    TouchableOpacity,
} from 'react-native';
import { AuthContext } from '../../../context/AuthContext';


import TelescopeButtonSvg from '../../../assets/buttons/telescope-button.svg';


const TelescopeButton = () => {
    const {
        domain,
        setDomain,
        token,
        fetchInstance,
        currentUser,
        searchAndFilterUrl,
        setSearchAndFilterUrl,
        isSortModalVisible,
        setSortModalVisible
    } = useContext(AuthContext);

    
    return (
        <View style={{
            alignItems: 'center',
            justifyContent: 'center',
            top: 0
        }}>
            <TelescopeButtonSvg
                width={40}
                height={40}
            />
        </View>
    );
};


export default TelescopeButton;