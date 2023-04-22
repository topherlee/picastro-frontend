import React, { useState, useContext } from "react";
import DropDownPicker from 'react-native-dropdown-picker';
import { Dropdown } from 'react-native-element-dropdown';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  ImageComponent,
  Alert,
  FlatList,
  Footer,
  SafeAreaView,
  KeyboardAvoidingView,
} from "react-native";

import { AuthContext } from "../context/AuthContext";
import globalStyling from "../../constants/globalStyling";

const EditProfile = ({ navigation }) => {

  const data = [
    { label: '0-1 years', value: '1' },
    { label: '2-5 years', value: '2' },
    { label: '5-10 years', value: '3' },
    { label: '10 years plus', value: '4' },
  ];

  const { setIsSignedIn } = useContext(AuthContext); 
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  return (
    
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>      
    
      <Image style={styles.image} source={require('../assets/logo-text-gray.png')} /> 
      <Image style={styles.image1} source={require('../assets/Sample/sampleuser.png')} />
      <TouchableOpacity style={styles.loginBtn1} onPress= {function(){ navigation.navigate('YourMainSetup') }}>
        <Text style={styles.loginText}>Change Image</Text> 
      </TouchableOpacity>
      
      <ScrollView contentInsetAdjustmentBehavior="automatic" style ={{
          height: 40,
          backgroundColor: "black",
          borderColor:"blue", 
          borderWidth: 0,
          width: "85%",
          flex: 1,
       }}
      >            
    
      <View style={styles.headerContainer}>
      <View style={styles.dropdowninputview}>
        
        <Dropdown
          style={[styles.dropdown, isFocus ]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Level of experience' : ''}
          value={value}
          maxHeight={300}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
          
        />
      </View>
      <View style={styles.DropDownView}>
        <TextInput
          style={globalStyling.inputFieldText}
          placeholder="DropDown?"
          placeholderTextColor="black"
         
        /> 
      </View> 
      </View> 

      <View style={styles.inputView}>
        <TextInput
          style={globalStyling.inputFieldText}
          placeholder="Name"
          placeholderTextColor="black"
          
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={globalStyling.inputFieldText}
          placeholder="Username"
          placeholderTextColor="black"
          
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={globalStyling.inputFieldText}
          placeholder="Pronouns"
          placeholderTextColor="black"
         
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={globalStyling.inputFieldText}
          placeholder="Bio"
          placeholderTextColor="black"
          
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={globalStyling.inputFieldText}
          placeholder="Website One"
          placeholderTextColor="black"
          
        /> 
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={globalStyling.inputFieldText}
          placeholder="Website Two"
          placeholderTextColor="black"
        /> 
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={globalStyling.inputFieldText}
          placeholder="Shop Web Link (Optional)"
          placeholderTextColor="black"
        /> 
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={globalStyling.inputFieldText}
          placeholder="Dropbox Link or Google Drive Link(-Optional)"
          placeholderTextColor="black"
        /> 
      </View>
      
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
dropdowninputview: {
  backgroundColor: "white",
  borderRadius: 10,
  width: "40%",
  marginTop: 2,
  marginBottom: 20,
  alignItems: "center",
  marginRight:"8%"
},
dropdown: {
  backgroundColor: "white",
  height: 28,
  alignItems: "center",
  borderRadius: 10,
  paddingHorizontal: 8,
},

label: {
  position: 'absolute',
  backgroundColor: 'white',
  zIndex: 999,
  paddingHorizontal: 8,
  fontSize: 14,
},
placeholderStyle: {
  fontSize: 10,
  color: "black",
},
selectedTextStyle: {
  fontSize: 14,
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
  marginTop: "14%",
  position: "relative",
  width: 117.53,
  height:34.2,
  marginBottom: "5%",
},
image1: {
  position: "relative",
  width: 80,
  height: 80,
  marginBottom: "2%",
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
  marginTop: 3,
  marginBottom: 20,
  alignItems: "center",
  
},
DropDownView: {
  backgroundColor: "white",
  borderRadius: 10,
  width: "35%",
  height: 28,
  marginRight: "10%",
  marginTop: 3,
  marginBottom: 20,
  alignItems: "center",
},
text: {
  color: "black",  
},
forgot_button: {
  height: 30,
  color: "#FFC700",
},
loginBtn: {
  position: 'relative', 
  width: 120,
  borderRadius: 25,
  height: 35,
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "5%",
  backgroundColor: "#FFC700",
},
loginBtn1: {
  margin: "2%",
  position: 'relative', 
  width: 120,
  borderRadius: 25,
  height: 35,
  alignItems: "center",
  justifyContent: "center",
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