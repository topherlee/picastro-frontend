import {View, Text, Image, Dimensions} from 'react-native';
import React, {useState} from 'react';
import styled from 'styled-components';
import { AutoscaleImage } from '../../atoms';

var ratio;

const FullWidthImage = ({props}) => {
  //console.log("DFI", props)

  // var source = Image.resolveAssetSource(require('../../../assets/TestAstroImages/Element161.png'));
  // ratio2 = (source.width / source.height);
  // console.log(ratio2)

  return (
    <View>
      <AutoscaleImage uri={props.imageURL} width={0.93*Dimensions.get('window').width} />
    </View>
  );
};

export default FullWidthImage;
