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

import globalStyling from '../../../../constants/globalStyling';

import ClustersButtonGreySvg from '../../../assets/buttons/clusters_button_grey.svg';
import ClustersButtonYellowSvg from '../../../assets/buttons/clusters_button_yellow.svg';


const ClustersButton = ({selected}) => {
    const [filterValue, setFilterValue] = React.useState(false);

    return (
        <View>
            
                <View>
                    {(selected == 'clusters') ?
                        <ClustersButtonYellowSvg style={globalStyling.sortByModalSvg} /> 
                    :
                        <ClustersButtonGreySvg style={globalStyling.sortByModalSvg} />
                    }
                    <Text 
                        style={(selected == "clusters") ? 
                            [globalStyling.SortByModalText, globalStyling.SortByModalTextYellow]
                            :
                            [globalStyling.SortByModalText, globalStyling.SortByModalTextGrey]
                        }
                    >
                        Stars/ Clusters
                    </Text>
                </View>
        </View>
    );
};


export default ClustersButton;