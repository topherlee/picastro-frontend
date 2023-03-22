import React, { useState, useContext } from 'react';
import {
    StyleSheet,
    Button,
    View,
    SafeAreaView,
    Text,
    Alert,
    Image,
    TouchableOpacity
} from 'react-native';

import SortByModalButtonStyling from './SortByModalButtonStyling';

import AsterismsButtonGreySvg from '../../../assets/buttons/asterisms_button_grey.svg';
import { AuthContext } from '../../../context/AuthContext';


const AsterismsButtonGrey = () => {
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
        <TouchableOpacity 
            style={SortByModalButtonStyling.iconContainer}
            onPress={() => {
                setSearchAndFilterUrl('?imageCategory=asterism');
                console.log("searchAndFilterUrl asterism", searchAndFilterUrl);
                setSortModalVisible(!isSortModalVisible);
                loadSortAndFilterScreen()
            }}
        >
            <AsterismsButtonGreySvg
                width={53}
                height={53}
            />
            <Text style={SortByModalButtonStyling.SortByModalText}>
                Asterisms/ Constellations
            </Text>
        </TouchableOpacity>
    );
};


export default AsterismsButtonGrey;