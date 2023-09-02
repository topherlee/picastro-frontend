import React, {useContext} from 'react';
import {
    View,
    Text,
    Pressable,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

import {AuthContext} from '../../../context/AuthContext';
import globalStyling from '../../../../constants/globalStyling';
import {BottomModal} from '../../common';
import {
    BottomModalFilterHomeFeedView,
    BottomModalFilterUserFeedView,
} from '../../atoms';

export default function BottomFilterModal({screen}) {
    console.log(screen)
    return (
        <BottomModal
            childrenText={'Sort or Filter By:'}
            children={screen==="Home" ? <BottomModalFilterHomeFeedView /> : <BottomModalFilterUserFeedView />}
        />
    );
}
