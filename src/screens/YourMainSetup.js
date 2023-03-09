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
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { AuthContext } from "../context/AuthContext";


const YourMainSetup = ({ navigation }) => {
  const { setIsSignedIn } = useContext(AuthContext);
     

  return (
    
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
      
      <Image style={styles.image} source={require('../assets/logo-text-gray.png')} /> 
      <View style={styles.textcontainer}>
            <Text style={styles.title}>Your Main Setup</Text>   
            <Text style={styles.text}>Press the + sign at the bottom of the form to add a new setup. </Text>  
      </View>

      <ScrollView style={{
        backgroundColor: "black",
        borderColor:"blue", 
        borderWidth: 0,
        width: "80%",
       
        
      }}
      >            
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Main Telescope Name"
          placeholderTextColor="black"
          
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Main Mount Name "
          placeholderTextColor="black"
          
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Guide Camera Name"
          placeholderTextColor="black"
         
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Off Axis Guide Camera"
          placeholderTextColor="black"
          
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Filter Wheel Name"
          placeholderTextColor="black"
          
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Filters"
          placeholderTextColor="black"
          
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Barlow lense"
          placeholderTextColor="black"
         
        /> 
        
      </View>
      <View style={styles.inputView}>
      <TextInput
          style={styles.TextInput}
          placeholder="Other Equipment Here"
          placeholderTextColor="black"
        /> 
        
      </View>
      
      <TouchableOpacity style={styles.loginBtn} onPress= {function(){ navigation.navigate('UserScreen') }}>
        <Text style={styles.loginText}>Save</Text> 
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
  // marginBottom: "20%",
},
inputView: {
  backgroundColor: "white",
  borderRadius: 10,
  width: "100%",
  height: 45,
  marginBottom: 20,
  // alignItems: "center",
  justifyContent: "center",
  // borderWidth: 5,
  // borderColor:"yellow" 
},
textcontainer:{
  marginTop:"10%",
  marginBottom:"5%",
  alignItems: "center",
  justifyContent: "center",
  // position: "relative",
},

TextInput: {
  height: 50,
  width: "100%",
  flex: 1,
  padding: 10,
  textAlign: "center",
  justifyContent: "center",
  
},
bottomText: {
  flexDirection:'row',
  position: "relative",
  marginBottom: "2%"
},
text: {
  color: "white",
  justifyContent: "center",
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
  // marginTop: "10%",
  marginBottom: "3%",
  backgroundColor: "#FFC700",
},
title: {
  color: "yellow",
  fontWeight: "bold",
  fontSize: 20,
  position: "relative",
  top: "-5%"
},
loginText: {
  fontWeight: "bold",
}
});
export default YourMainSetup;