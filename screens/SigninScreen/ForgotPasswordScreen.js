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

export default function ForgotPasswordScreen( { navigation } ) {
  const { setIsSignedIn } = useContext(AuthContext);     //get setIsSignedIn function from global context
  const [email, setEmail] = useState(null);
  // const [password, setPassword] = useState(null);

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../../assets/logo-text-gray.png')} /> 
      <Text style={styles.title}>Reset Password</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput} 
          inputMode="email"
          placeholder="Enter your email Address"
          placeholderTextColor="black"
          onChangeText={(email) => setEmail(email)}
        /> 
      </View> 
      
      <TouchableOpacity style={styles.loginBtn} onPress= {function(){ navigation.navigate('Login') }}>
        <Text style={styles.loginText}>Submit</Text> 
      </TouchableOpacity> 
      
      <View style={{flexDirection:'row', marginTop: 20}}>
        
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
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    marginTop: 40,
    borderRadius: 25,

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
    marginBottom: 50
  },
  loginText: {
    fontWeight: "bold",
    fontSize: 18,
  }
});