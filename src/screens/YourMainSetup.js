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
import globalStyling from "../../constants/globalStyling";


const YourMainSetup = ({ navigation }) => {
  const { setIsSignedIn } = useContext(AuthContext);
     

  return (
    
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>      
      <Image style={styles.image} source={require('../assets/logo-text-gray.png')} /> 
      
      <View style={styles.textcontainer}>
            <Text style={styles.title}>Your Main Setup</Text>   
            <Text style={styles.text}>To add a new setup  </Text>  
            <Text style={styles.text}> Press the + sign at </Text>
            <Text style={styles.text}> the bottom of the form . </Text>   
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
          style={globalStyling.inputFieldText}
          placeholder="Main Telescope Name"
          placeholderTextColor="black"
          
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={globalStyling.inputFieldText}
          placeholder="Main Mount Name "
          placeholderTextColor="black"
          
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={globalStyling.inputFieldText}
          placeholder="Guide Camera Name"
          placeholderTextColor="black"
         
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={globalStyling.inputFieldText}
          placeholder="Off Axis Guide Camera"
          placeholderTextColor="black"
          
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={globalStyling.inputFieldText}
          placeholder="Filter Wheel Name"
          placeholderTextColor="black"
          
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={globalStyling.inputFieldText}
          placeholder="Filters"
          placeholderTextColor="black"
          
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={globalStyling.inputFieldText}
          placeholder="Barlow lense"
          placeholderTextColor="black"
         
        /> 
        
      </View>
      <View style={styles.inputView}>
      <TextInput
          style={globalStyling.inputFieldText}
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
  width: 155,
  height:45,
  marginBottom: "5%",
},

inputView: {
  backgroundColor: "white",
  borderRadius: 10,
  width: "100%",
  height: 40,
  marginBottom: 10,
  // alignItems: "center",
  justifyContent: "center",
  // borderWidth: 5,
  // borderColor:"yellow" 
},
textcontainer:{
  // marginTop:"5%",
  marginBottom:"5%",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
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
  // marginTop:'10%'
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
  // marginTop: "10%",
  marginBottom: "5%",
  backgroundColor: "#FFC700",
},
title: {
  color: "FFC700",
  fontWeight: "bold",
  fontSize: 20,
  position: "relative",
  marginBottom: "5%",
  top: "10%"
  
},
loginText: {
  fontWeight: "bold",
}
});
export default YourMainSetup;