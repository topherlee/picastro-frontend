import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

const PicastroLogo = () => {
	return (
		<View>
			<Image style={styles.picastroLogo} source={require('../../../assets/logo.png')} />
		</View>
	);
};

const styles = StyleSheet.create({
	picastroLogo: {
		width: 75,
		height: 35,
		resizeMode: 'contain',
	},
});

export default PicastroLogo;
