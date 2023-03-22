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
} from "react-native";
import { AuthContext } from "../../context/AuthContext";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default function SignUpScreen( { navigation } ) {
  const { domain, setToken, setIsSignedIn, setDomain } = useContext(AuthContext);     //get setIsSignedIn function from global context
  const [error, setError] = useState(false);
  const [securePassword, setSecurePassword] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  
  function handleRegister() {
    var body = JSON.stringify({
      'username': username,
      'password': password,
      'first_name': firstName,
      'last_name': lastName,
      'email': email
    })
    
    if (password === confirmPassword) {
      fetch(`${domain}/api/auth/register/`, {
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
            console.log('REGISTRATION SUCCESS',json);
            setToken(json.token);
            setIsSignedIn(true);
            //navigation.navigate('UserName')
          })
          .catch(error => {
            throw(error)
          })
      } else {
        console.log("password error")
        setError(true);
      }
  }

  useEffect(() => {
    Platform.OS === "android" ? setDomain('http://10.0.2.2:8000') : "";
  }, [])

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
      <Image style={styles.image} resizeMode="contain" source={require('../../assets/logo-text-gray.png')} /> 
      <Text style={!error ? styles.title : styles.titleRed}>
        {!error ? "Register for an account" : "Unable to register, please check your details and try again"}
      </Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="First Name"
          placeholderTextColor="grey"
          autoComplete="off"
          autoCorrect={false}
          clearButtonMode="while-editing"
          returnKeyType="next"
          onChangeText={(firstName) => setFirstName(firstName)}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Last Name"
          placeholderTextColor="grey"
          autoComplete="off"
          autoCorrect={false}
          clearButtonMode="while-editing"
          returnKeyType="next"
          onChangeText={(lastName) => setLastName(lastName)}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Username"
          placeholderTextColor="grey"
          secureTextEntry={false}
          autoComplete="off"
          autoCorrect={false}
          clearButtonMode="while-editing"
          returnKeyType="next"
          onChangeText={(username) => setUsername(username)}
        /> 
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          inputMode="email"
          placeholder="Email"
          placeholderTextColor="grey"
          autoComplete="off"
          autoCorrect={false}
          clearButtonMode="while-editing"
          returnKeyType="next"
          onChangeText={(email) => setEmail(email)}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="grey"
          returnKeyType="next"
          secureTextEntry={securePassword}
          onChangeText={(password) => setPassword(password)}
        /> 
        <TouchableOpacity  style={{position: "absolute",right: 1}} onPress={() => setSecurePassword(!securePassword)}>
          <Icon name={securePassword ? "eye-outline" : "eye-off-outline"} size={30} color="lightgray"/>
        </TouchableOpacity>
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Confirm Password"
          placeholderTextColor="grey"
          secureTextEntry={securePassword}
          onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}
          onSubmitEditing={() => handleRegister()}
        /> 
        <TouchableOpacity  style={{position: "absolute",right: 1}} onPress={() => setSecurePassword(!securePassword)}>
          <Icon name={securePassword ? "eye-outline" : "eye-off-outline"} size={30} color="lightgray"/>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress= {function(){ handleRegister() }}>
        <Text style={styles.loginText}>PROCEED TO PAYMENT</Text> 
      </TouchableOpacity>
      <View style={styles.bottomText}>
        <Text style={styles.text}>Already have an account? </Text> 
        <TouchableOpacity onPress= {function(){ navigation.navigate('Login') }}>
          <Text style={{color: "#FFC700"}}> Login here</Text>
        </TouchableOpacity>
      </View>
    
    </KeyboardAvoidingView> 
  );
}

const styles = StyleSheet.create({container: {
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
  top: "-5%",
  textAlign: "center"
},
titleRed: {
  color: "red",
  fontWeight: "bold",
  fontSize: 20,
  position: "relative",
  top: "-5%",
  textAlign: "center"
},
loginText: {
  fontWeight: "bold",
}
});