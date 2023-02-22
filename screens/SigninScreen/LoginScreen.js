import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ImageComponent,
} from "react-native";
import { AuthContext } from "../../src/context/AuthContext";

export default function LoginScreen( { navigation } ) {
  const { setIsSignedIn } = useContext(AuthContext);     //get setIsSignedIn function from global context
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../../assets/logo-text-gray.png')} /> 
      <Text style={styles.title}>Register or Login</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput} 
          inputMode="email"
          placeholder="Email"
          placeholderTextColor="black"
          onChangeText={(email) => setEmail(email)}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="black"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        /> 
      </View> 
      <TouchableOpacity onPress= {function(){ navigation.navigate('ForgotPassword') }}>
        <Text style={styles.forgot_button}>Forgot Password?</Text> 
      </TouchableOpacity> 
      <TouchableOpacity style={styles.loginBtn} onPress={function(){ setIsSignedIn(true) }}>
        <Text style={styles.loginText}>LET'S GO</Text> 
      </TouchableOpacity>
      <View style={{flexDirection:'row', marginTop: 20}}>
        <Text style={styles.text}>Don't have an account? </Text> 
        <TouchableOpacity onPress= {function(){ navigation.navigate('SignUp') }}>
          <Text style={{color: "#FFC700"}}> Register here</Text>
        </TouchableOpacity>
      </View>
    </View> 
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
    marginBottom: 40,
  },
  inputView: {
    backgroundColor: "white",
    borderRadius: 10,
    width: "80%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    width: "100%",
    flex: 1,
    padding: 10,
    textAlign: "center",
    // borderWidth: 2,
    // borderColor: "yellow"
  },
  text: {
    color: "white",
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
    color: "#FFC700",
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FFC700",
  },
  title: {
    color: "#FFC700",
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10
  },
  loginText: {
    fontWeight: "bold",
  }
});