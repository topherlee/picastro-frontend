import React from 'react';
import {View, Text} from 'react-native';

import globalStyling from '../../../../constants/globalStyling';

import SolarButtonGreySvg from '../../../assets/buttons/solar_button_grey.svg';
import SolarButtonYellowSvg from '../../../assets/buttons/solar_button_yellow.svg';

const SolarButton = ({selected}) => {
	return (
		<View>
			<View>
				{selected == 'solar' ?
					<SolarButtonYellowSvg style={globalStyling.sortByModalSvg} />
				:	<SolarButtonGreySvg style={globalStyling.sortByModalSvg} />}
				<Text
					style={
						selected == 'solar' ?
							[globalStyling.SortByModalText, globalStyling.SortByModalTextYellow]
						:	[globalStyling.SortByModalText, globalStyling.SortByModalTextGrey]
					}>
					Solar
				</Text>
			</View>
		</View>
	);
};

export default SolarButton;
