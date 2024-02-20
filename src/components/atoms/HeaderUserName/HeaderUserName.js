import React, {useContext, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AuthContext} from '../../../context/AuthContext';

const HeaderUserName = ({style}) => {
	const {currentUser} = useContext(AuthContext);

	// console.log("props", currentUser)

	return (
		<View style={style}>
			<View>
				<Text style={styles.textUserName}>{currentUser?.username}</Text>
				<Text style={styles.textGenderIdentifier}>{currentUser?.genderIdentifier}</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	textUserName: {
		fontSize: 21,
		fontWeight: 'bold',
		fontFamily: 'Inter',
		fontWeight: '700',
		color: 'white',
		textAlign: 'left',
	},
	textGenderIdentifier: {
		fontSize: 12,
		fontFamily: 'Inter',
		fontWeight: '500',
		color: 'white',
		textAlign: 'left',
	},
});

export default HeaderUserName;
