import {View, Dimensions} from 'react-native';
import React from 'react';
import { AutoscaleImage } from '../../atoms';


const FullWidthImage = ({props}) => {
  //console.log("DFI", props)

  return (
    <View>
      <AutoscaleImage uri={props.thumbnail} width={0.93*Dimensions.get('window').width} />
    </View>
  );
};

export default FullWidthImage;
