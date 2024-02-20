import React from 'react';
import {View} from 'react-native';

import NotificationsIconSvg from '../../../assets/buttons/notifications-button.svg';
import globalStyling from '../../../../constants/globalStyling';

const NotificationsButton = () => (
	<View
		style={{
			alignItems: 'center',
			justifyContent: 'center',
			top: 0,
		}}>
		<NotificationsIconSvg style={globalStyling.NavBarButton} />
	</View>
);

export default NotificationsButton;
