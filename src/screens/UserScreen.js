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
        currentUser,
        searchAndFilterUrl,
        setSearchAndFilterUrl
    } = useContext(AuthContext);
    const [modalVisible, setModalVisible] = useState(true);
    

    //setUrlAttachement('?poster=' + currentUser.id);


    useEffect(() => {
        //Platform.OS === "android" ? setDomain('http://10.0.2.2:8000') : "";
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

        const userForApiCall = '/api/feed/' + searchAndFilterUrl;
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

            <View style={styles.profilecontainer}>
                <View style={styles.profile}>
                    <Image style={styles.image1} source={require('../assets/Sample/sampleuserwithicon.png')} />
                    <View style={styles.profilecontent}>
                        <Text style={styles.profileName}>{currentUser.username}</Text>
                        <Text style={styles.profilePronounce}>he/him</Text>
                        <View style={styles.starandcount}>
                            <StarIconSvg style={styles.starcount} height="40" width="40" fill="#F0355B" stroke="#F0355B" strokeWidth="0"> </StarIconSvg>
                            <Text style={styles.stars}>1,234</Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={styles.textcontainer}>
                <Text style={styles.profiledesc}>Lawyer By Day, very amateur astrophotographer by night. All Photo by Me. Help Elliot fight</Text>
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
                    <AwardGoldSvg height="25" width="25" resizeMode="contain" style={styles.awarditem}/><Text style={styles.awardcount}>10</Text>
                    <AwardSilverSvg height="25" width="25" resizeMode="contain" style={styles.awarditem}/><Text style={styles.awardcount}>10</Text>
                    <AwardBronzeSvg height="25" width="25" resizeMode="contain" style={styles.awarditem}/><Text style={styles.awardcount}>10</Text>
            
                    <TouchableOpacity style={styles.loginBtn} onPress= {function(){ navigation.navigate('EditProfile') }}>
                        <Text style={styles.loginText}>Edit Profile</Text> 
                    </TouchableOpacity>
            </View>
              
        
            {/* <View style={styles.headerContainer}> */}
            
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
    profilecontainer:{
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
    profilecontent:{
        justifyContent: 'center',
        paddingBottom:0,
        margin:10,
    },
    starandcount:{
        flexDirection: 'row',
        marginTop: 5,
    },
    multiplelink:{
        flexDirection: 'row',
        marginTop: 18,
        marginLeft: '5%',
        marginRight:'5%',
        
    },
    starcount:{
        marginLeft:-5,
        marginTop:5,
    },
    stars:{
        fontSize: 12,
        color: '#fff',
        marginLeft: 5,
        marginTop: 20,
        fontWeight: '500',
    },
    awardcontainer:{
        marginTop: '5%',
        flexDirection: 'row',
        marginLeft: '5%',
        marginRight:'5%',
    },
    awarditem:{
        
    },
    awardcount:{
        color: '#FFF',
        marginTop: 5,
        marginRight:'5%',
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
        marginTop:"5%",
        marginBottom:"5%",
    },
    profiledesc: {
        //textAlignments: 'left',
        fontSize: 15,
        fontWeight: 500,
        color: 'white',
        marginLeft: '5%',
        marginRight:'5%',
        justifyContent: 'center'
    },
    externalprofilelink: {
        fontSize: 12,
        color: 'grey',
        paddingRight:'5%'
        
    },
    image1: {
        position: "relative",
        width: 100,
        height:100,
        marginBottom: "5%",
        
    },
    image: {
        position: "relative",
        width: 155,
        height:45,
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