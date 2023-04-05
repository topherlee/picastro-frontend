import React, {useState} from "react";
import {
    StyleSheet,
    Button,
    View,
    SafeAreaView,
    Text,
    Alert,
    Image,
    TouchableOpacity,
    Dimensions
  } from 'react-native';

import styled from 'styled-components';
import AutoscaleImage from "../AutoscaleImage/AutoscaleImage";


const AstroImageWrapper = (props) => {
    //console.log(props);

    return (
      props.thumbnail == "" ?
        <AutoscaleImage uri={props.thumbnail} width={(0.96*Dimensions.get('window').width-33)/2} />
      :
        <AutoscaleImage uri={props.image} width={(0.96*Dimensions.get('window').width-33)/2} />

      // <AutoscaleImage uri={ props.thumbnail != "" ? props.thumbnail : props.image } width={(0.96*Dimensions.get('window').width-33)/2} />
    
    );
};

const AstroImage = styled.Image`
  width: 100%;
  max-height: 100%;
  `;

export default AstroImageWrapper;