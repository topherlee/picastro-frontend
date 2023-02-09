import { 
    View, 
    Text,
    SafeAreaView,
    ScrollView,
    StyleSheet,
} from 'react-native'

import React from 'react'

const ProfileScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
            {/* <Header /> */}
            <ScrollView>
                <Text style={styles.text}>
                    This is profile screen
                </Text>
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

export default ProfileScreen