import React from 'react';
import {Dimensions} from 'react-native';
import Pinchable from 'react-native-pinchable';

import AutoscaleImage from '../AutoscaleImage/AutoscaleImage';

const AstroImageWrapper = (props) => {
    //console.log(props);

    return (
        <Pinchable maximumZoomScale={2}>
            <AutoscaleImage
                uri={props.thumbnail}
                width={(0.96 * Dimensions.get('window').width - 25) / 2}
                aspectRatio={props.aspectRatio}
            />
        </Pinchable>
    );
};

export default AstroImageWrapper;
