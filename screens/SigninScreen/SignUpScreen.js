import React, { useState, useContext } from "react";
import { AppContext } from "../../App";
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

export default function SignUpScreen( { navigation } ) {
  const { setIsSignedIn } = useContext(AppContext);     //get setIsSignedIn function from global context
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../../assets/logo-text-gray.png')} /> 
      <Text style={styles.title}>Register or Login</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="First Name"
          placeholderTextColor="black"
          onChangeText={(email) => setEmail(email)}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Last Name"
          placeholderTextColor="black"
          onChangeText={(email) => setEmail(email)}
        /> 
      </View> 
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
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Confirm Password"
          placeholderTextColor="black"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        /> 
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text> 
      </TouchableOpacity> 
      <TouchableOpacity style={styles.loginBtn} onPress={function(){ setIsSignedIn(true) }}>
        <Text style={styles.loginText}>PROCEED TO PAYMENT</Text> 
      </TouchableOpacity>
      <Text style={styles.text}>
        Already have an account?  
        <Text style={{color: "#FFC700"}} onPress= {function(){ navigation.navigate('Login') }}> Login here</Text>
      </Text> 
    
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
    marginBottom: 10,
    alignItems: "flex-start"
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
  },
  text: {
    color: "white",
    marginTop: 20,
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