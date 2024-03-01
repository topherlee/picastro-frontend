import React, {useState, useContext} from 'react';
import {
	StyleSheet,
	Image,
	TouchableOpacity,
	KeyboardAvoidingView,
	Platform,
	Text,
	Share,
} from 'react-native';

export default function SharePicastroScreen({navigation}) {
	const shareUrl = async () => {
		const shareData = {
			title: 'Picastro',
			message:
				'Picastro | Share your amazing astronomy and astrophotography images with me and others who want to see them, all in full high resolution. No compression, fake accounts, bots or adverts!',
			url: 'https://testflight.apple.com/join/uApfPgBt',
		};

		try {
			const result = await Share.share(shareData);
			if (result.action === Share.sharedAction) {
				if (result.activityType) {
					// shared with activity type of result.activityType
				} else {
					// shared
				}
			} else if (result.action === Share.dismissedAction) {
				// dismissed
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			style={styles.container}>
			<Image
				style={styles.image}
				resizeMode="contain"
				source={require('../assets/app-icon.png')}
			/>
			<Text style={styles.title}>Sharing is Caring!</Text>
			<Text style={styles.text}>Picastro is better with friends and family.</Text>
			<Text style={[styles.text, {textAlign: 'center'}]}>
				Tap the button below to tell them about Picastro!
			</Text>
			<TouchableOpacity style={styles.logoutBtn} onPress={() => shareUrl()}>
				<Text style={styles.logoutText}>INVITE FRIENDS</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={function () {
					navigation.navigate('Home');
				}}>
				<Text style={{color: '#FFC700'}}> Cancel</Text>
			</TouchableOpacity>
		</KeyboardAvoidingView>
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
		width: '40%',
		height: '40%',
	},
	bottomText: {
		flexDirection: 'row',
		position: 'relative',
		marginBottom: '2%',
	},
	text: {
		color: 'white',
	},
	forgot_button: {
		height: 30,
		color: '#FFC700',
	},
	logoutBtn: {
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
	title: {
		color: '#FFC700',
		fontWeight: 'bold',
		fontSize: 20,
		position: 'relative',
		top: '-2%',
		textAlign: 'center',
	},
	logoutText: {
		fontWeight: 'bold',
	},
});
