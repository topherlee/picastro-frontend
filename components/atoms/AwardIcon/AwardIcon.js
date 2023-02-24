import React from "react";
import {
    StyleSheet,
    Button,
    View,
    SafeAreaView,
    Text,
    Alert,
    Image,
    TouchableOpacity,
  } from 'react-native';

import styled from 'styled-components';

import AwardGoldSvg from '../../../assets/buttons/award-gold.svg';
import AwardSilverSvg from '../../../assets/buttons/award-silver.svg';
import AwardBronzeSvg from '../../../assets/buttons/award-bronze.svg';

const AwardIcon = (props) => {
    if (props.award == "gold") {
        return <AwardGoldSvg style={{
            width: 26,
            height: 30,
          }}
         />;
    } else if (props.award == "silver") {
        return <AwardSilverSvg style={styles.awardIcon}/>;
    } else if (props.award == "bronze") {
        return <AwardBronzeSvg />;
    };
};

const styles = StyleSheet.create({
    awardIcon: {
        width: 26,
        height: 30,
    },
});


export default AwardIcon;