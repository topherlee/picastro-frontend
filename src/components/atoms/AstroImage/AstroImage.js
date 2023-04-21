import React from "react";
import {
  Dimensions
} from 'react-native';

import styled from 'styled-components';
import AutoscaleImage from "../AutoscaleImage/AutoscaleImage";


const AstroImageWrapper = (props) => {
  //console.log(props);

  return (
    <AutoscaleImage uri={props.thumbnail} width={(0.96 * Dimensions.get('window').width - 33) / 2} />

    // <AutoscaleImage uri={ props.thumbnail != "" ? props.thumbnail : props.image } width={(0.96*Dimensions.get('window').width-33)/2} />

  );
};

export default AstroImageWrapper;