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
    const {domain, token, setIsSignedIn, setDomain} = useContext(AuthContext); //get setIsSignedIn function from global context

    const {initPaymentSheet, presentPaymentSheet} = useStripe();
    const [loading, setLoading] = useState(false);

    const fetchPaymentSheetParams = async () => {
        const response = await fetch(`${domain}/api/payment-sheet/`, {
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
            merchantDisplayName: 'Example, Inc.',
            customerId: customer,
            customerEphemeralKeySecret: ephemeralKey,
            paymentIntentClientSecret: paymentIntent,
            // Set `allowsDelayedPaymentMethods` to true if your business can handle payment
            //methods that complete payment after a delay, like SEPA Debit and Sofort.
            allowsDelayedPaymentMethods: false,
            defaultBillingDetails: {
                name: 'Jane Doe',
            },
        });
        if (!error) {
            console.log('error?');
            setLoading(true);
        }
    };

    const openPaymentSheet = async () => {
        const {error} = await presentPaymentSheet();

        if (error) {
            Alert.alert(`Error code: ${error.code}`, error.message);
        } else {
            Alert.alert('Success', 'Your order is confirmed!');
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
            <Text style={styles.title}>Payment</Text>
            <Text style={styles.text}>Lorem ipsum dolor sit amet</Text>
            <TouchableOpacity
                style={styles.loginBtn}
                onPress={openPaymentSheet}>
                <Text style={{fontWeight: 'bold'}}>OR PAY VIA STRIPE</Text>
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
