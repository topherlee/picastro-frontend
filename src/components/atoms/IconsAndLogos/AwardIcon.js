import React from 'react';

import AwardGoldSvg from '../../../assets/buttons/award-gold.svg';
import AwardSilverSvg from '../../../assets/buttons/award-silver.svg';
import AwardBronzeSvg from '../../../assets/buttons/award-bronze.svg';

const AwardIcon = (props) => {
	if (props.award == 'gold') {
		return <AwardGoldSvg resizeMode="contain" />;
	} else if (props.award == 'silver') {
		return <AwardSilverSvg resizeMode="contain" />;
	} else if (props.award == 'bronze') {
		return <AwardBronzeSvg resizeMode="contain" />;
	}
};

export default AwardIcon;
