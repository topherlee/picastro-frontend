import { 
    View, 
    Text,
    Button,
    SafeAreaView,
    ScrollView,
    StyleSheet,
} from 'react-native'

import React from 'react'

const NotificationsScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
            {/* <Header /> */}
            <ScrollView>
                <Text style={styles.text}>
                    Still in progress... check back later
                </Text>
                <Button
                    title='Go to Home'
                    onPress={() => navigation.navigate('Home')}
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