import React from 'react';
import {View, Text} from 'react-native';

import globalStyling from '../../../../constants/globalStyling';

import GalaxyButtonGreySvg from '../../../assets/buttons/galaxy_button_grey.svg';
import GalaxyButtonYellowSvg from '../../../assets/buttons/galaxy_button_yellow.svg';

const GalaxyButton = ({selected}) => {
	return (
		<View>
			<View>
				{selected == 'galaxy' ?
					<GalaxyButtonYellowSvg style={globalStyling.sortByModalSvg} />
				:	<GalaxyButtonGreySvg style={globalStyling.sortByModalSvg} />}
				<Text
					style={
						selected == 'galaxy' ?
							[globalStyling.SortByModalText, globalStyling.SortByModalTextYellow]
						:	[globalStyling.SortByModalText, globalStyling.SortByModalTextGrey]
					}>
					Galaxy
				</Text>
			</View>
		</View>
	);
};

export default GalaxyButton;
