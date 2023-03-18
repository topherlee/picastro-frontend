import React, {useEffect, useState, useContext} from 'react';
import {
  StyleSheet,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ImageComponent,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import { AuthContext } from '../../context/AuthContext';

export default function LogoutScreen( { navigation } )
{
  
  
  const { setIsSignedIn, domain, setDomain, setToken, token, refreshToken} = useContext(AuthContext);     //get setIsSignedIn function from global context
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(false);
  const [securePassword, setSecurePassword] = useState(true);

  
  useEffect(() => {
    Platform.OS === "android" ? setDomain('http://10.0.2.2:8000') : "";
  }, [])


  function handleLogout(){
    
    console.log("REFRESHTOKEN",refreshToken);
    var body = JSON.stringify({
      'refresh':`${refreshToken}`
    })

    fetch(`${domain}/api/auth/logout/`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${token}`
      },
      body: body
  })
  .then(res => {
    console.log('STATUS',res.status);
    if (res.ok) {
      return res.json();
    } else {
      setError(true)
      throw res.json();
    }
  })
  .then(json => {
    console.log('JSON',json);
    setToken(json.access);
    setRefreshToken(json.refresh);
    setIsSignedIn(false);
  })
  .catch(e => {
    setIsSignedIn(false);
  });

}

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
      <Image style={styles.image} resizeMode="contain" source={require('../../assets/logo-text-gray.png')} /> 
      <TouchableOpacity style={styles.logoutBtn} onPress={ () => handleLogout() }>
      <Text style={styles.logoutText}>LOG OUT</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress= {function(){ navigation.navigate('Home') }}>
          <Text style={{color: "#FFC700"}}> Cancel</Text>
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
  logoutBtn: {
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
  
});