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

export default function SignUpScreen( { navigation } ) {
  const { setIsSignedIn } = useContext(AuthContext);     //get setIsSignedIn function from global context
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Image style={styles.image} resizeMode="contain" source={require('../../assets/logo-text-gray.png')} /> 
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
      <TouchableOpacity style={styles.loginBtn} onPress= {function(){ navigation.navigate('UserName') }}>
        <Text style={styles.loginText}>PROCEED TO PAYMENT</Text> 
      </TouchableOpacity>
      <View style={styles.bottomText}>
        <Text style={styles.text}>Already have an account? </Text> 
        <TouchableOpacity onPress= {function(){ navigation.navigate('Login') }}>
          <Text style={{color: "#FFC700"}}> Login here</Text>
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
    position: "absolute",
    top: "10%",
    marginBottom: "10%",
  },
  inputView: {
    backgroundColor: "white",
    borderRadius: 10,
    top: "4%",
    width: "80%",
    height: "6%",
    marginBottom: "4%",
  },
  TextInput: {
    flex: 1,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  bottomText: {
    flexDirection:'row',
    position: "absolute",
    bottom: "10%" 
  },
  text: {
    color: "white",
  },
  forgot_button: {
    position: "relative",
    top: "100%",
    height: 30,
    color: "#FFC700",
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: "7%",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: "15%",
    backgroundColor: "#FFC700",
  },
  title: {
    color: "#FFC700",
    fontWeight: "bold",
    fontSize: 20,
    position: "absolute",
    top: "27%",
  },
  loginText: {
    fontWeight: "bold",
  }
});