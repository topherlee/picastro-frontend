import React from 'react';
import {
    View,
    Text,
} from 'react-native';

import globalStyling from '../../../../constants/globalStyling';

import NebulaButtonGreySvg from '../../../assets/buttons/nebula_button_grey.svg';
import NebulaButtonYellowSvg from '../../../assets/buttons/nebula_button_yellow.svg';


const NebulaButton = ({ selected }) => {

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