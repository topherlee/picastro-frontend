import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { AuthContext } from "../../context/AuthContext";
import globalStyling from "../../../constants/globalStyling";


export default function UserNameScreen( { navigation } ) {
  const { setIsSignedIn } = useContext(AuthContext);     //get setIsSignedIn function from global context
  const [setEmail] = useState(null);
  // const [password, setPassword] = useState(null);

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
      <Image style={styles.image} resizeMode="contain" source={require('../../assets/logo-text-gray.png')} /> 
      <Text style={styles.title}>Create a Username</Text>
      <View style={globalStyling.inputView}>
        <TextInput
          style={globalStyling.inputFieldText}
          placeholder="Enter your Username"
          placeholderTextColor="black"
          onChangeText={(email) => setEmail(email)}
        /> 
      </View> 
      <View style={globalStyling.inputView}>
        <TextInput
          style={globalStyling.inputFieldText}
          placeholder="Confirm Username"
          placeholderTextColor="black"
          onChangeText={(email) => setEmail(email)}
        /> 
      </View> 
      <TouchableOpacity style={styles.loginBtn} onPress={function(){ setIsSignedIn(true) }}>
        <Text style={styles.loginText}>LET'S GO</Text> 
      </TouchableOpacity> 
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
  loginText: {
    fontWeight: "bold",
  }
});