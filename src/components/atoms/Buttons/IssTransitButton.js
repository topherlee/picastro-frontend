import React, { useState, useContext } from 'react';
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

import IssTransitButtonGreySvg from '../../../assets/buttons/iss_transit_button_grey.svg';
import IssTransitButtonYellowSvg from '../../../assets/buttons/iss_transit_button_yellow.svg';

const IssTransitButton = ({selected}) => {
    const [filterValue, setFilterValue] = React.useState(false);

    return (
        <View>
            
                <View>
                    {(selected == 'iss_transit') ?
                        <IssTransitButtonYellowSvg style={globalStyling.sortByModalSvg} /> 
                    :
                        <IssTransitButtonGreySvg style={globalStyling.sortByModalSvg} />
                    }
                    <Text 
                        style={(selected == "iss_transit") ? 
                            [globalStyling.SortByModalText, globalStyling.SortByModalTextYellow]
                            :
                            [globalStyling.SortByModalText, globalStyling.SortByModalTextGrey]
                        }
                    >
                        ISS Transit
                    </Text>
                </View>
        </View>
    );
};


export default IssTransitButton;