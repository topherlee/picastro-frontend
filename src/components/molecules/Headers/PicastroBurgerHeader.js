import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {PicastroLogo} from '../../atoms';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const PicastroBurgerHeader = () => {
	const navigation = useNavigation();
	return (
		<View style={styles.headerContainer}>
			<View style={styles.userImage}>
				<PicastroLogo />
			</View>
			<View>
				<TouchableOpacity
					onPress={function () {
						navigation.openDrawer();
					}}>
					<Icon name={'menu'} size={40} color="lightgray" style={{paddingRight: 10}} />
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	headerContainer: {
		backgroundColor: '#2F2F2F',
		display: 'flex',
		top: 0,
		width: '100%',
		height: 60,
		alignItems: 'center',
		alignContent: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
	},
	textContainer: {
		alignContent: 'flex-start',
		justifyContent: 'flex-start',
		top: 0,
		width: '70%',
		flexDirection: 'column',
		marginLeft: 15,
	},
	textGenderIdentifier: {
		fontSize: 12,
		fontFamily: 'Inter',
		fontWeight: '500',
		color: 'white',
		textAlign: 'left',
	},
	image: {
		width: '100%',
		height: 200,
	},
	userImage: {
		height: 40,
		paddingLeft: 20,
		//flex: 1,
	},
	BurgerButton: {
		width: 40,
		height: 40,
		right: 5,
	},
});

export default PicastroBurgerHeader;
