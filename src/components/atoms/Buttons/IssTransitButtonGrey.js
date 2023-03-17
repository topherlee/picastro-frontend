import React, { useState } from 'react';
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

const IssTransitButtonGrey = () => {
    const [filterValue, setFilterValue] = React.useState(false);
    const [modalVisible, setModalVisible] = useState(true);

    return (
        <TouchableOpacity
            style={SortByModalButtonStyling.iconContainer}
            onPress={ () => {setFilterValue(!filterValue)}}
            title="Filter Value"
        >
            {filterValue ? 
                <IssTransitButtonGreySvg
                    style={SortByModalButtonStyling.sortByModalSvg} /> 
                : <IssTransitButtonYellowSvg
                width={53}
                height={53}
                />
            }
            {filterValue ? 
                <Text style={[
                    SortByModalButtonStyling.SortByModalText,
                    SortByModalButtonStyling.SortByModalTextGrey ]} >
                    ISS Transit
                </Text>
                : <Text style={[
                    SortByModalButtonStyling.SortByModalText,
                    SortByModalButtonStyling.SortByModalTextYellow ]} >
                    ISS Transit
                </Text>
            }
        </TouchableOpacity>
    );
};


export default IssTransitButtonGrey;