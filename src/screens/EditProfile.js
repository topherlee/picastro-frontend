import React, { useState, useContext, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Dimensions,
  SafeAreaView
} from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { AuthContext } from "../context/AuthContext";
import { launchImageLibrary } from "react-native-image-picker";
import { AutoscaleImage } from "../components/atoms";
import { SelectList } from "react-native-dropdown-select-list";
import globalStyling from "../../constants/globalStyling";

var userID;

const EditProfile = ({ navigation }) => {
  const {
    token,
    fetchInstance,
    currentUser, setCurrentUser,
    retry, setRetry
  } = useContext(AuthContext);
  const [photo, setPhoto] = useState(null);
  const [selected, setSelected] = useState('')
  const [experienceLevel, setExperienceLevel] = useState('');
  const [firstName, setFirstName] = useState(currentUser?.first_name);
  const [lastName, setLastName] = useState(currentUser?.last_name);
  const [genderIdentifier, setGenderIdentifier] = useState(currentUser?.genderIdentifier);
  const [location, setLocation] = useState(currentUser?.location);
  const [userDescription, setUserDescription] = useState(currentUser?.userDescription);
//   const [phone, setPhone] = useState(currentUser?.phone_no)
    const inputField = useRef([]);
    
  const experienceCategory = [
    { label: '0-1 years', value: '1' },
    { label: '2-5 years', value: '2' },
    { label: '5-10 years', value: '3' },
    { label: '10 years plus', value: '4' },
  ];

  const uploadedHandler = async (res) => {
    console.log(res)
    if (!res.ok) { 
        Alert.alert("Profile Update Failed", JSON.stringify(res.status)); 
    } else {
        var data = await res.json();
        console.log('UPLOAD RESULT', data);
        setCurrentUser(data)
        Alert.alert("Profile Updated", "Your profile has been successfully updated.",[{
            text: "Ok",
            onPress: () => { setRetry(retry + 1); navigation.goBack() }
        }]);
    }
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
        setPhoto(response.assets[0])
      }
    });
  }

    const uploadImage = async () => {
      
    try {
      var formData = new FormData();
      if (photo?.uri && photo?.fileName && photo?.type) {
          formData.append("profileImage", {
            'uri': photo.uri,
            'name': photo.fileName,
            'type': photo.type
          })
      }

    //   formData.append("username", currentUser?.username)
      formData.append("first_name", firstName)
      formData.append("last_name", lastName)
      formData.append("genderIdentifier", genderIdentifier)
      formData.append("location", location)
      formData.append("userDescription", userDescription)
    //   formData.append('phone_no', phone)

        var response = await fetchInstance(`/api/user/${currentUser.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        body: formData
      })
      if (response.ok) {
        return response;
      } else {
        throw new Error(``)
      }
    } catch (err) {
      console.log('ERROR EDIT PROFILE', err);
      return response;
    }
  }

  const placeholderTextColor = "grey";

  return (
      <SafeAreaView style={styles.container}>
          <KeyboardAwareScrollView
              contentContainerStyle={{
                  paddingVertical: '3%',
                  display: 'flex',
                  alignItems: 'center',
              }}
              showsVerticalScrollIndicator={false}>
              <View style={styles.textcontainer}>
                  <Text style={globalStyling.title}>Edit your Profile</Text>
                  <TouchableOpacity onPress={pickImage}>
                      {photo ? (
                          <AutoscaleImage
                              key={photo.uri}
                              uri={photo.uri}
                              height={Dimensions.get('window').height / 3}
                              aspectRatio={photo.width / photo.height}
                          />
                      ) : currentUser ? (
                          <Image
                              style={globalStyling.profileImage}
                              source={{
                                  uri: currentUser.profileImage + `?date=${new Date()}`,
                              }}
                          />
                      ) : (
                          <Icon
                              name="file-image-plus"
                              size={100}
                              color={'#FFC700'}
                          />
                      )}
                  </TouchableOpacity>
                  <TouchableOpacity
                      style={globalStyling.loginBtn2}
                      onPress={pickImage}>
                      <Text style={globalStyling.loginText}>
                          Pick Another Image
                      </Text>
                  </TouchableOpacity>
              </View>

              {/* this is not yet implemented on the backend
        <View style={styles.selectListView}>
          <SelectList
            styles={styles.border}
            placeholder="Experience level"
            placeholderTextColor={placeholderTextColor}
            search={false}
            data={experienceCategory}
            inputStyles={styles.dropdownText} //style for the text of the unselected box
            boxStyles={styles.DropdownSelectListBox} //style for the unselected box
            dropdownStyles={styles.dropdownSelectList} //style of the scrollview, when box selected
            dropdownTextStyles={styles.dropdownText} //style of text of each element inside scrollview
            dropdownItemStyles={styles.dropdownItemStyles} //style of each element inside scrollview
            setSelected={setSelected}
            onSelect={() => setExperienceLevel(selected)}
          />
        </View> */}
              <View style={globalStyling.inputView}>
                  <TextInput
                      style={globalStyling.inputFieldText}
                      placeholder="First Name"
                      placeholderTextColor={placeholderTextColor}
                      onChangeText={newFirstName => setFirstName(newFirstName)}
                      // defaultValue={currentUser.first_name}
                      value={firstName}
                      maxLength={20}
                      onSubmitEditing={()=>{inputField.current[0].focus()}}
                  />
              </View>
              <View style={globalStyling.inputView}>
                  <TextInput
                      style={globalStyling.inputFieldText}
                      placeholder="Last Name"
                      placeholderTextColor={placeholderTextColor}
                      onChangeText={newLastName => setLastName(newLastName)}
                      // defaultValue={currentUser.last_name}
                      value={lastName}
                      maxLength={20}
                      ref={ref => inputField.current[0] = ref}
                      onSubmitEditing={()=>{inputField.current[1].focus()}}
                  />
              </View>
              <View style={globalStyling.inputView}>
                  <TextInput
                      style={globalStyling.inputFieldText}
                      placeholder="Gender Identifier"
                      placeholderTextColor={placeholderTextColor}
                      onChangeText={newGenderIdentifier =>
                          setGenderIdentifier(newGenderIdentifier)
                      }
                      // defaultValue={currentUser.genderIdentifier}
                      value={genderIdentifier}
                      maxLength={10}
                      ref={ref => inputField.current[1] = ref}
                      onSubmitEditing={()=>{inputField.current[2].focus()}}
                  />
              </View>
              <View style={globalStyling.inputView}>
                  <TextInput
                      style={globalStyling.inputFieldText}
                      placeholder="Location"
                      placeholderTextColor={placeholderTextColor}
                      onChangeText={newLocation => setLocation(newLocation)}
                      defaultValue={currentUser?.location}
                      value={location}
                      maxLength={50}
                      ref={ref => inputField.current[2] = ref}
                      onSubmitEditing={()=>{inputField.current[3].focus()}}
                  />
              </View>
              {/* <View style={globalStyling.inputView}>
                  <TextInput
                      style={globalStyling.inputFieldText}
                      placeholder="Phone No."
                      placeholderTextColor={placeholderTextColor}
                      onChangeText={num => setPhone(num)}
                      defaultValue={currentUser?.phone_no}
                      value={phone}
                      maxLength={50}
                  />
              </View> */}
              <View style={globalStyling.inputViewLarge}>
                  <TextInput
                      style={globalStyling.inputFieldTextLarge}
                      placeholder="Key Info About You"
                      placeholderTextColor={placeholderTextColor}
                      onChangeText={newUserDescription =>
                          setUserDescription(newUserDescription)
                      }
                      defaultValue={currentUser?.userDescription}
                      value={userDescription}
                      multiline={true}
                      numberOfLines={4}
                      maxLength={200}
                      ref={ref => inputField.current[3] = ref}
                  />
              </View>

              <TouchableOpacity
                  style={globalStyling.loginBtn}
                  onPress={() =>
                      uploadImage()
                          .then(response => {
                              uploadedHandler(response);
                          })
                          .catch(function (err) {
                              console.log('ERROR EDIT PROFILE', err);
                          })
                  }>
                  <Text style={globalStyling.loginText}>Save Changes</Text>
              </TouchableOpacity>
              {/* </KeyboardAvoidingView> */}
          </KeyboardAwareScrollView>
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
  textcontainer: {
    // marginTop:"5%",
    display: "flex",
    marginBottom: "5%",
    alignItems: "center",
    justifyContent: "center",
  },
  dropdownSelectList: {
    zIndex: 600,
    backgroundColor: 'white'
  },
  dropdownItemStyles: {
    //gap: 5,
    zIndex: 600,
    height: 40,

    textAlign: "center",
    color: "black",
  },
  dropdownText: {
    textAlign: "center",
    color: "grey",
  },
  DropdownSelectListBox: {
    zIndex: 500,
    height: 40,
    marginBottom: "5%",
    backgroundColor: 'white',
    borderColor: 'green',
    borderWidth: 0,
    color: 'black'
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
  border: {
    borderColor: 'green',
    borderWidth: 2,

  },
  selectListView: {
    zIndex: 500,
    borderColor: 'blue',
    borderWidth: 0,
    width: "80%",
  }
});
export default EditProfile;