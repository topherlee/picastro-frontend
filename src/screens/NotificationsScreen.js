import { 
    Text,
    Button,
    SafeAreaView,
    ScrollView,
    StyleSheet,
} from 'react-native';

import React from 'react';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const options = {
    title: 'Select Image',
    type: 'library',
    options: {
        selectionLimit: 1,
        mediaType: 'photo',
        includeBase64: false,
    },
}

const NotificationsScreen = ({ navigation }) => {

    const openGalery = async() => {
        const images = await launchImageLibrary(options);
        console.log(images);
    }
  return (
    <SafeAreaView style={styles.container}>
            {/* <Header /> */}
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <Text style={styles.text}>
                    Still in progress... check back later
                </Text>
                <Button
                    title='Upload'
                    onPress={openGalery}
                />
            </ScrollView>
        </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    text: {
        fontSize: 25,
        fontWeight: '500',
        color: 'red',
        textAlign: 'center'
    },
});  

export default NotificationsScreen;