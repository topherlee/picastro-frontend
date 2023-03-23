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

import NebulaButtonGreySvg from '../../../assets/buttons/nebula_button_grey.svg';
import NebulaButtonYellowSvg from '../../../assets/buttons/nebula_button_yellow.svg';


const NebulaButton = ({selected}) => {
    const [filterValue, setFilterValue] = React.useState(false);

    return (
        <View>
            
                <View>
                    {(selected == 'nebula') ?
                        <NebulaButtonYellowSvg style={globalStyling.sortByModalSvg} /> 
                    :
                        <NebulaButtonGreySvg style={globalStyling.sortByModalSvg} />
                    }
                    <Text 
                        style={(selected == "nebula") ? 
                            [globalStyling.SortByModalText, globalStyling.SortByModalTextYellow]
                            :
                            [globalStyling.SortByModalText, globalStyling.SortByModalTextGrey]
                        }
                    >
                        Nebula
                    </Text>
                </View>
        </View>
    );
};


export default NebulaButton;