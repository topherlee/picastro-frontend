import React from 'react';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components';

import {HalfWidthBelowImage, HalfWidthImageContainer} from '../../molecules';

export const HalfWidthPostsContainer = (props) => {
	//console.log("HFC", props)
	const navigation = useNavigation();
	return (
		<View1 onPress={() => navigation.push('PostDetails', props)}>
			<HalfWidthImageContainer {...props} />
			<HalfWidthBelowImage {...props} />
		</View1>
	);
};

const View1 = styled.TouchableOpacity`
	position: relative;
	max-width: 200px;
	margin-bottom: 5%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border: 0px solid red;
`;

export default HalfWidthPostsContainer;
