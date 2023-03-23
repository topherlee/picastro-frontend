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

import LunarButtonGreySvg from '../../../assets/buttons/lunar_button_grey.svg';
import LunarButtonYellowSvg from '../../../assets/buttons/lunar_button_yellow.svg';

const LunarButton = ({selected}) => {
    const [filterValue, setFilterValue] = React.useState(false);

    return (
        <View>
            
                <View>
                    {(selected == 'lunar') ?
                        <LunarButtonYellowSvg style={globalStyling.sortByModalSvg} /> 
                    :
                        <LunarButtonGreySvg style={globalStyling.sortByModalSvg} />
                    }
                    <Text 
                        style={(selected == "lunar") ? 
                            [globalStyling.SortByModalText, globalStyling.SortByModalTextYellow]
                            :
                            [globalStyling.SortByModalText, globalStyling.SortByModalTextGrey]
                        }
                    >
                        Lunar
                    </Text>
                </View>
        </View>
    );
};


export default LunarButton;