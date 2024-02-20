import React, {useState, useContext, useEffect} from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	TextInput,
	TouchableOpacity,
	Linking,
	Alert,
} from 'react-native';
import {useStripe} from '@stripe/stripe-react-native';
import {AuthContext} from '../../context/AuthContext';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function PaymentScreen({navigation, route}) {
	const {domain, token, setValidSubscription, fetchInstance} = useContext(AuthContext); //get setIsSignedIn function from global context

	const {initPaymentSheet, presentPaymentSheet} = useStripe();
	const [loading, setLoading] = useState(false);

	const fetchPaymentSheetParams = async () => {
		const response = await fetchInstance('/api/payment-sheet/', {
			method: 'POST',
			headers: {
				Authorization: `Token ${token.access}`,
				'Content-Type': 'application/json',
			},
		});
		const {paymentIntent, customer, ephemeralKey} = await response.json();
		// console.log(paymentIntent, customer, ephemeralKey);
		return {
			paymentIntent,
			ephemeralKey,
			customer,
		};
	};

	const initializePaymentSheet = async () => {
		const {paymentIntent, ephemeralKey, customer, publishableKey} =
			await fetchPaymentSheetParams();

		const {error} = await initPaymentSheet({
			merchantDisplayName: 'Picastro Global Ltd.',
			customerId: customer,
			customerEphemeralKeySecret: ephemeralKey,
			paymentIntentClientSecret: paymentIntent,
			// Set `allowsDelayedPaymentMethods` to true if your business can handle payment
			//methods that complete payment after a delay, like SEPA Debit and Sofort.
			allowsDelayedPaymentMethods: false,
		});
		if (!error) {
			setLoading(true);
		}
	};

	const openPaymentSheet = async () => {
		const {error} = await presentPaymentSheet();

		if (error) {
			Alert.alert(`Payment Failed: ${error.code}`, error.message);
		} else {
			Alert.alert('Payment Succeeded', 'Your payment is successful. Clear skies ahead!', [
				{text: 'Go!', onPress: () => setValidSubscription(true)},
			]);
		}
	};

	useEffect(() => {
		initializePaymentSheet();
	}, []);

	return (
		<View style={styles.container}>
			<Image
				style={styles.image}
				resizeMode="contain"
				source={require('../../assets/logo-text-gray.png')}
			/>
			<Text style={[styles.title, {marginBottom: 50}]}>Payment</Text>
			<View style={styles.pricing}>
				<Text style={[styles.yellowText, {marginBottom: 20}]}>12 Month Full Access</Text>
				<Text style={styles.text}>Complete access to the platform for 1 year.</Text>
				<Text style={styles.yellowText}>£24.99</Text>
			</View>
			<TouchableOpacity style={styles.loginBtn} onPress={openPaymentSheet}>
				<Text style={{fontWeight: 'bold'}}>PAY VIA STRIPE</Text>
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
	yellowText: {
		color: '#FFC700',
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	text: {
		color: 'white',
		fontSize: 16,
		textAlign: 'center',
	},
	title: {
		color: '#FFC700',
		fontWeight: 'bold',
		fontSize: 20,
		position: 'relative',
	},
	pricing: {
		backgroundColor: '#2e2e2e',
		borderRadius: 20,
		padding: 20,
		width: '65%',
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
