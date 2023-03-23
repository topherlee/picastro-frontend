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
import PlanetButtonGreySvg from '../../../assets/buttons/planet_button_grey.svg';
import PlanetButtonYellowSvg from '../../../assets/buttons/planet_button_yellow.svg';


const PlanetButton = ({selected}) => {
    const [filterValue, setFilterValue] = React.useState(false);

    return (
        <View>
            
                <View>
                    {(selected == 'planet') ?
                        <PlanetButtonYellowSvg style={globalStyling.sortByModalSvg} /> 
                    :
                        <PlanetButtonGreySvg style={globalStyling.sortByModalSvg} />
                    }
                    <Text 
                        style={(selected == "planet") ? 
                            [globalStyling.SortByModalText, globalStyling.SortByModalTextYellow]
                            :
                            [globalStyling.SortByModalText, globalStyling.SortByModalTextGrey]
                        }
                    >
                        Planet
                    </Text>
                </View>
        </View>
    );
};


export default PlanetButton;