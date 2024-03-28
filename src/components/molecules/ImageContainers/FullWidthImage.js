import {View, Dimensions} from 'react-native';
import React from 'react';
import {AutoscaleImageIndicator} from '../../atoms';

const FullWidthImage = ({props}) => {
	// console.log('DFI', props);

	return (
		<View>
			<AutoscaleImageIndicator
				uri={props.image}
				width={0.93 * Dimensions.get('window').width}
				aspectRatio={props.aspectRatio}
			/>
		</View>
	);
};

export default FullWidthImage;
