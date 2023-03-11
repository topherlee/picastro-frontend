import React, { useState, useContext } from "react";
import DropDownPicker from 'react-native-dropdown-picker';


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
  FlatList,
  Footer,
 
  KeyboardAvoidingView,
  
} from "react-native";
import { AuthContext } from "../context/AuthContext";


const EditProfile = ({ navigation }) => {
  const { setIsSignedIn } = useContext(AuthContext); 
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: '0-1 year', value: '0-1 year'},
    {label: '2-5 years', value: '2-5 yearsa'},
    {label: '5-10 years', value: '5-10 years'},
    {label: '10 years -above', value: '10 years -above'},

  ]);   


  return (
    
    
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
      
      
      <Image style={styles.image} source={require('../assets/logo-text-gray.png')} /> 
      <TouchableOpacity style={styles.loginBtn} onPress= {function(){ navigation.navigate('YourMainSetup') }}>
        <Text style={styles.loginText}>Change Image</Text> 
      </TouchableOpacity>
        <ScrollView style={{
          height: 45,
          backgroundColor: "black",
          borderColor:"blue", 
          borderWidth: 0,
          width: "80%",
        // <Footer />
       }}
      >
     
     {/* <FlatList
      ListHeaderComponent={
      <>
      open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          placeholder="Level of Experience"
        
      </>}
      
      
      ListFooterComponent={
        <Footer/>
      }/> */}
        
            
        
      <Text style={styles.title}>Edit Profile</Text>
      <View style={styles.headerContainer}>
      <View style={styles.inputView1}>
        {/* <TextInput
          style={styles.TextInput1}
          placeholder="Level of Experience"
          placeholderTextColor="black"
          
        />  */}
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          placeholder="Level of Experience"
        />
      </View> 
      <View style={styles.inputView1}>
        <TextInput
          style={styles.TextInput1}
          placeholder="DropDown?"
          placeholderTextColor="black"
         
        /> 
      </View> 
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
          placeholder="Shop Web Link (Optional)"
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
headerContainer: {
  backgroundColor: 'black',
  display: "flex",
  top: 0,
  width: '100%',
  height: 60,
  alignItems: 'center',
  alignContent: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
  gap: 10,
},
image: {
  position: "relative",
  marginBottom: "5%",
},
inputView: {
  backgroundColor: "white",
  borderRadius: 10,
  width: "100%",
  height: 40,
  marginBottom: 7,
  alignItems: "center",
},
inputView1: {
  backgroundColor: "white",
  borderRadius: 10,
  width: "45%",
  height: 35,
  marginBottom: 20,
  alignItems: "center",
  
},

TextInput: {
  height: 50,
  width: "100%",
  flex: 1,
  padding: 10,
  textAlign: "center",
  fontWeight: "bold",
  
},
TextInput1: {
  height: 30,
  width: "100%",
  flex: 1,
  // padding: 10,
  textAlign: "center",
  fontSize:10,
  fontWeight: "bold",
  
},

text: {
  color: "black",
  
},
forgot_button: {
  height: 30,
  color: "#FFC700",
},
loginBtn: {
  width: "100%",
  borderRadius: 25,
  height: "7%",
  // minHeight: 50,
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  marginTop: "0%",
  marginBottom: "0%",
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