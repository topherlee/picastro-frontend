import {View, Text, Image, Dimensions} from 'react-native';
import React, {useState} from 'react';
import styled from 'styled-components';
import { AutoscaleImage } from '../../atoms';

var ratio;

const FullWidthImage = ({props}) => {
  //console.log("DFI", props)

  return (
    <View>
      <AutoscaleImage uri={props.image} width={0.93*Dimensions.get('window').width} />
    </View>
  );
};

export default FullWidthImage;
