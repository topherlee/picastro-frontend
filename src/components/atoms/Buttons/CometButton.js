import React from 'react';
import {
    View,
    Text,
} from 'react-native';

import globalStyling from '../../../../constants/globalStyling';

import CometButtonGreySvg from '../../../assets/buttons/comet_button_grey.svg';
import CometButtonYellowSvg from '../../../assets/buttons/comet_button_yellow.svg';


const CometButton = ({selected}) => {

    return (
        <View>
            
                <View>
                    {(selected == 'comet') ?
                        <CometButtonYellowSvg style={globalStyling.sortByModalSvg} /> 
                    :
                        <CometButtonGreySvg style={globalStyling.sortByModalSvg} />
                    }
                    <Text 
                        style={(selected == "comet") ? 
                            [globalStyling.SortByModalText, globalStyling.SortByModalTextYellow]
                            :
                            [globalStyling.SortByModalText, globalStyling.SortByModalTextGrey]
                        }
                    >
                        Comet
                    </Text>
                </View>
        </View>
    );
};


export default CometButton;