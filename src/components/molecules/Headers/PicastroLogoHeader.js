import {PicastroLogo} from '../../atoms';

const PicastroLogoHeader = {
	headerTitle: (props) => <PicastroLogo {...props} />,
	headerStyle: {
		backgroundColor: 'black',
	},
	headerTintColor: '#fff',
	headerTitleAlign: 'center',
	headerBackTitleVisible: false,
};

export default PicastroLogoHeader;
