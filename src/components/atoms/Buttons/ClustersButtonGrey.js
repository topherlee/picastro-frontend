import React, { useState } from 'react';
import {
    StyleSheet,
    Button,
    View,
    SafeAreaView,
    Text,
    Alert,
    Image,
} from 'react-native';

import SortByModalButtonStyling from './SortByModalButtonStyling';

import ClustersButtonGreySvg from '../../../assets/buttons/clusters_button_yellow.svg';


const ClustersButtonGrey = () => {

    const [modalVisible, setModalVisible] = useState(true);

    return (
        <View style={SortByModalButtonStyling.iconContainer}>
            <ClustersButtonGreySvg
                width={53}
                height={53}
            />
            <Text style={SortByModalButtonStyling.SortByModalText}>
                Stars/ Clusters
            </Text>
        </View>
    );
};


export default ClustersButtonGrey;