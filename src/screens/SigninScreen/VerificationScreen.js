import React, {useState, useContext, useEffect} from 'react';
import {StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import {AuthContext} from '../../context/AuthContext';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function VerificationScreen({navigation, route}) {
	const {domain, setToken, setIsSignedIn, setDomain} = useContext(AuthContext); //get setIsSignedIn function from global context

	return (
		<View style={styles.container}>
			<Image
				style={styles.image}
				resizeMode="contain"
				source={require('../../assets/logo-text-gray.png')}
			/>
			<Text style={styles.title}>You're Almost There, {route.params?.username}</Text>
			<Text style={styles.text}>
				We sent an email to {route.params?.email} to verify that you own this email. Please
				check your inbox and click on the link to complete your registration.
			</Text>
			<Text style={styles.text}>
				Tip: Check your spam folder in case the email was incorrectly identified.
			</Text>
			<TouchableOpacity
				style={styles.loginBtn}
				onPress={function () {
					navigation.navigate('Login');
				}}>
				<Text style={{fontWeight: 'bold'}}>Login Here</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'black',
		alignItems: 'center',
		justifyContent: 'center',
	},
	image: {
		position: 'relative',
		marginBottom: '10%',
	},
	text: {
		color: 'white',
		fontSize: 16,
		textAlign: 'center',
		marginTop: '3%',
	},
	title: {
		color: '#FFC700',
		fontWeight: 'bold',
		fontSize: 20,
		position: 'relative',
	},
	loginBtn: {
		width: '80%',
		borderRadius: 25,
		height: '7%',
		minHeight: 50,
		alignItems: 'center',
		justifyContent: 'center',
		position: 'relative',
		marginTop: '10%',
		marginBottom: '3%',
		backgroundColor: '#FFC700',
	},
});
