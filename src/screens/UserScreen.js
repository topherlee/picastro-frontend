import React from 'react';

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

const props = [
    {
        "imageURL": "http://127.0.0.1:8000/data/assets/TestAstroImages/Element1.png",
        "astroNameShort": "IC442",
        "astroNameShort2": "NGC 1234",
        "astroNameShort3": "Omega",
        "astroName": "Star #1",
        "poster": "Starman",
        "userImage": require('../assets/Sample/sampleuser2.png'),
        "imageIsSaved": false,
        "award": "bronze",
        "exposureTime": "6 hrs",
        "moonPhase": "50%",
        "cloudCoverage": "10%",
        "bortle": "3",
        "imageDescription": "The Omega Nebula, also known as the Swan Nebula, Checkmark Nebula, Lobster Nebula, and the Horseshoe Nebula is an H II region in the constellation Sagittarius. It was discovered by Philippe Loys de Chéseaux in 1745. Charles Messier catalogued it in 1764. ",
        "starCamp": "Glasgow",
        "leadingLight": false
    },
    {
        "imageURL": "https://assets3.cbsnewsstatic.com/hub/i/r/2021/08/02/170e414f-dcd6-4f57-b7bd-9f8082b49046/thumbnail/620x349/34fcbaf7845cecb6d5213359c77718db/jupiterjetstreams.jpg",
        "astroNameShort": "SS234",
        "astroNameShort2": "NGC 5678",
        "astroNameShort3": "Omega Nebula",
        "astroName": "Star #2",
        "poster": "Moonboy",
        "userImage": require('../assets/Sample/sampleuser2.png'),
        "imageIsSaved": false,
        "award": "none",
        "exposureTime": "6 hrs",
        "moonPhase": "50%",
        "cloudCoverage": "10%",
        "bortle": "3",
        "imageDescription": "A dark nebula or absorption nebula is a type of interstellar cloud, particularly molecular clouds, that is so dense that it obscures the visible wavelengths of light from objects behind it, such as background stars and emission or reflection nebulae. The extinction of the light is caused by interstellar dust grains located in the coldest, densest parts of molecular clouds. Clusters and large complexes of dark nebulae are associated with Giant Molecular Clouds. Isolated small dark nebulae are called Bok globules. Like other interstellar dust or material, things it obscures are only visible using radio waves in radio astronomy or infrared in infrared astronomy. ",
        "starCamp": "Edinburgh",
        "leadingLight": false
    },
]




const UserScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
           
            <ExtendedPicastroBurgerHeader />
            <View style={styles.profilecontainer}>
                <View style={styles.profile}>
                    <Image style={styles.image1} source={require('../assets/Sample/sampleuserwithicon.png')} />
                    <View style={styles.profilecontent}>
                        <Text style={styles.profileName}>Starboy</Text>
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
        marginTop: '5%%',
        flexDirection: 'row',
        marginLeft: '5%',
        marginRight:'5%',
    },
    awarditem:{
        
    },
    awardcount:{
        color: '#FFF',
        marginTop:5,
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
        textAlignments: 'left',
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