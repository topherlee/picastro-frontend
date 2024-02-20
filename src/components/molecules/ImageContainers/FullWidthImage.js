import {View, Dimensions} from 'react-native';
import React from 'react';
import {AutoscaleImageIndicator} from '../../atoms';
import Pinchable from 'react-native-pinchable';

const FullWidthImage = ({props}) => {
	// console.log('DFI', props);

	return (
		<View>
			{/* <Pinchable maximumZoomScale={10}> */}
			<AutoscaleImageIndicator
				uri={props.image}
				width={0.93 * Dimensions.get('window').width}
				aspectRatio={props.aspectRatio}
			/>
			{/* </Pinchable> */}
		</View>
	);
};

export default FullWidthImage;
