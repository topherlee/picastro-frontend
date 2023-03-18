import React, { useContext, useEffect, useState } from 'react';

import {
    Button,
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    TouchableOpacity,
    View,
    Platform
} from 'react-native';

import { UserNameImageBurgerHeader } from '../components/molecules';
import { HalfWidthPostsContainer } from '../components/organisms';
import { AuthContext } from '../context/AuthContext';
import MasonryList from 'reanimated-masonry-list';


const HomeScreen = ({ navigation }) => {
    const [data, setData] = useState([]);
    const {domain, setDomain, token, setCurrentUser} = useContext(AuthContext);
    
    useEffect(() => {
        Platform.OS === "android" ? setDomain('http://10.0.2.2:8000') : "";
        //console.log(`Token ${token}`)

        fetch(`${domain}/api/feed/home/`, {
            method: 'GET',
            headers: {
                'Authorization': `Token ${token}`,
                'Content-Type': 'application/json'
            }
        })
        .then(res => {return res.json()})
        .then((result) => {
            //console.log("INCOMINGDATA",token,result)
            setData(result);
        }).catch (err => {
            console.log(err, "Failed to get data from API.");
        })
    }, [data])

    return (
        <SafeAreaView style={styles.container}>
            <UserNameImageBurgerHeader />
            <ScrollView style={{
                backgroundColor: "black",
                borderColor: "blue",
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
                    data={data}
                    keyExtractor={item => item.id}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => <HalfWidthPostsContainer {...item} />}
                    contentContainerStyle={{
                        borderColor: "red",
                        borderWidth: 0,
                        paddingTop: "3%",
                        paddingLeft: "4%"
                    }}
                    style={{
                        flex: 1,
                        maxWidth: "96%",
                        columnGap: 10,
                        borderColor: "yellow",
                        borderWidth: 0,
                    }}
                >
                </MasonryList>
            </ScrollView>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        backgroundColor: "#2F2F2F",
        borderColor: "green",
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

export default HomeScreen;