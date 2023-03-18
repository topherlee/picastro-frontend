import React, { useState, useContext, useEffect } from "react";
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
  Dimensions,
  SafeAreaView
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { AuthContext } from "../context/AuthContext";
import { launchImageLibrary } from "react-native-image-picker";
import { AutoscaleImage } from "../components/atoms";
import jwtDecode from "jwt-decode";

var userID;

const ImageUploadScreen = ({ navigation }) => {
  const { setIsSignedIn, domain, token, setDomain, refreshAccessToken } = useContext(AuthContext);
  const [photo, setPhoto] = useState(null);
  const [imageDescription, setImageDescription] = useState('');
  const [astroNameShort, setAstroNameShort] = useState('');
  const [astroName, setAstroName] = useState('');
  const [exposureTime, setExposureTime] = useState('');
  const [moonPhase, setMoonPhase] = useState('');
  const [cloudCoverage, setCloudCoverage] = useState('');
  const [bortle, setBortle] = useState('');
  

  useEffect(() => {
    Platform.OS === "android" ? setDomain('http://10.0.2.2:8000') : "";

    userID = jwtDecode(token.access).user_id;
  }, [token])

  const uploadedHandler = () => {
    Alert.alert("Upload Successful","Your image has been uploaded.",)
  }

  const pickImage = () => {

    launchImageLibrary({ mediaType: "photo", presentationStyle: "popover", includeExtra: true }, (response) => {

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        // photo=response.assets[0];   
        setPhoto(response.assets[0])
        // console.log('Response = ', response);
      }
    });
  }

  const uploadImage = () => {
    var formData = new FormData();
    formData.append("image", {
      'uri': photo.uri,
      'name': photo.fileName,
      'type': photo.type
    })
    formData.append("imageDescription", imageDescription)
    formData.append("astroNameShort", astroNameShort)
    formData.append("astroName", astroName)
    formData.append("exposureTime", exposureTime)
    formData.append("moonPhase", moonPhase)
    formData.append("cloudCoverage", cloudCoverage)
    formData.append("bortle", bortle)
    formData.append("starCamp", "Aberdeen")
    formData.append("award", "none")
    formData.append("poster", userID)

    fetch(`${domain}/posts/`, {
      method: 'POST',
      headers: {
        'Authorization': `Token ${token.access}`,
        'Content-Type': 'multipart/form-data'
      },
      body: formData
    }).then(res => {
      return res.json()
    }).then((result) => {
      console.log('UPLOAD SUCCESSFUL', result)
      uploadedHandler();
    }).catch(err => {
      console.log(err);
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingVertical: "3%", }}>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{
          display: "flex",
          alignItems: "center",
          borderWidth: 0,
          borderColor:"yellow" }}
        >
          <View style={styles.textcontainer}>
            <Text style={styles.title}>Upload Image</Text>
            <TouchableOpacity onPress={pickImage}>
              {photo ?
                <AutoscaleImage key={photo.uri} uri={photo.uri} width={Dimensions.get('window').width} />
                :
                <Icon name="file-image-plus" size={100} color={'#FFC700'} />
              }
            </TouchableOpacity>
            {photo ?
              <TouchableOpacity style={styles.loginBtn2} onPress={pickImage}>
                <Text style={styles.loginText}>Pick another image</Text>
              </TouchableOpacity>
              :
              null
            }
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Image Description"
              placeholderTextColor="grey"
              onChangeText={newImageDescription => setImageDescription(newImageDescription)}
              defaultValue={imageDescription}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Messier Object Number (e.g. 'M17')"
              placeholderTextColor="grey"
              onChangeText={newAstroNameShort => setAstroNameShort(newAstroNameShort)}
              defaultValue={astroNameShort}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Object Common Name (e.g. 'Rosette Nebula')"
              placeholderTextColor="grey"
              onChangeText={newAstroName => setAstroName(newAstroName)}
              defaultValue={astroName}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Exposure Time"
              placeholderTextColor="grey"
              onChangeText={newExposureTime => setExposureTime(newExposureTime)}
              defaultValue={exposureTime}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Moon Phase"
              placeholderTextColor="grey"
              onChangeText={newMoonPhase => setMoonPhase(newMoonPhase)}
              defaultValue={moonPhase}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Cloud Coverage"
              placeholderTextColor="grey"
              onChangeText={newCloudCoverage => setCloudCoverage(newCloudCoverage)}
              defaultValue={cloudCoverage}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Bortle Scale"
              placeholderTextColor="grey"
              onChangeText={newBortle => setBortle(newBortle)}
              defaultValue={bortle}
            />
          </View>
          <TouchableOpacity style={styles.loginBtn} onPress={uploadImage}>
            <Text style={styles.loginText}>Save</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    borderWidth: 0,
    borderColor: "yellow"
  },
  image: {
    position: "relative",
    width: 155,
    height: 45,
    marginBottom: "5%",
  },
  inputView: {
    backgroundColor: "white",
    borderRadius: 10,
    width: "80%",
    height: 40,
    marginBottom: 10,
    // alignItems: "center",
    justifyContent: "center",
    // borderWidth: 5,
    // borderColor:"yellow" 
  },
  textcontainer: {
    // marginTop:"5%",
    display: "flex",
    marginBottom: "5%",
    alignItems: "center",
    justifyContent: "center",
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
    flexDirection: 'row',
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
    width: "80%",
    borderRadius: 25,
    height: "4%",
    minHeight: 50,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    marginTop: "5%",
    marginBottom: "5%",
    backgroundColor: "#FFC700",
  },
  loginBtn2: {
    width: "100%",
    borderRadius: 25,
    height: "4%",
    minHeight: 50,
    justifyContent: "center",
    position: "relative",
    marginTop: "5%",
    marginBottom: "5%",
    paddingHorizontal: '10%',
    backgroundColor: "#FFC700",
  },
  title: {
    color: "#FFC700",
    fontWeight: "bold",
    fontSize: 20,
    position: "relative",
    marginBottom: "5%",

  },
  loginText: {
    fontWeight: "bold",
  }
});
export default ImageUploadScreen;