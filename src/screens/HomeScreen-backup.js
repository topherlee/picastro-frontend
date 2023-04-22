import React, { useContext, useEffect, useState } from 'react';

import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    RefreshControl,
} from 'react-native';

import { UserNameImageBurgerHeader } from '../components/molecules';
import { HalfWidthPostsContainer } from '../components/organisms';
import { AuthContext } from '../context/AuthContext';
import MasonryList from 'reanimated-masonry-list';

const HomeScreen = ({ navigation }) => {
    const [data, setData] = useState([]);
    const {token, fetchInstance} = useContext(AuthContext);
    const [refreshing, setRefreshing] = useState(true);

    async function loadHomescreen() {
        var {response,data} = await fetchInstance('/api/feed/ordering=pub_date', {
            method: 'GET',
            headers: {
                'Authorization': `Token ${token.access}`,
                'Content-Type': 'application/json'
            }
        })
        setData(data);
    }

    useEffect(() => {
        //Platform.OS === "android" ? setDomain('http://10.0.2.2:8000') : "";
        //console.log('AccessToken',jwtDecode(token.access))

        loadHomescreen().then(()=>{setRefreshing(false)}).catch(err => {console.log(err)})
        // .then(res => {return res.json()})
        // .then((result) => {
        //     //console.log("INCOMINGDATA",token,result)
        //     setData(result);
        // }).catch (err => {
        //     console.log(err, "Failed to get data from API.");
        // })
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <UserNameImageBurgerHeader />
            <ScrollView 
                refreshControl={
                    <RefreshControl tintColor={'grey'} refreshing={refreshing} onRefresh={() => {loadHomescreen().then(()=>{setRefreshing(false)}).catch(err => {console.log(err)})}} />
                }
                style={{
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
                }}
                showsVerticalScrollIndicator={false}
            >
                {data.length > 0 ? 
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
                    />
                : 
                    <Text style={{color:'white'}}>Nothing to display here</Text>
                }
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
        textAlign: 'center',
        zIndex: 500
    },
    image: {
        width: "100%",
        height: 200
    }
});

export default HomeScreen;