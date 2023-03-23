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
import { AuthContext } from '../../../context/AuthContext';
import SortByModalButtonStyling from './SortByModalButtonStyling';

import LunarButtonGreySvg from '../../../assets/buttons/lunar_button_grey.svg';
import LunarButtonYellowSvg from '../../../assets/buttons/lunar_button_yellow.svg';

const LunarButtonGrey = () => {
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
        <View>
            {(activeObjectSelector == 'lunar') ?
                <View>
                    <LunarButtonYellowSvg
                        style={SortByModalButtonStyling.sortByModalSvg}
                    />
                    <Text style={[
                        SortByModalButtonStyling.SortByModalText,
                        SortByModalButtonStyling.SortByModalTextYellow]}
                    >
                        Lunar
                    </Text>
                </View>
                :
                <View>
                    <LunarButtonGreySvg
                        style={SortByModalButtonStyling.sortByModalSvg} />
                    <Text style={[
                        SortByModalButtonStyling.SortByModalText,
                        SortByModalButtonStyling.SortByModalTextGrey]} >
                        Lunar
                    </Text>
                </View>
            }
        </View>
    );
};


export default LunarButtonGrey;