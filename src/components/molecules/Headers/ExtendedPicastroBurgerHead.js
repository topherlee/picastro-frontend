import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ExtendedPicastroLogo} from '../../atoms';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ExtendedPicastroBurgerHeader = () => {
	const navigation = useNavigation();
	return (
		<View style={styles.headerContainer}>
			<View style={styles.picastroLogo}>
				<ExtendedPicastroLogo />
			</View>
			<TouchableOpacity
				onPress={function () {
					navigation.openDrawer();
				}}>
				<Icon name={'menu'} size={40} color="lightgray" />
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	headerContainer: {
		backgroundColor: '#2F2F2F',
		display: 'flex',
		width: '100%',
		alignItems: 'center',
		alignContent: 'center',
		justifyContent: 'center',
		paddingRight: 10,
		flexDirection: 'row',
		borderWidth: 0,
		borderColor: 'white',
	},
	picastroLogo: {
		position: 'relative',
		marginBottom: '0%',
		flex: 1,
		borderWidth: 0,
		borderColor: 'yellow',
		width: '60%',
		marginBottom: '5%',
	},
});

export default ExtendedPicastroBurgerHeader;
