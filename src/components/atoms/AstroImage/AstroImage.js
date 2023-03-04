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

var ratio;

const AstroImageWrapper = (props) => {
    // const [imgWidth, setImgWidth] = useState(0);
    // const [imgHeight, setImgHeight] = useState(0);

    // Image.getSize(props.imageURL, (width, height) => {
    //   setImgWidth(width);
    //   setImgHeight(height);
    //   ratio = width / height;
    // });

    return (
      <AutoscaleImage uri={props.imageURL} width={(0.96*Dimensions.get('window').width-33)/2} />
        // <AstroImage
        //   source={{uri: props.imageURL}}
        //   style={{
        //     aspectRatio: ratio,
        //     maxWidth: "100%",
        //     width: imgWidth,
        //     height: imgHeight,
        //   }}
        //   resizeMode="contain"
        // />
    );
};

const AstroImage = styled.Image`
  width: 100%;
  max-height: 100%;
  `;

export default AstroImageWrapper;