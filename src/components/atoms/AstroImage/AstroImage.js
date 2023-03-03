import React from "react";
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

import styled from 'styled-components';


const AstroImageWrapper = (props) => {
    var source = Image.resolveAssetSource(props.imageURL);
    ratio = (source.width / source.height);
    return (
        <AstroImage
          source={props.imageURL}
          style={{
            aspectRatio: ratio,
            maxWidth: "100%",
            height: "auto",
          }}
          resizeMode="contain"
        />
    );
};

const AstroImage = styled.Image`
  width: 100%;
  max-height: 100%;
  `;

export default AstroImageWrapper;