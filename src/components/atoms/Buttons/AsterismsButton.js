import React from 'react';
import {
    View,
    Text,
} from 'react-native';

import globalStyling from '../../../../constants/globalStyling';
import AsterismsButtonGreySvg from '../../../assets/buttons/asterisms_button_grey.svg';
import AsterismsButtonYellowSvg from '../../../assets/buttons/asterisms_button_yellow.svg';


const AsterismsButton = ({ selected }) => {

    return (
        <View>
            <View>
                {(selected == 'asterism') ?
                    <AsterismsButtonYellowSvg style={globalStyling.sortByModalSvg} />
                    :
                    <AsterismsButtonGreySvg style={globalStyling.sortByModalSvg} />
                }
                <Text
                    style={(selected == "asterism") ?
                        [globalStyling.SortByModalText, globalStyling.SortByModalTextYellow]
                        :
                        [globalStyling.SortByModalText, globalStyling.SortByModalTextGrey]
                    }
                >
                    Asterisms
                </Text>
            </View>
        </View>
    );
};

export default AsterismsButton;