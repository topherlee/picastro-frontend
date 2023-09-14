import React from 'react';
import {Dimensions} from 'react-native';
import Pinchable from 'react-native-pinchable';

import AutoscaleImage from '../AutoscaleImage/AutoscaleImage';

const AstroImageWrapper = props => {
    //console.log(props);

    return (
        <AutoscaleImage
            uri={props.thumbnail}
            width={(0.96 * Dimensions.get('window').width - 33) / 2}
            aspectRatio={props.aspectRatio}
        />
    );
};

export default AstroImageWrapper;
