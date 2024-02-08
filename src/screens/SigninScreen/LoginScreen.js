import React, { useState, useContext, useEffect, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import * as Keychain from 'react-native-keychain';
import { AuthContext } from '../../context/AuthContext';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import globalStyling from "../../../constants/globalStyling";
import { loadCurrentUser } from "../../utils";

export default function LoginScreen({ navigation, route }) {
  const {
    setIsSignedIn,
    domain,
    resetStates,
    setToken,
    fetchInstance,
    setValidSubscription
  } = useContext(AuthContext);     //get setIsSignedIn function from global context
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(false);
  const [securePassword, setSecurePassword] = useState(true);
  const passwordInput = useRef(null);


  async function handleLogin() {

    var body = JSON.stringify({
      'username': username,
      'password': password
    })

    await fetch(`${domain}/api/auth/login/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body
    })
      .then(async (res) => {
        console.log('STATUS', res.status);
        if (res.ok) {
          return res.json();
        } else {
          setError(true)
          console.log('error')
          throw await res.json();
        }
      })
      .then(async json => {
        console.debug('JSON', json);
        await Keychain.setGenericPassword('token', JSON.stringify(json))
        setToken(json);
        setIsSignedIn(true);

        const curUser = await loadCurrentUser(json, fetchInstance)
        setValidSubscription(curUser.valid_subscription)
        console.debug("validSubscription", curUser.valid_subscription);
      })
      .catch(error => {
        console.log("LoginScreen error", error);
        setError(true)
      })
  }

  useEffect(() => {
    resetStates();
  }, []);


  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={require('../../assets/logo-text-gray.png')}
      />
      {error ? (
        <Text style={styles.titleRed}>
          Error logging in. Please try again
        </Text>
      ) : (
        <Text style={styles.title}>Register or Login</Text>
      )}
      <View
        keyboardShouldPersistTaps='handled'
        style={globalStyling.inputView}>
        <TextInput
          style={globalStyling.inputFieldText}
          textContentType={'username'}
          placeholder="Username"
          placeholderTextColor="grey"
          autoCapitalize={'none'}
          autoCorrect={false}
          clearButtonMode="while-editing"
          returnKeyType="next"
          defaultValue={route.params?.username && route.params.username}
          onChangeText={(username) => setUsername(username)}
          onBlur={() => setError(false)}
          blurOnSubmit={false}
          onSubmitEditing={() => {
            passwordInput.current.focus();
          }}
        />
      </View>
      <View style={globalStyling.inputView}>
        <TextInput
          style={globalStyling.inputFieldText}
          textContentType={'password'}
          autoCapitalize={'none'}
          autoCorrect={false}
          placeholder="Password"
          placeholderTextColor="grey"
          secureTextEntry={securePassword}
          onChangeText={(password) => setPassword(password)}
          onSubmitEditing={handleLogin}
          onBlur={() => setError(false)}
          ref={passwordInput}
        />
        <TouchableOpacity style={{ position: "absolute", right: 1 }} onPress={() => setSecurePassword(!securePassword)}>
          <Icon name={securePassword ? "eye-outline" : "eye-off-outline"} size={30} color="lightgray" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={function () { navigation.navigate('ForgotPassword') }}>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => handleLogin()}
        testID="loginButton"
      >
        <Text style={styles.loginText}>LET'S GO</Text>
      </TouchableOpacity>
      <View style={styles.bottomText}>
        <Text style={styles.text}>Don't have an account? </Text>
        <TouchableOpacity onPress={function () { navigation.navigate('SignUp') }}>
          <Text style={{ color: "#FFC700" }}> Register here</Text>
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
    marginBottom: '20%',
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
    marginTop: '10%',
    marginBottom: '3%',
    backgroundColor: '#FFC700',
  },
  title: {
    color: '#FFC700',
    fontWeight: 'bold',
    fontSize: 20,
    position: 'relative',
    top: '-5%',
  },
  titleRed: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 20,
    position: 'relative',
    top: '-5%',
  },
  loginText: {
    fontWeight: 'bold',
  },
});
