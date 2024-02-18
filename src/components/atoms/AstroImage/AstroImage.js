import React from 'react';
import {Dimensions} from 'react-native';

import AutoscaleImage from '../AutoscaleImage/AutoscaleImage';

const AstroImageWrapper = (props) => {
    //console.log(props);

    return (
        <AutoscaleImage
            uri={props.thumbnail}
            width={(0.96 * Dimensions.get('window').width - 25) / 2}
            aspectRatio={props.aspectRatio}
        />
    );
};

export default AstroImageWrapper;
