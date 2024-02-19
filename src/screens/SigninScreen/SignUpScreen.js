import React, {useState, useContext, useEffect, useRef} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
} from 'react-native';
import {AuthContext} from '../../context/AuthContext';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Keychain from 'react-native-keychain';
import globalStyling from '../../../constants/globalStyling';

export default function SignUpScreen({navigation}) {
    const {domain, setToken, setIsSignedIn, setDomain} =
        useContext(AuthContext); //get setIsSignedIn function from global context
    const [error, setError] = useState(false);
    const [securePassword, setSecurePassword] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const inputField = useRef([]);

    function handleRegister() {
        var body = JSON.stringify({
            username: username,
            password: password,
            first_name: firstName,
            last_name: lastName,
            email: email,
            phone_no: phoneNum,
        });

        if (password === confirmPassword) {
            fetch(`${domain}/api/auth/register/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: body,
            })
                .then(async (res) => {
                    console.log('STATUS', res.status);
                    if (res.ok) {
                        return res.json();
                    } else {
                        setError(true);
                        throw await res.json();
                    }
                })
                .then(async (json) => {
                    console.log('REGISTRATION SUCCESS', json);
                    // await Keychain.setGenericPassword('token',JSON.stringify(json.token));
                    // setToken(json.token);
                    // setIsSignedIn(true);
                    navigation.navigate('Verify', {
                        email: email,
                        username: username,
                    });
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            console.log('password error');
            setError(true);
        }
    }

    useEffect(() => {
        //Platform.OS === "android" ? setDomain('http://10.0.2.2:8000') : "";
    }, []);

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}>
            <Image
                style={styles.image}
                resizeMode="contain"
                source={require('../../assets/logo-text-gray.png')}
            />
            <Text style={!error ? styles.title : styles.titleRed}>
                {!error
                    ? 'Register for an account'
                    : 'Unable to register, please check your details and try again'}
            </Text>
            <View style={globalStyling.inputView}>
                <TextInput
                    style={globalStyling.inputFieldText}
                    placeholder="First Name"
                    placeholderTextColor="grey"
                    autoComplete="off"
                    autoCorrect={false}
                    clearButtonMode="while-editing"
                    returnKeyType="next"
                    onChangeText={(firstName) => setFirstName(firstName)}
                    maxLength={20}
                    onSubmitEditing={() => inputField.current[0].focus()}
                />
            </View>
            <View style={globalStyling.inputView}>
                <TextInput
                    style={globalStyling.inputFieldText}
                    placeholder="Last Name"
                    placeholderTextColor="grey"
                    autoComplete="off"
                    autoCorrect={false}
                    clearButtonMode="while-editing"
                    returnKeyType="next"
                    onChangeText={(lastName) => setLastName(lastName)}
                    maxLength={20}
                    ref={(ref) => (inputField.current[0] = ref)}
                    onSubmitEditing={() => inputField.current[1].focus()}
                />
            </View>
            <View style={globalStyling.inputView}>
                <TextInput
                    style={globalStyling.inputFieldText}
                    placeholder="Username"
                    placeholderTextColor="grey"
                    secureTextEntry={false}
                    autoComplete="off"
                    autoCorrect={false}
                    clearButtonMode="while-editing"
                    returnKeyType="next"
                    onChangeText={(username) => setUsername(username)}
                    maxLength={25}
                    ref={(ref) => (inputField.current[1] = ref)}
                    onSubmitEditing={() => inputField.current[2].focus()}
                />
            </View>
            <View style={globalStyling.inputView}>
                <TextInput
                    style={globalStyling.inputFieldText}
                    inputMode="email"
                    placeholder="Email"
                    placeholderTextColor="grey"
                    autoComplete="off"
                    autoCorrect={false}
                    clearButtonMode="while-editing"
                    returnKeyType="next"
                    onChangeText={(email) => setEmail(email)}
                    maxLength={50}
                    ref={(ref) => (inputField.current[2] = ref)}
                    onSubmitEditing={() => inputField.current[3].focus()}
                />
            </View>
            <View style={globalStyling.inputView}>
                <TextInput
                    style={globalStyling.inputFieldText}
                    inputMode="tel"
                    placeholder="Phone No."
                    placeholderTextColor="grey"
                    autoComplete="off"
                    autoCorrect={false}
                    clearButtonMode="while-editing"
                    returnKeyType="next"
                    onChangeText={(phoneNum) => setPhoneNum(phoneNum)}
                    maxLength={50}
                    ref={(ref) => (inputField.current[3] = ref)}
                    onSubmitEditing={() => inputField.current[4].focus()}
                />
            </View>
            <View style={globalStyling.inputView}>
                <TextInput
                    style={globalStyling.inputFieldText}
                    placeholder="Password"
                    placeholderTextColor="grey"
                    returnKeyType="next"
                    secureTextEntry={securePassword}
                    onChangeText={(password) => setPassword(password)}
                    ref={(ref) => (inputField.current[4] = ref)}
                    onSubmitEditing={() => inputField.current[5].focus()}
                />
                <TouchableOpacity
                    style={{position: 'absolute', right: 1}}
                    onPress={() => setSecurePassword(!securePassword)}>
                    <Icon
                        name={
                            securePassword ? 'eye-outline' : 'eye-off-outline'
                        }
                        size={30}
                        color="lightgray"
                    />
                </TouchableOpacity>
            </View>
            <View style={globalStyling.inputView}>
                <TextInput
                    style={globalStyling.inputFieldText}
                    placeholder="Confirm Password"
                    placeholderTextColor="grey"
                    secureTextEntry={securePassword}
                    onChangeText={(confirmPassword) =>
                        setConfirmPassword(confirmPassword)
                    }
                    onSubmitEditing={() => handleRegister()}
                    ref={(ref) => (inputField.current[5] = ref)}
                />
                <TouchableOpacity
                    style={{position: 'absolute', right: 1}}
                    onPress={() => setSecurePassword(!securePassword)}>
                    <Icon
                        name={
                            securePassword ? 'eye-outline' : 'eye-off-outline'
                        }
                        size={30}
                        color="lightgray"
                    />
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                style={styles.loginBtn}
                onPress={function () {
                    handleRegister();
                }}
                testID="registerButton">
                <Text style={styles.loginText}>PROCEED TO VERIFICATION</Text>
            </TouchableOpacity>
            <View style={styles.bottomText}>
                <Text style={styles.text}>Already have an account? </Text>
                <TouchableOpacity
                    onPress={function () {
                        navigation.navigate('Login');
                    }}>
                    <Text style={{color: '#FFC700'}}> Login here</Text>
                </TouchableOpacity>
            </View>
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
        marginBottom: '5%',
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
    loginBtn: {
        width: '80%',
        borderRadius: 25,
        height: '7%',
        minHeight: 50,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        marginTop: '0%',
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
    titleRed: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 20,
        position: 'relative',
        top: '-1%',
        textAlign: 'center',
    },
    loginText: {
        fontWeight: 'bold',
    },
});
