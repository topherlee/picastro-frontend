import React from 'react';
import {View, Text} from 'react-native';

import FigureImage from '../../../assets/images/empty-feed1.svg';

export default function EmptyFeedFemaleFigure() {
	return (
		<View>
			<FigureImage
				style={{
					maxWidth: '100%',
				}}
			/>
		</View>
	);
}
