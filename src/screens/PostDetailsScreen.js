import { 
    View, 
    KeyboardAvoidingView,
    SafeAreaView,
    ScrollView,
    StyleSheet,
} from 'react-native'
import { disallowScreenshot } from 'react-native-screen-capture';
import { useFocusEffect } from '@react-navigation/native';
import React from 'react'
import { useHeaderHeight } from '@react-navigation/elements';
import { FullWidthPostsContainer } from '../components/organisms';


const PostDetailsScreen = ({ route, navigation }) => {
    // console.log('PDS', navigation.getState());
    useFocusEffect(React.useCallback(()=>{
        disallowScreenshot(true);
        return () => {
            // reenable screenshots upon leaving screen
            disallowScreenshot(false);
        }
    }))
    const props = route.params;
    const headerHeight = useHeaderHeight();
    
  return (
    <SafeAreaView style={styles.container} >
        <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"} 
            style={{
                borderColor: "yellow",
                borderWidth: 0,
            }}
            keyboardVerticalOffset={headerHeight}
        >
            <ScrollView
                contentContainerStyle={containerstyle}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.feedView}>
                    <FullWidthPostsContainer props={props}  />
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
        </SafeAreaView>
  )
}

const containerstyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
    borderColor: "yellow",
    borderWidth: 0,
    paddingVertical: "3%",
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    feedView: {
        width: "93%",
        borderColor: "white",
        borderWidth: 0
    },
    text: {
        fontSize: 25,
        fontWeight: '500',
        color: 'red',
        textAlign: 'center'
    },
});  

export default PostDetailsScreen