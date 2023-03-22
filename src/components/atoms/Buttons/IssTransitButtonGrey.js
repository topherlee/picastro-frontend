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
import { AuthContext } from '../../../context/AuthContext';

import SortByModalButtonStyling from './SortByModalButtonStyling';

import IssTransitButtonGreySvg from '../../../assets/buttons/iss_transit_button_grey.svg';
import IssTransitButtonYellowSvg from '../../../assets/buttons/iss_transit_button_yellow.svg';

const IssTransitButtonGrey = () => {
    const [filterValue, setFilterValue] = React.useState(false);
    const {
        domain,
        setDomain,
        token,
        fetchInstance,
        currentUser,
        searchAndFilterUrl,
        setSearchAndFilterUrl,
        isSortModalVisible,
        setSortModalVisible,
        activeSelector,
        setActiveSelector,
        activeObjectSelector,
        setActiveObjectSelector
    } = useContext(AuthContext);

    return (
        <TouchableOpacity
            style={SortByModalButtonStyling.iconContainer}
            onPress={ () => {
                setActiveObjectSelector('iss_transit');
                setSearchAndFilterUrl('?imageCategory=iss_transit');
                console.log("searchAndFilterUrl iss", searchAndFilterUrl);
                setSortModalVisible(!isSortModalVisible);
                //loadSortAndFilterScreen()
            }}
            title="Filter Value"
        >
            {(activeObjectSelector == 'iss_transit') ? 
                <IssTransitButtonYellowSvg
                    style={SortByModalButtonStyling.sortByModalSvg} /> 
                : <IssTransitButtonGreySvg
                width={53}
                height={53}
                />
            }
            {(activeObjectSelector == 'iss_transit') ? 
                <Text style={[
                    SortByModalButtonStyling.SortByModalText,
                    SortByModalButtonStyling.SortByModalTextYellow ]} >
                    ISS Transit
                </Text>
                : <Text style={[
                    SortByModalButtonStyling.SortByModalText,
                    SortByModalButtonStyling.SortByModalTextGrey ]} >
                    ISS Transit
                </Text>
            }
        </TouchableOpacity>
    );
};


export default IssTransitButtonGrey;