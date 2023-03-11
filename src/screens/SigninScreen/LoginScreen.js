import React, { useState, useContext, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ImageComponent,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { AuthContext } from "../../context/AuthContext";

export default function LoginScreen( { navigation } ) {
  const { setIsSignedIn, domain, setDomain, setToken } = useContext(AuthContext);     //get setIsSignedIn function from global context
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(false);
  const [securePassword, setSecurePassword] = useState(true);

  useEffect(() => {
    Platform.OS === "android" ? setDomain('http://10.0.2.2:8000') : "";
  }, [])

  function handleLogin(){

    var body = JSON.stringify({
      'username': username,
      'password': password
    })
    
    fetch(`${domain}/api/token/both/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: body
        })
        .then(res => {
          console.log('STATUS',res.status);
          if (res.ok) {
            return res.json();
          } else {
            setError(true)
            throw res.json();
          }
        })
        .then(json => {
          console.log('LOGIN SUCCESS',json);
          setToken(json.access);
          setIsSignedIn(true);
        })
        .catch(error => {
          throw(error);
        })
    
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
      <Image style={styles.image} resizeMode="contain" source={require('../../assets/logo-text-gray.png')} /> 
      {error ? <Text style={styles.titleRed}>Error logging in. Please try again</Text> : <Text style={styles.title}>Login or Register</Text>}
      <View keyboardShouldPersistTaps='handled' style={styles.inputView}>
        <TextInput
          style={styles.TextInput} 
          inputMode="email"
          placeholder="Username"
          placeholderTextColor="black"
          autoComplete="off"
          autoCorrect={false}
          clearButtonMode="while-editing"
          returnKeyType="next"
          onChangeText={(username) => setUsername(username)}
          onBlur={() => setError(false)}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="black"
          secureTextEntry={securePassword}
          onChangeText={(password) => setPassword(password)}
          onBlur={() => setError(false)}
          onSubmitEditing={() => handleLogin()}
        /> 
        <TouchableOpacity  style={{position: "absolute",right: 1}} onPress={() => setSecurePassword(!securePassword)}>
          <Icon name={securePassword ? "eye-outline" : "eye-off-outline"} size={30} color="lightgray"/>
        </TouchableOpacity>
      </View> 
      <TouchableOpacity onPress= {function(){ navigation.navigate('ForgotPassword') }}>
        <Text style={styles.forgot_button}>Forgot Password?</Text> 
      </TouchableOpacity> 
      <TouchableOpacity style={styles.loginBtn} onPress={ () => handleLogin() }>
        <Text style={styles.loginText}>LET'S GO</Text> 
      </TouchableOpacity>
      <View style={styles.bottomText}>
        <Text style={styles.text}>Don't have an account? </Text> 
        <TouchableOpacity onPress= {function(){ navigation.navigate('SignUp') }}>
          <Text style={{color: "#FFC700"}}> Register here</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    position: "relative",
    marginBottom: "20%",
  },
  inputView: {
    backgroundColor: "white",
    borderRadius: 10,
    width: "80%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
  },
  TextInput: {
    height: 50,
    width: "100%",
    flex: 1,
    padding: 10,
    textAlign: "center",
    color: "black",
    borderColor: "yellow",
    borderWidth: 0,
  },
  bottomText: {
    flexDirection:'row',
    position: "relative",
    marginBottom: "2%"
  },
  text: {
    color: "white",
  },
  forgot_button: {
    height: 30,
    color: "#FFC700",
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: "7%",
    minHeight: 50,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    marginTop: "10%",
    marginBottom: "3%",
    backgroundColor: "#FFC700",
  },
  title: {
    color: "#FFC700",
    fontWeight: "bold",
    fontSize: 20,
    position: "relative",
    top: "-5%"
  },
  titleRed: {
    color: "red",
    fontWeight: "bold",
    fontSize: 20,
    position: "relative",
    top: "-5%"
  },
  loginText: {
    fontWeight: "bold",
  }
});