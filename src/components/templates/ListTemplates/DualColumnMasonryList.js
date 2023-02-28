import React from 'react';
import {
    Button,
    Image,
    ImageBackground,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TouchableOpacity
} from 'react-native';

import MasonryList from 'reanimated-masonry-list';

import { HalfWidthPostsContainer } from '../../organisms';


const DualColumnMasonryList = ({props}) => {
    return (
        <ScrollView style={{
            backgroundColor: "black",
            borderColor:"blue", 
            borderWidth: 0,
    }}
    contentContainerStyle={{
        display: "flex",
        flex: 1,
        flexDirection: 'row',
        justifyContent: "center",
        alignContent: 'center'
    }}>
        <MasonryList
            data={props}
            keyExtractor={item => item.id}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => <HalfWidthPostsContainer {...item} />}
            contentContainerStyle={{
                borderColor:"red", 
                borderWidth: 0,
                paddingTop: "3%",
                paddingLeft: "4%"
            }}
            style={{
                flex: 1,
                maxWidth: "96%",
                columnGap: 10,
                borderColor:"yellow", 
                borderWidth: 0,
            }}
        >
        </MasonryList>
    </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        backgroundColor: "#2F2F2F",
        borderColor:"green", 
        borderWidth: 0,
    },
    text: {
        fontSize: 25,
        fontWeight: '500',
        color: 'red',
        textAlign: 'center'
    },
    image: {
        width: "100%",
        height: 200
    }
});


export default DualColumnMasonryList;