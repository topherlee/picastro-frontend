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
    Dimensions,
    RefreshControl,
} from 'react-native';
import { ExtendedPicastroBurgerHeader, UserNameImageBurgerHeader, UserNameImageWithoutBurger } from '../components/molecules';
import { HalfWidthPostsContainer } from '../components/organisms';
import MasonryList from 'reanimated-masonry-list';
import { AwardIcon, ExtendedPicastroLogo } from '../components/atoms';
import { AutoscaleImage } from '../components/atoms';

import StarIconSvg from '../assets/star-icon.svg';
import AwardGoldSvg from '../assets/buttons/award-gold.svg';
import AwardSilverSvg from '../assets/buttons/award-silver.svg';
import AwardBronzeSvg from '../assets/buttons/award-bronze.svg';

import { AuthContext } from '../context/AuthContext';


const UserScreen = ({ navigation }) => {
    const [data, setData] = useState([]);
    const {
        domain,
        setDomain,
        token,
        fetchInstance,
        user,
        setUser,
        currentUser,
        userUrl,
        setUserUrl,
        searchAndFilterUrl,
        setSearchAndFilterUrl,
        userScreenUrl
    } = useContext(AuthContext);
    const [refreshing, setRefreshing] = useState(true);
    const [userFeedUrl, setUserFeedUrl] = useState("");


    //setUrlAttachement('?poster=' + currentUser.id);

    async function loadUserFeed() {
        var { response, userFeed } = await fetchInstance(userFeedUrlForApiCall, {
            method: 'GET',
            headers: {
                'Authorization': `Token ${token.access}`,
                'Content-Type': 'application/json'
            }
        })
        setData(userFeed);
    };

    async function loadUserData() {
        var { response, userData } = await fetchInstance(userForApiCall, {
            method: 'GET',
            headers: {
                'Authorization': `Token ${token.access}`,
                'Content-Type': 'application/json'
            }
        })
        setUser(userData);
    };

    const userFeedUrlForApiCall = '/api/feed/' + userFeedUrl;
    console.log("urlForApiCall", userFeedUrlForApiCall);

    setUserUrl('1');
    const userForApiCall = '/api/user/' + userUrl;
    console.log("userForApiCall", userForApiCall);


    useEffect(() => {
        
        console.log("urlForApiCall", userFeedUrlForApiCall);
        console.log("userForApiCall", userForApiCall);

        loadUserFeed().then(() => { setRefreshing(false) }).catch(err => { console.log(err) })

        loadUserData().then(() => { console.log("user", user); }).catch(err => { console.log(err) });

    }, [userForApiCall,userFeedUrlForApiCall]);

    //console.log("user", user);


    return (
        <SafeAreaView style={styles.container}>

            <ExtendedPicastroBurgerHeader />

            <View style={styles.profilecontainer}>
                <View style={styles.profile}>
                    <AutoscaleImage uri={user.profileImage} width={(0.1 * Dimensions.get('window').width - 33) / 2} />
                    <View style={styles.profilecontent}>
                        <Text style={styles.profileName}>{user.username}</Text>
                        <Text style={styles.profilePronounce}>{user.genderIdentifier}</Text>
                        <View style={styles.starandcount}>
                            <StarIconSvg style={styles.starcount} height="40" width="40" fill="#F0355B" stroke="#F0355B" strokeWidth="0"> </StarIconSvg>
                            <Text style={styles.stars}>1,234</Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={styles.textcontainer}>
                <Text style={styles.profiledesc}>{user.username}</Text>
                <View style={styles.multiplelink}>
                    <TouchableOpacity onPress={() => Linking.openURL('linktr.ee/starboyastro')}>
                        <Text style={styles.externalprofilelink}> linktr.ee/starboyastro </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Linking.openURL('linktr.ee/starboyastro')}>
                        <Text style={styles.externalprofilelink}> linktr.ee/starboyastro </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.awardcontainer}>
                <AwardGoldSvg height="25" width="25" resizeMode="contain" style={styles.awarditem} /><Text style={styles.awardcount}>10</Text>
                <AwardSilverSvg height="25" width="25" resizeMode="contain" style={styles.awarditem} /><Text style={styles.awardcount}>10</Text>
                <AwardBronzeSvg height="25" width="25" resizeMode="contain" style={styles.awarditem} /><Text style={styles.awardcount}>10</Text>

                <TouchableOpacity style={styles.loginBtn} onPress={function () { navigation.navigate('EditProfile') }}>
                    <Text style={styles.loginText}>Edit Profile</Text>
                </TouchableOpacity>
            </View>


            {/* <View style={styles.headerContainer}> */}

            {/* </View> */}

            <ScrollView
                refreshControl={
                    <RefreshControl tintColor={'grey'} refreshing={refreshing} onRefresh={() => { loadHomescreen().then(() => { setRefreshing(false) }).catch(err => { console.log(err) }) }} />
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
                    <Text style={{ color: 'white' }}>Nothing to display here</Text>
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
    profilecontainer: {
        marginTop: 20,
        paddingLeft: 20,
    },
    profile: {
        flexDirection: 'row',
        marginBottom: 0,
    },
    profileName: {
        fontSize: 21,
        fontWeight: 'bold',
        color: '#fff',
        paddingBottom: 0
    },
    profilePronounce: {
        fontSize: 12,
        color: '#fff',
    },
    profilecontent: {
        justifyContent: 'center',
        paddingBottom: 0,
        margin: 10,
    },
    starandcount: {
        flexDirection: 'row',
        marginTop: 5,
    },
    multiplelink: {
        flexDirection: 'row',
        marginTop: 18,
        marginLeft: '5%',
        marginRight: '5%',

    },
    starcount: {
        marginLeft: -5,
        marginTop: 5,
    },
    stars: {
        fontSize: 12,
        color: '#fff',
        marginLeft: 5,
        marginTop: 20,
        fontWeight: '500',
    },
    awardcontainer: {
        marginTop: '5%',
        flexDirection: 'row',
        marginLeft: '5%',
        marginRight: '5%',
    },
    awarditem: {

    },
    awardcount: {
        color: '#FFF',
        marginTop: 5,
        marginRight: '5%',
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
    },
    textcontainer: {
        marginTop: "5%",
        marginBottom: "5%",
    },
    profiledesc: {
        //textAlignments: 'left',
        fontSize: 15,
        fontWeight: 500,
        color: 'white',
        marginLeft: '5%',
        marginRight: '5%',
        justifyContent: 'center'
    },
    externalprofilelink: {
        fontSize: 12,
        color: 'grey',
        paddingRight: '5%'

    },
    image1: {
        position: "relative",
        width: 100,
        height: 100,
        marginBottom: "5%",

    },
    image: {
        position: "relative",
        width: 155,
        height: 45,
        marginBottom: "5%",

    },
    loginBtn: {
        marginLeft: 'auto',
        position: 'relative',
        width: 90,
        borderRadius: 25,
        height: 35,
        alignItems: "center",
        justifyContent: "center",
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