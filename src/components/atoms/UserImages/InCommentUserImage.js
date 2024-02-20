import React from 'react';
import {Image, StyleSheet} from 'react-native';
import globalStyling from '../../../../constants/globalStyling';

const InCommentUserImage = ({userImageURL}) => {
	if (!userImageURL) {
		return <React.Fragment></React.Fragment>;
	} else {
		return (
			<Image
				source={{
					uri: userImageURL, // + `?date=${new Date()}`,
					cache: 'reload',
				}}
				style={globalStyling.InCommentUserImage}
			/>
		);
	}
};

export default InCommentUserImage;
