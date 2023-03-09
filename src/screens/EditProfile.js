import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  ScrollView,
  TouchableOpacity,
  ImageComponent,
  Alert,
  KeyboardAvoidingView,
} from "react-native";
import { AuthContext } from "../context/AuthContext";


  const EditProfile = ({ navigation }) => {
  const { setIsSignedIn } = useContext(AuthContext);     


  return (
    
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
      
      <Image style={styles.image} source={require('../assets/logo-text-gray.png')} /> 
      <ScrollView style={{
        // width: "100%",
        height: 45,
        // backgroundColor: "black",
        // borderColor:"blue", 
        // borderWidth: 0,
        backgroundColor: "black",
        borderColor:"blue", 
        borderWidth: 0,
        width: "80%",
       }}
      >
      <Text style={styles.title}>Edit Profile</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Level of Experience"
          placeholderTextColor="black"
          
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="DropDown?"
          placeholderTextColor="black"
         
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Name"
          placeholderTextColor="black"
          
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Username"
          placeholderTextColor="black"
          
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Pronouns"
          placeholderTextColor="black"
         
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Bio"
          placeholderTextColor="black"
          
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Website One"
          placeholderTextColor="black"
          
        /> 
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Website Two"
          placeholderTextColor="black"
        /> 
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Shop web link (Optional)"
          placeholderTextColor="black"
        /> 
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Dropbox Link or Google Drive Link(-Optional)"
          placeholderTextColor="black"
        /> 
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress= {function(){ navigation.navigate('YourMainSetup') }}>
        <Text style={styles.loginText}>Next</Text> 
      </TouchableOpacity>
      </ScrollView>
      
    
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
  width: "100%",
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
  
},
// bottomText: {
//   flexDirection:'row',
//   position: "relative",
//   marginBottom: "2%"
// },
text: {
  color: "white",
},
forgot_button: {
  height: 30,
  color: "#FFC700",
},
loginBtn: {
  width: "100%",
  borderRadius: 25,
  height: "7%",
  minHeight: 50,
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  marginTop: "0%",
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
export default EditProfile;