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

import StarIconSvg from '../../../assets/star-icon.svg';
import StarIconSavedSvg from '../../../assets/star-icon-saved.svg';

const AstroImageWrapper = (props) => {
    const [imageIsSaved, setImageIsSaved] = React.useState(false);
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