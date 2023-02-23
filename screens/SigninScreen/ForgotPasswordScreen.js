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
  Alert,
  TouchableWithoutFeedback
} from "react-native";

import { AuthContext } from "../../src/context/AuthContext";

export default function ForgotPasswordScreen( { navigation } ) {
  const { setIsSignedIn } = useContext(AuthContext);     //get setIsSignedIn function from global context
  const [email, setEmail] = useState(null);
 
  const pressHandler = () =>{
    Alert.alert("Details","A reset link has been sent to your email",)
  } 
  // const noHandler = () =>{
  //   Alert.alert("Details","A reset link has been sent to your email",)[
  //   onPress= {function(){ navigation.navigate('Login') }}]
  // }

  return (
    <View style={styles.container}>
      <Image style={styles.image} resizeMode="contain" source={require('../../assets/logo-text-gray.png')} /> 
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
      {/* <TouchableWithoutFeedback onPress= {function(){ navigation.navigate('ForgotPassword') }}/> */}
      
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
    position: "absolute",
    top: "10%",
    marginBottom: "10%",
  },
  inputView: {
    backgroundColor: "white",
    borderRadius: 10,
    width: "80%",
    height: "6%",
    marginBottom: "4%",
  },
  TextInput: {
    flex: 1,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: "center",
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
    height: 30,
    marginBottom: 0,
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
    fontSize: 18,
  }
});