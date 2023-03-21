import React, { useContext, useEffect, useState } from 'react';

import {
    Button,
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    useColorScheme,
    View,
    Linking,
} from 'react-native';
import { ExtendedPicastroBurgerHeader, UserNameImageBurgerHeader,UserNameImageWithoutBurger } from '../components/molecules';
import { HalfWidthPostsContainer } from '../components/organisms';
import MasonryList from 'reanimated-masonry-list';
import { AwardIcon, ExtendedPicastroLogo } from '../components/atoms';
import { AuthContext } from '../context/AuthContext';



const UserScreen = ({ navigation }) => {
    const [data, setData] = useState([]);
    const {
        domain,
        setDomain,
        token,
        fetchInstance,
        currentUser,
        searchAndFilterUrl,
        setSearchAndFilterUrl
    } = useContext(AuthContext);
    const [modalVisible, setModalVisible] = useState(true);
    

    //setUrlAttachement('?poster=' + currentUser.id);


    useEffect(() => {
        Platform.OS === "android" ? setDomain('http://10.0.2.2:8000') : "";
        //console.log('AccessToken',jwtDecode(token.access))
        console.log(currentUser);
        
        const urlForApiCall = '/api/feed/' + searchAndFilterUrl;
        console.log("urlForApiCall", urlForApiCall);

        async function loadSortAndFilterScreen() {
            var {response,data} = await fetchInstance(urlForApiCall, {
                method: 'GET',
                headers: {
                    'Authorization': `Token ${token.access}`,
                    'Content-Type': 'application/json'
                }
            })
            setData(data);
        }

        loadSortAndFilterScreen().catch(err => {console.log(err)})
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
           
            <ExtendedPicastroBurgerHeader />
            <Image style={styles.image1} source={require('../assets/Sample/sampleuserwithicon.png')} />
            <Text style={styles.text}>test2 {currentUser.username}</Text>
            <AwardIcon />
            <View style={styles.textcontainer}>
            <Text style={styles.text}>   Lawyer By Day, very amateur astrophotographer    </Text>   
            <Text style={styles.text}>    by night. All Photo by Me. Help Elliot fight                   </Text> 
            <TouchableOpacity onPress={() => Linking.openURL('http://google.com')}>
            <Text style={styles.text1}> Picastro link </Text> 
               
            </TouchableOpacity>
            
            </View>
              
            <AwardIcon />
            {/* <View style={styles.headerContainer}> */}
            <TouchableOpacity style={styles.loginBtn} onPress= {function(){ navigation.navigate('EditProfile') }}>
                <Text style={styles.loginText}>Edit Profile</Text> 
            </TouchableOpacity>
            {/* </View> */}
            
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
        borderColor:"green", 
        borderWidth: 0,
    },
    headerContainer: {
        backgroundColor: 'black',
        display: "flex",
        top: 0,
        width: '100%',
        height: 60,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        // gap: 10,
    },
    textcontainer: {
        marginTop:"5%",
        marginBottom:"5%",
    },
    text: {
        fontSize: 15,
        fontWeight: '500',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center'
        
    },
    text1: {
        fontSize: 14,
        marginTop: 10,
        justifyContent: 'center',
        color: 'grey',
        left: 30,
        
    },
    image: {
        position: "relative",
        width: 155,
        height:45,
        marginBottom: "5%",
        
    },
    loginBtn: {
        width: "30%",
        borderRadius: 25,
        height: "7%",
        // minHeight: 50,
        alignItems: "center",
        justifyContent: "center",
        // position: "relative",
        marginTop: "10%",
        marginBottom: "3%",
        backgroundColor: "#FFC700",
    },
    loginText: {
        fontWeight: "bold",
        // flexDirection:'row',
        // position: "relative",
        // marginBottom: "2%"
        
    },
   
    // title: {
    //     color: "#FFC700",
    //     fontWeight: "bold",
    //     fontSize: 20,
    //     position: "relative",
    //     top: "-5%"
    //   },
});

export default UserScreen;