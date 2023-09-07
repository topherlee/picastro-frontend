import React, { useState, useContext } from 'react';
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Text
} from "react-native";
import { AuthContext } from '../../context/AuthContext';


export default function LogoutScreen({ navigation }) {

  const { domain, resetStates, token, fetchInstance } = useContext(AuthContext);     //get setIsSignedIn function from global context

  async function handleLogout() {

    console.log("REFRESHTOKEN", token.refresh);
    var body = new FormData();
    body.append("refresh", token.refresh);
    
    try {
        var {response, data} = await fetchInstance(`/api/auth/logout/`, {
            method: 'POST',
            headers: {
                'Authorization': `Token ${token.access}`,
                'Content-Type': 'application/json',
            },
            body: body
        })
        console.log('STATUS', response.status);

        if (response.ok) {
            resetStates()
        } else {
            throw response.status;
        }
    } catch (error) {
        console.log(error);
    }
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
      <Image style={styles.image} resizeMode="contain" source={require('../../assets/logo-text-gray.png')} />
      <TouchableOpacity style={styles.logoutBtn} onPress={() => handleLogout()}>
        <Text style={styles.logoutText}>LOG OUT</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={function () { navigation.navigate('Home') }}>
        <Text style={{ color: "#FFC700" }}> Cancel</Text>
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
    flexDirection: 'row',
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
  logoutText: {
    fontWeight: "bold"
  }

});