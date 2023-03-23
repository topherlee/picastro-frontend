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
import SortByModalButtonStyling from './SortByModalButtonStyling';

import LunarButtonGreySvg from '../../../assets/buttons/lunar_button_grey.svg';
import LunarButtonYellowSvg from '../../../assets/buttons/lunar_button_yellow.svg';

const LunarButtonGrey = ({selected}) => {
    const [filterValue, setFilterValue] = React.useState(false);

    return (
        <View>
            
                <View>
                    {(selected == 'lunar') ?
                        <LunarButtonYellowSvg style={SortByModalButtonStyling.sortByModalSvg} /> 
                    :
                        <LunarButtonGreySvg style={SortByModalButtonStyling.sortByModalSvg} />
                    }
                    <Text 
                        style={(selected == "lunar") ? 
                            [SortByModalButtonStyling.SortByModalText, SortByModalButtonStyling.SortByModalTextYellow]
                            :
                            [SortByModalButtonStyling.SortByModalText, SortByModalButtonStyling.SortByModalTextGrey]
                        }
                    >
                        Lunar
                    </Text>
                </View>
        </View>
    );
};


export default LunarButtonGrey;