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

// var photo;
var imgHeight;

const ImageUploadScreen = ({ navigation }) => {
  const [user, setUser] = useState([]);
  const { setIsSignedIn, domain, token, setDomain } = useContext(AuthContext);
  const [photo, setPhoto] = useState(null);
  const [rerender, setRerender] = useState(false);
  const [
    imageDescription, setImageDescription,
    astroNameShort, setAstroNameShort,
    astroName, setAstroName,
    exposureTime, setExposureTime,
    moonPhase, setMoonPhase,
    cloudCoverage, setCloudCoverage,
    bortle, setBortle,
  ] = useState('');

  useEffect(() => {
    Platform.OS === "android" ? setDomain('http://10.0.2.2:8000') : "";
    //console.log(`Token ${token}`)

    fetch(`${domain}/api/current_user/`, {
        method: 'GET',
        headers: {
            'Authorization': `Token ${token}`,
            'Content-Type': 'application/json'
        }
    })
    .then(res => {return res.json()})
    .then((result) => {
        //console.log("INCOMINGDATA",result.username)
        setCurrentUser(result);
        setUser(result);
    }).catch (err => {
        console.log(err);
        //setData(existingData);
    })
  }, [])


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
    formData.append("poster", "3")
    console.log(formData)

    fetch(`${domain}/posts/`, {
      method: 'POST',
      headers: {
        'Authorization': `Token ${token}`,
        'Content-Type': 'multipart/form-data'
      },
      body: formData
    }).then(res => {
      return res.json()
    }).then((result) => {
      console.log(result)
    }).catch(err => {
      console.log(err);
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingVertical: "3%", }}>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={styles.textcontainer}>
            <Text style={styles.title}>Upload Image</Text>
            <TouchableOpacity onPress={pickImage}>
              {photo ?
                <AutoscaleImage key={photo.uri} uri={photo.uri} width={Dimensions.get('window').width} />
                :
                <Icon name="file-image-plus" size={100} color={'#FFC700'} />
                // <Image source={'../assets/Sample/sampleuserbig.png'} />
              }
            </TouchableOpacity>
            {photo ?
              <TouchableOpacity style={styles.loginBtn} onPress={pickImage}>
                <Text style={styles.loginText}>Choose an image</Text>
              </TouchableOpacity>
              :
              null
            }
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Image Description"
              placeholderTextColor="black"
              onChangeText={newImageDescription => setImageDescription(newImageDescription)}
              defaultValue={imageDescription}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Astro Name Short (e.g. 'M17')"
              placeholderTextColor="black"
              onChangeText={newAstroNameShort => setAstroNameShort(newAstroNameShort)}
              defaultValue={astroNameShort}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Astro Name Long"
              placeholderTextColor="black"
              onChangeText={newAstroName => setAstroName(newAstroName)}
              defaultValue={astroName}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Exposure Time"
              placeholderTextColor="black"
              onChangeText={newExposureTime => setExposureTime(newExposureTime)}
              defaultValue={exposureTime}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Moon Phase"
              placeholderTextColor="black"
              onChangeText={newMoonPhase => setMoonPhase(newMoonPhase)}
              defaultValue={moonPhase}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Cloud Coverage"
              placeholderTextColor="black"
              onChangeText={newCloudCoverage => setCloudCoverage(newCloudCoverage)}
              defaultValue={cloudCoverage}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="BORTLE"
              placeholderTextColor="black"
              onChangeText={newBortle => setBortle(newBortle)}
              defaultValue={bortle}
            />
          </View>
          {/* <View style={styles.inputView}>
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

          </View> */}

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
    width: "100%",
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
    width: "100%",
    borderRadius: 25,
    height: "7%",
    minHeight: 50,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    marginTop: "5%",
    marginBottom: "5%",
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