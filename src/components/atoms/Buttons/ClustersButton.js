import React from 'react';
import {
    View,
    Text,
} from 'react-native';

import globalStyling from '../../../../constants/globalStyling';

import ClustersButtonGreySvg from '../../../assets/buttons/clusters_button_grey.svg';
import ClustersButtonYellowSvg from '../../../assets/buttons/clusters_button_yellow.svg';


const ClustersButton = ({selected}) => {

    return (
        <View>
            
                <View>
                    {(selected == 'cluster') ?
                        <ClustersButtonYellowSvg style={globalStyling.sortByModalSvg} /> 
                    :
                        <ClustersButtonGreySvg style={globalStyling.sortByModalSvg} />
                    }
                    <Text 
                        style={(selected == "cluster") ? 
                            [globalStyling.SortByModalText, globalStyling.SortByModalTextYellow]
                            :
                            [globalStyling.SortByModalText, globalStyling.SortByModalTextGrey]
                        }
                    >
                        Stars
                    </Text>
                </View>
        </View>
    );
};


export default ClustersButton;