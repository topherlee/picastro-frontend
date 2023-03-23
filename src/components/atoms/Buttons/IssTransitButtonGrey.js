import React, { useContext, useEffect, useState } from 'react';
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

import IssTransitButtonGreySvg from '../../../assets/buttons/iss_transit_button_grey.svg';
import IssTransitButtonYellowSvg from '../../../assets/buttons/iss_transit_button_yellow.svg';

const IssTransitButtonGrey = ({selected}) => {
    console.log(selected)
    const [filterValue, setFilterValue] = React.useState(false);

    return (
        <View>
            {(selected == "iss_transit") ? 
                <IssTransitButtonYellowSvg
                    style={SortByModalButtonStyling.sortByModalSvg} 
                /> 
                : 
                <IssTransitButtonGreySvg
                    width={53}
                    height={53}
                    style={SortByModalButtonStyling.sortByModalSvg}
                />
            }
            
                <Text 
                    style={selected == "iss_transit" ? 
                        [SortByModalButtonStyling.SortByModalText, SortByModalButtonStyling.SortByModalTextYellow]
                        :
                        [SortByModalButtonStyling.SortByModalText, SortByModalButtonStyling.SortByModalTextGrey]
                    } 
                >
                    ISS Transit
                </Text>
             
        </View>
    );
};


export default IssTransitButtonGrey;