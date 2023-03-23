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

import globalStyling from '../../../../constants/globalStyling';
import AsterismsButtonGreySvg from '../../../assets/buttons/asterisms_button_grey.svg';
import AsterismsButtonYellowSvg from '../../../assets/buttons/asterisms_button_yellow.svg';


const AsterismsButton = ({selected}) => {
    const [filterValue, setFilterValue] = React.useState(false);

    return (
        <View>
            
                <View>
                    {(selected == 'asterisms') ?
                        <AsterismsButtonYellowSvg style={globalStyling.sortByModalSvg} /> 
                    :
                        <AsterismsButtonGreySvg style={globalStyling.sortByModalSvg} />
                    }
                    <Text 
                        style={(selected == "asterisms") ? 
                            [globalStyling.SortByModalText, globalStyling.SortByModalTextYellow]
                            :
                            [globalStyling.SortByModalText, globalStyling.SortByModalTextGrey]
                        }
                    >
                        Asterisms/ Constellations
                    </Text>
                </View>
        </View>
    );
};


export default AsterismsButton;